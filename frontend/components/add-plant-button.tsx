import { PlusCircle } from "lucide-react";

export default function AddPlantButton() {
  return (
    <div className="flex w-full max-h-10 max-w-45">
      <button className="flex-1 flex justify-center items-center gap-2 xs:gap-3 bg-green-700 text-white px-2 xs:px-4 py-2 rounded-md text-sm md:text-base">
        <PlusCircle className="h-4 w-4" />
        Add New Plant
      </button>
    </div>
  );
}
