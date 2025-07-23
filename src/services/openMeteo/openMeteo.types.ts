export interface WeatherQueryParams {
  latitude: number;
  longitude: number;
  hourly?: string;
  daily?: string;
  current?: string;
  timezone?: string;
}

export interface OpenMeteoResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: Currentunits;
  current: Current;
  hourly_units: Hourlyunits;
  hourly: Hourly;
  daily_units: Dailyunits;
  daily: Daily;
}

export interface Daily {
  time: string[];
  precipitation_sum: number[];
  uv_index_max: number[];
  sunshine_duration: number[];
}

export interface Dailyunits {
  time: string;
  precipitation_sum: string;
  uv_index_max: string;
  sunshine_duration: string;
}

export interface Hourly {
  time: string[];
  temperature_2m: number[];
  relative_humidity_2m: number[];
  apparent_temperature: number[];
  wind_speed_10m: number[];
  wind_gusts_10m: number[];
  precipitation_probability: number[];
  dew_point_2m: number[];
  rain: number[];
  showers: number[];
  snowfall: number[];
  soil_temperature_0cm: number[];
  soil_temperature_6cm: number[];
  soil_temperature_18cm: number[];
  soil_moisture_0_to_1cm: number[];
  soil_moisture_1_to_3cm: number[];
  soil_moisture_3_to_9cm: number[];
  soil_moisture_9_to_27cm: number[];
  et0_fao_evapotranspiration: number[];
  evapotranspiration: number[];
}

export interface Hourlyunits {
  time: string;
  temperature_2m: string;
  relative_humidity_2m: string;
  apparent_temperature: string;
  wind_speed_10m: string;
  wind_gusts_10m: string;
  precipitation_probability: string;
  dew_point_2m: string;
  rain: string;
  showers: string;
  snowfall: string;
  soil_temperature_0cm: string;
  soil_temperature_6cm: string;
  soil_temperature_18cm: string;
  soil_moisture_0_to_1cm: string;
  soil_moisture_1_to_3cm: string;
  soil_moisture_3_to_9cm: string;
  soil_moisture_9_to_27cm: string;
  et0_fao_evapotranspiration: string;
  evapotranspiration: string;
}

export interface Current {
  time: string;
  interval: number;
  temperature_2m: number;
  relative_humidity_2m: number;
  precipitation: number;
  weather_code: number;
  cloud_cover: number;
}

export interface Currentunits {
  time: string;
  interval: string;
  weather_code: string;
  cloud_cover: string;
}
