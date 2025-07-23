import LocationSelector from "../LocationSelector";

export default function DashboardHeader() {
  return (
    <header className="pb-5 px-5 flex flex-col gap-1.5 md:flex-row items-center">
      <section className="m-5 rounded-xl p-4 flex flex-col gap-4 bg-emerald-900 w-full">
        <h1 className="flex text-lime-100 items-center gap-2 text-2xl md:text-4xl font-bold">
          Dashboard Agroclimático
        </h1>
        <p className="text-lg md:text-left text-white mb-4">
          Optimiza tus decisiones agrícolas con datos meteorológicos precisos.
          Monitorea precipitaciones, alertas climáticas, y la temperatura del suelo.
        </p>
      </section>
      <LocationSelector />
    </header >

  );
}
