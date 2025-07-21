import { AlertsModule, DashboardHeader, PrecipitationModule, WeatherProvider } from './features/Weather';

function App() {
  return (
    <WeatherProvider>
      <DashboardHeader></DashboardHeader>
      <main>
        <PrecipitationModule />
        <AlertsModule />
      </main>
    </WeatherProvider>
  );
}

export default App
