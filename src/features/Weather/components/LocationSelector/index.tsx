import { useWeatherContext } from './../../context/WeatherContext';

export default function LocationSelector() {
  const { setLocation } = useWeatherContext();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const lat = parseFloat(formData.get("latitude") as string);
    const lon = parseFloat(formData.get("longitude") as string);
    if (!isNaN(lat) && !isNaN(lon)) {
      setLocation(lat, lon);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '1rem', background: '#f0f0f0' }}>
      {/* Your form inputs for lat/lon */}
      <input name="latitude" type="number" step="any" placeholder="Latitude" required />
      <input name="longitude" type="number" step="any" placeholder="Longitude" required />
      <button type="submit">Get Weather</button>
    </form>
  );
}
