// app/3d-models/[id]/page.tsx
import models from '@/app/data/models.json';
import ModelClient from './ModelClient';

// Define the Model interface
interface Model {
  id: number;
  name: string;
  description: string;
  likes: number;
  image: string;
  backupImage: string;
  category: string;
  dateAdded: string;
}

interface ModelPageProps {
  params: { id: string };
}

export default function ModelPage({ params }: ModelPageProps) {
  const id = params.id;

  // Ensure id is a string
  if (!id || typeof id !== 'string') {
    return <div className="text-center text-xl mt-10">Invalid ID</div>;
  }

  const model = models.find((m: Model) => m.id === parseInt(id));

  if (!model) return <div className="text-center text-xl mt-10">Model not found</div>;

  return <ModelClient model={model} />;
}

export async function generateStaticParams() {
  return models.map((model: Model) => ({
    id: model.id.toString(),
  }));
}