import { useEffect, useState } from 'react';
import { useWeatherContext } from './../../context/WeatherContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin } from 'lucide-react';

interface Location {
  value: string
  city: string
  country: string
  lat: number
  lon: number
}

const locations: Location[] = [
  { value: 'ec-quito', city: 'Quito', country: 'Ecuador', lat: -0.180653, lon: -78.467834 },
  { value: 'ec-guayaquil', city: 'Guayaquil', country: 'Ecuador', lat: -2.170998, lon: -79.922359 },
]
export default function LocationSelector() {
  const { setLocation } = useWeatherContext()
  const [selectedValue, setSelectedValue] = useState<string>('ec-guayaquil')

  useEffect(() => {
    const loc = locations.find((l) => l.value === selectedValue);
    if (loc) {
      setLocation(loc.lat, loc.lon);
    }
  }, [selectedValue, setLocation]);

  return (

    <div className="flex flex-col gap-2 min-w-[280px] rounded-sm items-center">
      <label htmlFor="location" className="text-sm font-medium text-green-900">
        Ubicación Geográfica
      </label>
      <Select value={selectedValue} onValueChange={setSelectedValue}>
        <SelectTrigger id="location" className="bg-white pl-2 border-gray-200 w-full py-6">
          <div className="flex items-center gap-2 w-full justify-center">
            <MapPin className="h-4 w-4 text-gray-600" />
            <SelectValue placeholder="Seleccionar ubicación" />
          </div>
        </SelectTrigger>
        <SelectContent className="bg-white shadow-lg w-full">
          {locations.map((location) => (
            <SelectItem
              key={location.value}
              value={location.value}
              className="hover:bg-gray-100 focus:bg-gray-100"
            >
              <div className="flex flex-col">
                <span className="font-medium">{location.city}</span>
                <span className="text-xs text-gray-500">{location.country}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>

  );
}
