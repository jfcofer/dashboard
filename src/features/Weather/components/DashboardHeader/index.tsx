import LocationSelector from "../LocationSelector";

export default function DashboardHeader() {
  return (
      <header className="py-5 px-7  flex flex-col gap-1.5 md:flex-row md:gap-2 justify-center items-center">
        <section className="flex flex-col gap-3">
          <h1 className="text-4xl text-center md:text-left font-bold text-green-900">
            Dashboard Agroclimático
          </h1>
          <p className="text-lg text-center md:text-left text-yellow-700 mb-4 max-w-2xl">
            Optimiza tus decisiones agrícolas con datos meteorológicos precisos.
            Monitorea precipitaciones, alertas climáticas, temperatura del suelo y
            encuentra las ventanas óptimas para siembra, riego, fumigación y cosecha.
          </p>
        </section>
        <LocationSelector />
      </header >
  );
}
