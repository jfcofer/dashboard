import { useWeatherContext } from "../../context/WeatherContext";

function DashboardFooter() {
  const { data, isLoading, error, latitude } = useWeatherContext();

  const showUpdate =
    latitude &&
    !isLoading &&
    !error &&
    Boolean(data?.current?.time);

  return (
    <footer className="text-center py-8 px-8 text-gray-600">
      <p className="text-sm">
        Dashboard Agroclimático - Optimizando decisiones agrícolas con datos meteorológicos precisos
      </p>
      {showUpdate && (
        <p className="text-xs mt-2">
          Última actualización: {new Date(data!.current.time).toLocaleString("es-EC", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
          })}
        </p>
      )}

    </footer>

  )
}

export default DashboardFooter;
