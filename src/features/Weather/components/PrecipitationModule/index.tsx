import { useWeatherContext } from './../../context/WeatherContext';

export default function PrecipitationModule() {
  const { data, isLoading, error, latitude } = useWeatherContext();

  if (!latitude) return <div>Select a location to see precipitation.</div>
  if (isLoading) return <div>Loading precipitation...</div>;
  if (error) return <div>Error loading data.</div>;

  // Example: access a specific part of the data
  const precipitation = data?.hourly.precipitation_probability;

  return (
    <section>
      <h3>Precipitation</h3>
      <p>Current chance: {precipitation ?? 'N/A'}%</p>
    </section>
  );
}
