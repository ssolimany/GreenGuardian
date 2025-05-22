import { Plant } from "@/types/plants";
import { Thermometer, Droplets, Sun } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface PlantCardProps {
  plant: Plant;
}

export default function PlantCard({ plant }: PlantCardProps) {
  return (
    <Card key={plant.id} className="pt-0 pb-4 gap-2">
      <div className="relative w-full h-48">
        <Image
          src="/placeholder.svg"
          alt="Plant Card"
          fill
          className="object-cover rounded-t-xl"
        />
      </div>
      <CardContent className="flex flex-col gap-3">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">{plant.name}</p>
            <Badge variant="outline" className="rounded-xl font-bold">
              {plant.type.charAt(0).toUpperCase() + plant.type.slice(1)}
            </Badge>
          </div>
          <div className="flex flex-col mt-2 items-end">
            <p className="text-xs text-gray-500">Last updated</p>
            <p className="text-xs">
              {plant.lastUpdated.toLocaleTimeString(navigator.language, {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2">
            <Thermometer className="w-4 h-4 text-green-500" />
            <p className="text-sm">{plant.temperature.toFixed(1)} °C</p>
          </div>
          <div className="flex justify-end items-center gap-2">
            <Droplets className="h-4 w-4 text-green-500" />
            <p className="text-sm min-w-15 text-right">
              {plant.soilMoisture.toFixed(1)} %
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Droplets className="h-4 w-4 text-green-500" />
            <p className="text-sm">{plant.humidity.toFixed(1)} %</p>
          </div>
          <div className="flex justify-end items-center gap-2">
            <Sun className="h-4 w-4 text-green-500" />
            <p className="text-sm">{plant.luminance.toFixed(1)} lux</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
