import { getAllModels } from "@/app/lib/models";
import { Model } from "@/app/types";
import ModelList from "@/app/components/ModelList";

export default async function ModelsPage() {
  const models: Model[] = await getAllModels();

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">3D Models</h1>
      <ModelList initialModels={models} />
    </div>
  );
}