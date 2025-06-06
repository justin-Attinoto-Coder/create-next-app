// app/3d-models/[id]/ModelClient.tsx
"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

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
  const [isLiked, setIsLiked] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  // Load liked state from local storage on mount
  useEffect(() => {
    const likedModels = JSON.parse(localStorage.getItem('likedModels') || '{}');
    setIsLiked(!!likedModels[model.id]);
  }, [model.id]);

  const handleLike = () => {
    setIsLiked(true);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000); // Hide message after 3 seconds

    // Save to local storage
    const likedModels = JSON.parse(localStorage.getItem('likedModels') || '{}');
    likedModels[model.id] = true;
    localStorage.setItem('likedModels', JSON.stringify(likedModels));
  };

  return (
    <div className="max-w-5xl mx-auto p-5 text-center">
      <h1 className="text-3xl font-bold mb-4">{model.name}</h1>
      <div className="max-w-md mx-auto">
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
      <button
        onClick={handleLike}
        disabled={isLiked}
        className={`mt-4 px-4 py-2 rounded ${isLiked ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
      >
        {isLiked ? 'Liked' : 'Like'}
      </button>
      {showMessage && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
          You liked this {`"${model.name}"`} 3D model!
        </div>
      )}
    </div>
  );
}