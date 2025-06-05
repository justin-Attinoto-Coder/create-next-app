import modelsData from "../data/models.json";
import type { Model } from "../types";

export async function getAllModels() {
  // This is where you'd write code to fetch the list
  // of models from a database. We're mocking that with
  // our JSON array of data in models.json for now.
  return modelsData;
}

export async function getModelById(id: number): Promise<Model | undefined> {
  // Simulate fetching a single model by ID from the database
  const models: Model[] = await getAllModels();
  return models.find((model) => model.id === id);
}