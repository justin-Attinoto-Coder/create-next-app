// app/3d-models/[id]/page.tsx
"use client"; // Add this directive

import { useParams } from 'next/navigation';
import models from '@/app/data/models.json';
import Image from 'next/image';

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

export default function ModelPage() {
  const params = useParams();
  const id = params?.id;

  // Ensure id is a string
  if (!id || typeof id !== 'string') {
    return <div className="text-center text-xl mt-10">Invalid ID</div>;
  }

  const model = models.find((m: Model) => m.id === parseInt(id));

  if (!model) return <div className="text-center text-xl mt-10">Model not found</div>;

  return (
    <div className="max-w-5xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">{model.name}</h1>
      <div className="max-w-xl mx-auto">
        <Image
          src={model.image}
          alt={model.name}
          width={600}
          height={600}
          layout="responsive"
          className="object-contain"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            e.currentTarget.src = model.backupImage;
          }}
          priority
        />
      </div>
      <p className="mt-4 text-lg">{model.description}</p>
      <p className="mt-2">Likes: {model.likes}</p>
      <p className="mt-2">Category: {model.category}</p>
      <p className="mt-2">Date Added: {new Date(model.dateAdded).toLocaleDateString()}</p>
    </div>
  );
}

export async function generateStaticParams() {
  return models.map((model: Model) => ({
    id: model.id.toString(),
  }));
}