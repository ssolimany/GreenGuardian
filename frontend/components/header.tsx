import { Leaf } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-col items-center md:items-start">
      <div className="flex items-center gap-2">
        <Leaf className="h-8 w-8 fill-green-500" />
        <h1 className="text-3xl font-bold">GreenGuardian</h1>
      </div>
      <p className="text-gray-600 mt-1">
        Monitor and track your plants&apos; vital signs
      </p>
    </header>
  );
}
