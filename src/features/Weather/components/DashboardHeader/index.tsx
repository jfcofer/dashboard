import LocationSelector from "../LocationSelector";

export default function DashboardHeader() {
  return (
    <header>
      <h1 className="text-4xl font-bold text-forest-800 mb-2">
        Dashboard Agroclimático
      </h1>
      <p className="text-lg text-earth-700 mb-4 max-w-2xl">
        Optimiza tus decisiones agrícolas con datos meteorológicos precisos.
        Monitorea precipitaciones, alertas climáticas, temperatura del suelo y
        encuentra las ventanas óptimas para siembra, riego, fumigación y cosecha.
      </p>
      <LocationSelector />
    </header>
  );
}
