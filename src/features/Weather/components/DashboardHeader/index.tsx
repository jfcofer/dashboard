import LocationSelector from "../LocationSelector";

export default function DashboardHeader() {
  return (
    <header className="py-5 px-10 w-fit flex flex-col gap-1.5 md:flex-row  items-center">
      <section className="flex flex-col gap-4">
        <h1 className="flex items-center gap-2 text-4xl font-bold text-green-900">
          <span>Dashboard Agroclimático</span>
        </h1>
        <p className="text-lg md:text-left text-yellow-700 mb-4">
          Optimiza tus decisiones agrícolas con datos meteorológicos precisos.
          Monitorea precipitaciones, alertas climáticas, y la temperatura del suelo.
        </p>
      </section>
      <LocationSelector/>
    </header >
  );
}
