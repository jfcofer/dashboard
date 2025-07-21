import { createContext, useState, useContext, type ReactNode, useMemo } from 'react';
import { useWeather } from '../hooks/useWeather';
import type { OpenMeteoResponse } from './../../../services/openMeteo/openMeteo.types'; // Assuming types are in features/Weather/types
// Assuming types are in features/Weather/types

// 1. Define the shape of the context's state
interface WeatherContextType {
  data: OpenMeteoResponse | null;
  isLoading: boolean;
  error: Error | null;
  latitude?: number;
  longitude?: number;
  setLocation: (lat: number, lon: number) => void;
  hasLocation: boolean; // Useful for UI decisions
  clearLocation: () => void;
}

// 2. Create the context with a default value
const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

// 3. Create the Provider component
export function WeatherProvider({ children, initialLocation }: {
  children: ReactNode;
  initialLocation?: { lat: number; lon: number };
}) {
  const [latitude, setLatitude] = useState<number | undefined>(initialLocation?.lat);
  const [longitude, setLongitude] = useState<number | undefined>(initialLocation?.lon);

  const { data, error, isLoading } = useWeather(latitude, longitude, {
    enabled: latitude != null && longitude != null,
  });


  const setLocation = (lat: number, lon: number) => {
    setLatitude(lat);
    setLongitude(lon);
  };

  // useMemo ensures the context value object is stable
  const value = useMemo(() => ({
    data: data || null,
    isLoading,
    error,
    latitude,
    longitude,
    setLocation,
  }), [data, isLoading, error, latitude, longitude]);

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
}

// 4. Create a custom hook for easy consumption
export function useWeatherContext() {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error('useWeatherContext must be used within a WeatherProvider');
  }
  return context;
}
