import { AlertTriangle } from 'lucide-react';
import { useWeatherContext } from '../../context/WeatherContext';
import { generateAlerts } from './data';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { getAlertStyle, getSeverityColor } from './components/styles';

export default function AlertsModule() {
  const { data, isLoading, error, latitude } = useWeatherContext();

  if (!latitude) return <div className="text-center">Selecciona una ubicación para ver la precipitación.</div>;
  if (isLoading) return <div className="text-center">Cargando precipitación...</div>;
  if (error) return <div className="text-center text-red-600">Error al cargar los datos.</div>;
  if (!data) return <div className="text-center">Sin datos disponibles.</div>;

  const alerts = generateAlerts(data)

  if (alerts.length === 0) {
    return <section><h3>Alerts</h3><p>No active weather alerts.</p></section>;
  }

  return (
    <section className="bg-white flex flex-col gap-2 p-6 rounded-xl shadow-md w-full">
      {/* Título principal */}
      <div className="bg-gradient-to-r from-red-50 to-orange-100 border-l-4 border-red-500 p-4 rounded-md flex items-center gap-3">
        <AlertTriangle className=" h-6 w-6" />
        <h2 className="text-xl font-bold text-red-900">
          Centro de Alertas Agroclimáticas
        </h2>
      </div>

      <div className="w-full">
        {/* Alertas activas */}
        {alerts.map((alert) => {
          const Icon = alert.icon;
          return (
            <Alert key={alert.id} className={`${getAlertStyle(alert.severity)} flex w-full`}>
              <div className="flex w-full gap-3 pt-2">
                <div className="pt-2">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex flex-col gap-2 flex-1 min-w-0">
                  <div className='flex flex-row items-center justify-between'>
                    <div className="flex flex-col gap-2 items-center">
                      <h4 className="font-semibold text-lg ">{alert.title}</h4>
                      <AlertDescription className="text-base">
                        {alert.description}
                      </AlertDescription>
                    </div>
                    <div className='flex flex-col self-start gap-2'>
                      <span className={`px-2 py-1 text-center text-xs font-medium rounded-full border ${getSeverityColor(alert.severity)}`}>
                        {alert.severity}
                      </span>
                      <span className="text-xs text-gray-500 text-center">{alert.time}</span>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <p className="text-sm font-medium text-gray-700 mb-2">Recomendaciones:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {alert.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-gray-600 mt-2 rounded-full flex-shrink-0"></span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Alert>
          );
        })}
      </div>
    </section>
  );
}
