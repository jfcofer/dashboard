import { AlertsModule, DashboardHeader, PrecipitationModule, WeatherProvider } from './features/Weather';
import TemperatureWindModule from './TemperatureWindModule';

function App() {
  return (
    <WeatherProvider>
      <DashboardHeader></DashboardHeader>
      <main>
      
        <AlertsModule />
      </main>
      <PrecipitationModule />
      <TemperatureWindModule />

    </WeatherProvider>
  );
}

export default App
