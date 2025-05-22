import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PlantTypeTabsProps {
  className?: string;
  plantType: string;
  handlePlantTypeChange: (value: string) => void;
}

export default function PlantTypeTabs({
  className,
  plantType,
  handlePlantTypeChange,
}: PlantTypeTabsProps) {
  return (
    <Tabs
      className={className}
      value={plantType}
      onValueChange={handlePlantTypeChange}
    >
      <TabsList className="h-10 mb-3">
        <TabsTrigger value="all">All Plants</TabsTrigger>
        <TabsTrigger value="tropical">Tropical</TabsTrigger>
        <TabsTrigger value="succulent">Succulent</TabsTrigger>
        <TabsTrigger value="flowering">Flowering</TabsTrigger>
        <TabsTrigger value="other">Other</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
