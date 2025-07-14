import type { OpenMeteoResponse } from "../../services/openMeteo/openMeteo.types"
import { useWeather } from "./Weather.hooks"

function Weather() {
  const { data, error, isLoading } = useWeather(37.7749, -122.4194)

  if (isLoading) return <h1>Cargando…</h1>
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>No hay datos disponibles.</p>   // ← guard

  return (
    <section>
      <pre style={{ fontSize: 12, whiteSpace: 'pre-wrap' }}>
        {JSON.stringify(data as OpenMeteoResponse, null, 2)}
      </pre>
    </section>
  )
}

export default Weather
