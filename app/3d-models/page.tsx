import { getAllModels } from "@/app/lib/models";
import { Model } from "@/app/types";

export default async function ModelsPage() {
  const models: Model[] = await getAllModels();

  return (
    <div>
      <h1>3D Models</h1>
      <ul>
        {models.map((model) => (
          <li key={model.id}>{model.name}</li>
        ))}
      </ul>
    </div>
  );
}