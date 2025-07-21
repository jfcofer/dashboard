import {
  useQuery,
  type UseQueryOptions,
  type UseQueryResult,
} from "@tanstack/react-query";
import { fetchWeather } from "./../../../services/openMeteo/openMeteoClient";
import type {
  OpenMeteoResponse,
  WeatherQueryParams,
} from "./../../../services/openMeteo/openMeteo.types";
import { useMemo } from "react";

const STALE_TIME_MS = 10 * 60 * 1_000; // 10 minutes
const WEATHER_QUERY_KEY = "weather" as const;

const DEFAULT_DAILY = [
  "sunshine_duration",
  "uv_index_max",
  "precipitation_sum",
] as const;

const DEFAULT_HOURLY = [
  "temperature_2m",
  "relative_humidity_2m",
  "dew_point_2m",
  "precipitation_probability",
  "apparent_temperature",
  "rain",
  "showers",
  "snowfall",
  "evapotranspiration",
  "et0_fao_evapotranspiration",
  "wind_speed_10m",
  "wind_gusts_10m",
  "soil_temperature_0cm",
  "soil_temperature_6cm",
  "soil_temperature_18cm",
  "soil_moisture_0_to_1cm",
  "soil_moisture_1_to_3cm",
  "soil_moisture_3_to_9cm",
  "soil_moisture_9_to_27cm",
] as const;

const DEFAULT_CURRENT = ["weather_code", "cloud_cover"] as const;

export type UseWeatherParams = Omit<
  WeatherQueryParams,
  "latitude" | "longitude" | "timezone"
>;

export type UseWeatherQueryOptions = Omit<
  UseQueryOptions<OpenMeteoResponse, Error>,
  "queryKey" | "queryFn"
>;

export function useWeather(
  latitude?: number,
  longitude?: number,
  params?: UseWeatherParams,
  queryOptions?: UseQueryOptions<OpenMeteoResponse, Error>,
): UseQueryResult<OpenMeteoResponse, Error> {
  const isValidLocation = latitude != null && longitude != null;

  const finalParams = useMemo<WeatherQueryParams | null>(() => {
    if (!isValidLocation) return null;
    return {
      latitude,
      longitude,
      timezone: "auto",
      daily: DEFAULT_DAILY.join(","),
      hourly: DEFAULT_HOURLY.join(","),
      current: DEFAULT_CURRENT.join(","),
      ...params,
    };
  }, [isValidLocation, latitude, longitude, params]);

  const queryKey = useMemo(
    () => [WEATHER_QUERY_KEY, finalParams] as const,
    [finalParams],
  );
  return useQuery<OpenMeteoResponse, Error>({
    queryKey: queryKey,
    queryFn: () =>
      finalParams
        ? fetchWeather(finalParams)
        : Promise.reject(new Error("Invalid location")),
    enabled: isValidLocation && (queryOptions?.enabled ?? true),
    staleTime: STALE_TIME_MS, // 10 min (no background refetch before this)
    ...queryOptions,
  });
}
