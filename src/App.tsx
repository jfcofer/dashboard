import { AlertsModule, DashboardHeader, PrecipitationModule, WeatherProvider } from './features/Weather';

function App() {
  return (
    <WeatherProvider>
      <DashboardHeader></DashboardHeader>
      <main>
      
        <AlertsModule />
      </main>
      <PrecipitationModule />
    </WeatherProvider>
  );
}

export default App
