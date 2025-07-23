import { AlertsModule, DashboardHeader, PrecipitationModule, WeatherProvider } from './features/Weather';
import TemperatureWindModule from './TemperatureWindModule';
import MetricsModule from './features/Weather/components/MetricsModule';

function App() {
  return (
    <WeatherProvider>
      <DashboardHeader />
      <main>
        <MetricsModule />
        <PrecipitationModule />
        <TemperatureWindModule />
        <AlertsModule />
      </main>
    </WeatherProvider >
  );
}

export default App
