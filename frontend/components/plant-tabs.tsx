import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PlantsTabs() {
  return (
    <Tabs defaultValue="all" className="hidden md:block">
      <TabsList className="h-10 mb-3">
        <TabsTrigger value="all">All Plants</TabsTrigger>
        <TabsTrigger value="tropical">Tropical</TabsTrigger>
        <TabsTrigger value="succulent">Succulent</TabsTrigger>
        <TabsTrigger value="flowering">Flowering</TabsTrigger>
        <TabsTrigger value="other">Other</TabsTrigger>
      </TabsList>
      <TabsContent value="all">All Plants</TabsContent>
      <TabsContent value="tropical">Tropical</TabsContent>
      <TabsContent value="succulent">Succulent</TabsContent>
      <TabsContent value="flowering">Flowering</TabsContent>
      <TabsContent value="other">Other</TabsContent>
    </Tabs>
  );
}
