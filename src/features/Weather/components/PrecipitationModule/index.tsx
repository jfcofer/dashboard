import { useWeatherContext } from '../../context/WeatherContext';
import { Droplets } from 'lucide-react';
import ChartUI from './ChartUI';

export default function PrecipitationModule() {
  const { data, isLoading, error, latitude } = useWeatherContext();

  if (!latitude) return <div className="text-center">Selecciona una ubicación para ver la precipitación.</div>;
  if (isLoading) return <div className="text-center">Cargando precipitación...</div>;
  if (error) return <div className="text-center text-red-600">Error al cargar los datos.</div>;
  if (!data) return <div className="text-center">Sin datos disponibles.</div>;


  // Promedio diario de probabilidad
  const dailyProbability: number[] = [];
  const perDay = 24;

  for (let i = 0; i < data.hourly.precipitation_probability.length; i += perDay) {
    const chunk = data.hourly.precipitation_probability.slice(i, i + perDay);
    const avg = Math.round(chunk.reduce((a, b) => a + b, 0) / chunk.length);
    dailyProbability.push(avg);
  }

  // Datos combinados diarios
  const dailyData = data.daily.time.map((date, i) => ({
    day: new Date(date).toLocaleDateString('es-EC', { weekday: 'short' }),
    acumulada: data.daily.precipitation_sum[i],
    probabilidad: dailyProbability[i],
  }));

  return (
    <section className="bg-white p-6 rounded-xl shadow-md space-y-6">
      {/* Título principal */}
      <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-md flex items-center gap-3">
        <Droplets className="text-blue-600" size={24} />
        <h2 className="text-xl font-bold text-blue-900">Precipitación Acumulada y Pronóstico</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Izquierda: Condiciones actuales */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-gray-800">Condiciones Actuales</h3>

          {/* Lluvia */}
          <div className="bg-gray-100 rounded-md p-3 flex items-center gap-4">
            <span className="text-3xl">🌧️</span>
            <div>
              <p className="text-sm text-gray-600">Lluvia</p>
              <p className="text-xl font-bold text-blue-800">{data.hourly.rain[0]} mm</p>
            </div>
          </div>

          {/* Chubascos */}
          <div className="bg-gray-100 rounded-md p-3 flex items-center gap-4">
            <span className="text-3xl">🌦️</span>
            <div>
              <p className="text-sm text-gray-600">Chubascos</p>
              <p className="text-xl font-bold text-blue-800">{data.hourly.showers[0]} mm</p>
            </div>
          </div>

          {/* Nieve */}
          <div className="bg-gray-100 rounded-md p-3 flex items-center gap-4">
            <span className="text-3xl">❄️</span>
            <div>
              <p className="text-sm text-gray-600">Nieve</p>
              <p className="text-xl font-bold text-blue-800">{data.hourly.snowfall[0]} mm</p>
            </div>
          </div>

          {/* Probabilidad */}
          <div className="bg-gray-100 rounded-md p-3 flex items-center gap-4">
            <span className="text-3xl">💧</span>
            <div>
              <p className="text-sm text-gray-600">Probabilidad</p>
              <p className="text-xl font-bold text-blue-800">{data.hourly.precipitation_probability[0]}%</p>
            </div>
          </div>
        </div>


        {/* Derecha: ChartUI con datos reales */}
        <div className="w-full max-w-3xl mx-auto">
          <ChartUI
            labels={dailyData.map((d) => d.day)}
            acumulada={dailyData.map((d) => d.acumulada)}
            probabilidad={dailyData.map((d) => d.probabilidad)}
          />
        </div>
      </div>
    </section>
  );
}
