import { Droplets, Thermometer } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useWeatherContext } from "../../context/WeatherContext";

export default function MetricsModule() {
  const { data, isLoading, error, latitude } = useWeatherContext();

  if (!latitude) return <div className="text-center">Selecciona una ubicación para ver la precipitación.</div>;
  if (isLoading) return <div className="text-center">Cargando métricas...</div>;
  if (error) return <div className="text-center text-red-600">Error al cargar los datos.</div>;
  if (!data) return <div className="text-center">Sin datos disponibles.</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-10">
      <Card className="metric-card bg-gradient-to-br from-sky-50 to-sky-200 border-sky-200">
        <div className="flex items-center gap-3 px-5">
          <div className="p-3 bg-sky-200 rounded-lg">
            <Thermometer className="h-6 w-6 text-sky-700" />
          </div>
          <div>
            <p className="text-sm text-sky-600 font-medium">Temperatura</p>
            <p className="text-2xl font-bold text-sky-800">{data.current.temperature_2m}</p>
          </div>
        </div>
      </Card>

      <Card className="metric-card bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
        <div className="flex items-center gap-3 px-5">
          <div className="p-3 bg-blue-200 rounded-lg">
            <Droplets className="h-6 w-6 text-blue-700" />
          </div>
          <div>
            <p className="text-sm text-blue-600 font-medium">Humedad</p>
            <p className="text-2xl font-bold text-blue-800">{data.current.relative_humidity_2m}</p>
          </div>
        </div>
      </Card>

      <Card className="metric-card bg-gradient-to-br from-green-50 to-green-100 border-green-200">
        <div className="flex items-center gap-3 px-5">
          <div className="p-3 bg-green-200 rounded-lg">
            <Droplets className="h-6 w-6 text-green-700" />
          </div>
          <div>
            <p className="text-sm text-green-600 font-medium">Precipitación</p>
            <p className="text-2xl font-bold text-green-800">{data.current.precipitation}</p>
          </div>
        </div>
      </Card>

      <Card className="metric-card bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
        <div className="flex items-center gap-3 px-5">
          <div className="p-3 bg-yellow-200 rounded-lg">
            <div className="w-6 h-6 bg-yellow-600 rounded-full"></div>
          </div>
          <div>
            <p className="text-sm text-yellow-600 font-medium">UV Index</p>
            <p className="text-2xl font-bold text-yellow-800">7</p>
          </div>
        </div>
      </Card>
    </div>

  )
}
