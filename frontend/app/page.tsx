import Header from "@/components/header";
import PlantsTabs from "@/components/plant-tabs";
import PlantsSelect from "@/components/plants-select";
import AddPlantButton from "@/components/add-plant-button";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col px-4 py-6 bg-gradient-to-b from-green-100 to-white font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="mt-6 flex justify-center md:justify-between gap-4">
        <PlantsTabs />
        <PlantsSelect />
        <AddPlantButton />
      </main>
    </div>
  );
}
