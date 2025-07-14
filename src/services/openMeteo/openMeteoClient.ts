import apiClient from "../apiClient";
import type { OpenMeteoResponse, WeatherQueryParams } from "./openMeteo.types";

/**
 * Fetch weather data from Open-Meteo
 * @param params Query parameters as defined by the API
 * @returns Promise resolving to fully-typed OpenMeteoResponse
 */

export async function fetchWeather(
  params: WeatherQueryParams,
): Promise<OpenMeteoResponse> {
  return apiClient
    .get<OpenMeteoResponse>("/v1/forecast", { params })
    .then((res) => res.data);
}
