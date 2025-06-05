"use client";

import { useState } from "react";
import Link from "next/link";
import type { Model } from "@/app/types";
import FallbackImage from "@/app/components/FallbackImage";

interface ModelListProps {
  initialModels: Model[];
}

export default function ModelList({ initialModels }: ModelListProps) {
  const [models, setModels] = useState(initialModels);

  const handleLike = (id: number) => {
    setModels((prevModels) =>
      prevModels.map((model) =>
        model.id === id ? { ...model, likes: model.likes + 1 } : model
      )
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {models.map((model) => (
        <div
          key={model.id}
          className="border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
        >
          <Link href={`/3d-models/${model.id}`}>
            <div>
              <FallbackImage
                src={model.image}
                fallbackSrc={model.backupImage}
                alt={model.name}
                className="w-full h-96 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{model.name}</h2>
              <p className="text-gray-600 text-sm mb-2">{model.description}</p>
              <p className="text-gray-500 text-sm mb-4">Category: {model.category}</p>
            </div>
          </Link>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Likes: {model.likes} ♥</span>
            <button
              onClick={() => handleLike(model.id)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Like
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}