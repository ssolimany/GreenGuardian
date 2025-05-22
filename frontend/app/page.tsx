"use client";

import Header from "@/components/header";
import PlantTypeTabs from "@/components/plant/type-tabs";
import PlantTypeSelect from "@/components/plant/type-select";
import PlantAddButton from "@/components/plant/add-button";
import PlantCardGrid from "@/components/plant/card-grid";
import { plants } from "@/lib/mock/plant-data";
import { useState } from "react";
import { Plant } from "@/types/plants";

export default function Home() {
  const [plantType, setPlantType] = useState<string>("all");

  const handlePlantTypeChange = (value: string) => {
    setPlantType(value);
  };

  const getFilteredPlants = (): Plant[] => {
    switch (plantType) {
      case "all":
        return plants;
      case "tropical":
        return plants.filter((plant) => plant.type === "tropical");
      case "succulent":
        return plants.filter((plant) => plant.type === "succulent");
      case "flowering":
        return plants.filter((plant) => plant.type === "flowering");
      case "other":
        return plants.filter(
          (plant) =>
            plant.type !== "tropical" &&
            plant.type !== "succulent" &&
            plant.type !== "flowering",
        );
      default:
        return plants;
    }
  };

  return (
    <div className="min-h-dvh flex flex-col px-4 md:px-6 py-6 bg-gradient-to-b from-green-100 to-white font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="mt-6 flex flex-col gap-4">
        <div className="flex justify-between gap-4">
          <PlantTypeSelect
            className="flex justify-center w-full md:hidden"
            plantType={plantType}
            handlePlantTypeChange={handlePlantTypeChange}
          />
          <PlantTypeTabs
            className="hidden md:block"
            plantType={plantType}
            handlePlantTypeChange={handlePlantTypeChange}
          />
          <PlantAddButton />
        </div>
        <PlantCardGrid plants={getFilteredPlants()} />
      </main>
    </div>
  );
}
