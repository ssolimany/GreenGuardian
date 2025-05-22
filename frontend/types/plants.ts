export interface Plant {
  id: string;
  name: string;
  type: string;
  imageUrl: string;
  temperature: number;
  soilMoisture: number;
  humidity: number;
  luminance: number;
  lastUpdated: Date;
  addedDate: Date;
  lastWatered?: Date;
  wateringHistory?: Date[];
  notes?: {
    id: string;
    text: string;
    date: Date;
  }[];
}
