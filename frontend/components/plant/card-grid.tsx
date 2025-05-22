import { Plant } from "@/types/plants";
import PlantCard from "@/components/plant/card";

interface PlantCardGridProps {
  plants: Plant[];
}

export default function PlantCardGrid({ plants }: PlantCardGridProps) {
  const plantCards = plants.map((plant) => (
    <PlantCard key={plant.id} plant={plant} />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 gap-6">
      {plantCards}
    </div>
  );
}
