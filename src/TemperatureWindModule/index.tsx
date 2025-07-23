import { useWeatherContext } from '../features/Weather/context/WeatherContext';
import ChartTempWind from './ChartTempWind';
import TableTempWind from './TableTempWind';
import { Thermometer } from 'lucide-react'; // Cambiado por uno más apropiado

export default function TemperatureWindModule() {
  const { data, isLoading, error, latitude } = useWeatherContext();

  if (!latitude) return <div className="text-center">Selecciona una ubicación.</div>;
  if (isLoading) return <div className="text-center">Cargando datos...</div>;
  if (error) return <div className="text-center text-red-600">Error al cargar.</div>;
  if (!data) return <div className="text-center">Sin datos disponibles.</div>;

  // Calcular promedios diarios
  const perDay = 24;
  const dailyTemp: number[] = [];
  const dailyWind: number[] = [];

  for (let i = 0; i < data.hourly.temperature_2m.length; i += perDay) {
    const tChunk = data.hourly.temperature_2m.slice(i, i + perDay);
    const wChunk = data.hourly.wind_speed_10m.slice(i, i + perDay);

    const tAvg = Math.round(tChunk.reduce((a, b) => a + b, 0) / tChunk.length);
    const wAvg = Math.round(wChunk.reduce((a, b) => a + b, 0) / wChunk.length);

    dailyTemp.push(tAvg);
    dailyWind.push(wAvg);
  }

  const days = data.daily.time.map((date) =>
    new Date(date).toLocaleDateString('es-EC', { weekday: 'short' })
  );

  return (
    <section className="bg-white p-6 rounded-xl shadow-md space-y-6">
      <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-md flex items-center gap-3">
        <Thermometer className="text-blue-600" size={24} />
        <h2 className="text-xl font-bold text-blue-900">Temperatura y Viento Semanal Promedio</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Gráfico */}
        <div className="w-full">
          <ChartTempWind
            labels={days}
            temperatura={dailyTemp}
            viento={dailyWind}
          />
        </div>

        {/* Tabla */}
        <div className="hidden md:block">
          <TableTempWind
            dias={days}
            temperaturas={dailyTemp}
            vientos={dailyWind}
          />
        </div>
      </div>
    </section>
  );
}
