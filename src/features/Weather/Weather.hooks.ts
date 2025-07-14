import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { fetchWeather } from "./../../services/openMeteo/openMeteoClient";
import type {
  OpenMeteoResponse,
  WeatherQueryParams,
} from "./../../services/openMeteo/openMeteo.types";

export function useWeather(
  latitude: number,
  longitude: number,
  options?: Omit<WeatherQueryParams, "latitude" | "longitude" | "timezone">,
): UseQueryResult<OpenMeteoResponse, Error> {
  const MILISECONDS_PER_SECOND: number = 1000;
  const SECONDS_PER_MINUTE: number = 60;
  const params: WeatherQueryParams = {
    latitude,
    longitude,
    daily: ["sunshine_duration", "uv_index_max", "precipitation_sum"].join(","),
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
  };
  return useQuery<OpenMeteoResponse, Error>({
    queryKey: ["weather", params],
    queryFn: () => fetchWeather(params),
    staleTime: MILISECONDS_PER_SECOND * SECONDS_PER_MINUTE * 10, // 10 min (no background refetch before this)
  });
}
