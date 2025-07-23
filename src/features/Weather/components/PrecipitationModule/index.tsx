import { useWeatherContext } from '../../context/WeatherContext';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from 'recharts';
import { Droplets } from 'lucide-react';

export default function PrecipitationModule() {
  const { data, isLoading, error, latitude } = useWeatherContext();

  if (!latitude) return <div className="text-center">Selecciona una ubicación para ver la precipitación.</div>;
  if (isLoading) return <div className="text-center">Cargando precipitación...</div>;
  if (error) return <div className="text-center text-red-600">Error al cargar los datos.</div>;
  if (!data) return <div className="text-center">Sin datos disponibles.</div>;

  // 👉 Condiciones actuales (basado en la hora actual)
  const condiciones = [
    { label: 'Lluvia', value: `${data.hourly.rain[0]} mm`, icon: '🌧️' },
    { label: 'Chubascos', value: `${data.hourly.showers[0]} mm`, icon: '🌦️' },
    { label: 'Nieve', value: `${data.hourly.snowfall[0]} mm`, icon: '❄️' },
    { label: 'Probabilidad', value: `${data.hourly.precipitation_probability[0]}%`, icon: '💧' },
  ];

  // 👉 Calcular promedio diario de probabilidad
  const dailyProbability: number[] = [];
  const perDay = 24;

  for (let i = 0; i < data.hourly.precipitation_probability.length; i += perDay) {
    const chunk = data.hourly.precipitation_probability.slice(i, i + perDay);
    const avg = Math.round(chunk.reduce((a, b) => a + b, 0) / chunk.length);
    dailyProbability.push(avg);
  }

  // 👉 Preparar datos para el gráfico
  const dailyData = data.daily.time.map((date, i) => ({
    day: new Date(date).toLocaleDateString('es-EC', { weekday: 'short' }),
    acumulada: data.daily.precipitation_sum[i],
    probabilidad: dailyProbability[i],
  }));

  return (
    <section className="bg-white p-6 rounded-xl shadow-md space-y-6">
      {/* ✅ Encabezado */}
      <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-md flex items-center gap-3">
        <Droplets className="text-blue-600" size={24} />
        <h2 className="text-xl font-bold text-blue-900">Precipitación Acumulada y Pronóstico</h2>
      </div>

      {/* 🟨 Cuerpo dividido en dos columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Izquierda: Condiciones actuales */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-gray-800">Condiciones Actuales</h3>
          {condiciones.map((c) => (
            <div key={c.label} className="bg-gray-100 rounded-md p-3 flex items-center gap-4">
              <span className="text-3xl">{c.icon}</span>
              <div>
                <p className="text-sm text-gray-600">{c.label}</p>
                <p className="text-xl font-bold text-blue-800">{c.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Derecha: Gráfico */}
        <div className="bg-gray-50 p-4 rounded-md">
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={dailyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="acumulada"
                stroke="#007bff"
                name="Acumulada (mm)"
              />
              <Line
                type="monotone"
                dataKey="probabilidad"
                stroke="#9932CC"
                strokeDasharray="4 4"
                name="Probabilidad (%)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
