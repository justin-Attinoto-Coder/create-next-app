// app/3d-models/[id]/ModelClient.tsx
"use client";

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

interface ModelClientProps {
  model: Model;
}

export default function ModelClient({ model }: ModelClientProps) {
  return (
    <div className="max-w-5xl text-center mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">{model.name}</h1>
      <div className="max-w-sm mx-auto">
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