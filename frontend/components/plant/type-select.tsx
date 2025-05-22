import {
  Select,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";

interface PlantTypeSelectProps {
  className?: string;
  plantType: string;
  handlePlantTypeChange: (value: string) => void;
}

export default function PlantTypeSelect({
  className,
  plantType,
  handlePlantTypeChange,
}: PlantTypeSelectProps) {
  return (
    <div className={className}>
      <Select value={plantType} onValueChange={handlePlantTypeChange}>
        <SelectTrigger className="flex-1 py-5 bg-muted">
          <SelectValue placeholder="Select a plant type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Plant Types</SelectLabel>
            <SelectItem value="all">All Plants</SelectItem>
            <SelectItem value="tropical">Tropical</SelectItem>
            <SelectItem value="succulent">Succulent</SelectItem>
            <SelectItem value="flowering">Flowering</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
