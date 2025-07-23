import { AlertsModule, DashboardFooter, DashboardHeader, MetricsModule, PrecipitationModule, TemperatureWindModule, WeatherProvider } from './features/Weather';

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
      <DashboardFooter />
    </WeatherProvider >
  );
}

export default App
