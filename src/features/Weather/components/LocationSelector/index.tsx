import { useEffect, useState } from 'react';
import { useWeatherContext } from './../../context/WeatherContext';

interface Location {
  value: string
  city: string
  country: string
  lat: number
  lon: number
}

const locationsData: Location[] = [
  { value: 'ec-quito', city: 'Quito', country: 'Ecuador', lat: -0.180653, lon: -78.467834 },
  { value: 'ec-guayaquil', city: 'Guayaquil', country: 'Ecuador', lat: -2.170998, lon: -79.922359 },
]
export default function LocationSelector() {
  const { setLocation } = useWeatherContext()
  const [selectedValue, setSelectedValue] = useState<string>('ec-guayaquil')

  useEffect(() => {
    const loc = locationsData.find((l) => l.value === selectedValue);
    if (loc) {
      setLocation(loc.lat, loc.lon);
    }
  }, [selectedValue, setLocation]);

  return (
    <div className="flex flex-col gap-2 w-1/3 px-10">
      <label htmlFor="location" className="text-sm text-center font-medium text-green-900">
        Ubicación Geográfica
      </label>
      <div className="relative">
        <select
          id="location"
          value={selectedValue}
          onChange={e => setSelectedValue(e.target.value)}
          className="w-full bg-white border border-r-green-700 rounded-md py-2 px-3 pr-8 text-sm text-green-900  focus:border-green-900"
        >
          {locationsData.map(loc => (
            <option key={loc.value} value={loc.value}>
              {loc.city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
