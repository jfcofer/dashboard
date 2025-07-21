import { useWeatherContext } from '../../context/WeatherContext';
import { AlertItem } from './components/AlertItem';
import { generateAlerts } from './data';

export default function AlertsModule() {
  const { data, isLoading } = useWeatherContext();

  if (isLoading) return <div>Loading alerts...</div>;
  if (!data) {
    return (
      <h3>Hasn't loaded yet</h3>

    );
  }

  const alerts = generateAlerts(data)

  if (alerts.length === 0) {
    return <section><h3>Alerts</h3><p>No active weather alerts.</p></section>;
  }

  return (
    <section>
      <h3>Active Alerts</h3>
      <ul>
        {alerts.map(alert => (
          <AlertItem key={alert.id} alert={alert} />
        ))}
      </ul>
    </section>
  );
}
