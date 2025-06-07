// app/components/ModelList.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Model } from "@/app/types";
import FallbackImage from "@/app/components/FallbackImage";

interface ModelListProps {
  initialModels: Model[];
}

export default function ModelList({ initialModels }: ModelListProps) {
  const [models, setModels] = useState(initialModels);
  const [likedModels, setLikedModels] = useState<{ [key: number]: boolean }>({});
  const [showMessages, setShowMessages] = useState<{ [key: number]: boolean }>({});

  // Reset liked state on page load
  useEffect(() => {
    localStorage.removeItem('likedModels'); // Clear liked state on reload
    setLikedModels({});
  }, []);

  const handleLikeToggle = (id: number) => {
    const model = models.find((m) => m.id === id);
    if (!model) return;

    // Toggle liked state
    setLikedModels((prev) => {
      const isCurrentlyLiked = !!prev[id];
      const newLiked = { ...prev, [id]: !isCurrentlyLiked };
      localStorage.setItem('likedModels', JSON.stringify(newLiked));
      return newLiked;
    });

    // Update likes count
    setModels((prevModels) =>
      prevModels.map((m) =>
        m.id === id ? { ...m, likes: likedModels[id] ? m.likes - 1 : m.likes + 1 } : m
      )
    );

    // Show pop-up message only when liking
    if (!likedModels[id]) {
      setShowMessages((prev) => ({ ...prev, [id]: true }));
      setTimeout(() => {
        setShowMessages((prev) => ({ ...prev, [id]: false }));
      }, 3000); // Hide message after 3 seconds
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {models.map((model) => (
        <div
          key={model.id}
          className="border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow relative"
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
              onClick={() => handleLikeToggle(model.id)}
              className={`px-4 py-2 rounded ${
                likedModels[model.id] ? 'bg-gray-400 hover:bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'
              } text-white transition-colors`}
            >
              {likedModels[model.id] ? 'Liked' : 'Like'}
            </button>
          </div>
          {showMessages[model.id] && (
            <div className="fixed top-0 left-0 w-full bg-green-100 text-green-800 p-4 text-center z-50 shadow-md">
              You liked this {`"${model.name}"`} 3D model!
            </div>
          )}
        </div>
      ))}
    </div>
  );
}