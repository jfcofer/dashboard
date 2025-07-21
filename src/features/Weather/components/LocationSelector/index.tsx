import { useState } from 'react';
import { useWeatherContext } from './../../context/WeatherContext';

interface Location {
  value: string
  label: string
  timezone: string
  lat: number
  lon: number
}

const locationsData: Location[] = [
  { value: 'ec-quito', label: 'Quito, Ecuador', timezone: 'GMT-5', lat: -0.180653, lon: -78.467834 },
  { value: 'ec-guayaquil', label: 'Guayaquil, Ecuador', timezone: 'GMT-5', lat: -2.170998, lon: -79.922359 },
  // … añade más con sus coords reales
]
export default function LocationSelector() {
  const { setLocation } = useWeatherContext()
  const [selectedValue, setSelectedValue] = useState<string>('ec-guayaquil')

  const handleChange = (value: string) => {
    setSelectedValue(value)
    const loc = locationsData.find(loc => loc.value === value)
    if (loc) {
      setLocation(loc.lat, loc.lon)
    }
  }

  return (
    <div className="flex flex-col gap-2 min-w-[280px]">
      <label htmlFor="location" className="text-sm font-medium text-forest-700">
      </label>
        Ubicación Geográfica
      <div className="relative">
        <select
          id="location"
          value={selectedValue}
          onChange={e => handleChange(e.target.value)}
          className="w-full bg-amber-400 border border-forest-200 rounded-md py-2 px-3 pr-8 text-sm text-forest-700 focus:outline-none focus:border-forest-500"
        >
          <option value="" disabled>
            Seleccionar ubicación
          </option>
          {locationsData.map(loc => (
            <option key={loc.value} value={loc.value}>
              {loc.label} — {loc.timezone}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
