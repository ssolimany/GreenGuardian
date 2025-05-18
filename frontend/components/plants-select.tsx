"use client";
import {
  Select,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import { useState } from "react";

export default function PlantsSelect() {
  const [selectedPlantType, setSelectedPlantType] = useState("all");

  return (
    <div className="flex justify-center w-full md:hidden">
      <Select
        value={selectedPlantType}
        onValueChange={setSelectedPlantType}
        defaultValue="all"
      >
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
