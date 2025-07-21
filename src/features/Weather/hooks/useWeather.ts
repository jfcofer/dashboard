import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { fetchWeather } from "./../../../services/openMeteo/openMeteoClient";
import type {
  OpenMeteoResponse,
  WeatherQueryParams,
} from "./../../../services/openMeteo/openMeteo.types";

export function useWeather(
  latitude?: number,
  longitude?: number,
  options?: Omit<WeatherQueryParams, "latitude" | "longitude" | "timezone">,
): UseQueryResult<OpenMeteoResponse, Error> {
  const STALE_TIME_MS = 10 * 60 * 1000; // 10 minutes
  const WEATHER_QUERY_KEY = "weather" as const;

  const isValidLocation = latitude != null && longitude != null;
  const params: WeatherQueryParams | null = isValidLocation
    ? {
        latitude,
        longitude,
        daily: ["sunshine_duration", "uv_index_max", "precipitation_sum"].join(
          ",",
        ),
        hourly: [
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
        ].join(","),
        current: ["weather_code", "cloud_cover"].join(","),
        timezone: "auto",
        ...options,
      }
    : null;
  return useQuery<OpenMeteoResponse, Error>({
    queryKey: [WEATHER_QUERY_KEY, params],
    queryFn: () =>
      params
        ? fetchWeather(params)
        : Promise.reject(new Error("Invalid location")),
    enabled: isValidLocation,
    staleTime: STALE_TIME_MS, // 10 min (no background refetch before this)
  });
}
