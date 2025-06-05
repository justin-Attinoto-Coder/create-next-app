import { notFound } from "next/navigation";
import type { ModelDetailPageProps } from "@/app/types";
import { getModelById } from "@/app/lib/models";
import FallbackImage from "@/app/components/FallbackImage";

export default async function ModelDetailPage({ params }: ModelDetailPageProps) {
  const { id } = await params;
  const model = await getModelById(Number(id));

  if (!model) {
    notFound();
  }

  return (
    <main className="container max-w-4xl px-4 py-8 mx-auto">
      <h1 className="mb-6 text-4xl font-bold text-center">{model.name}</h1>
      <div className="grid items-center gap-8 mb-12 md:grid-cols-2">
        <div className="relative h-[300px] w-full">
          <FallbackImage
            src={model.image}
            fallbackSrc="https://images.unsplash.com/photo-1591796146141-3e7b2e5e9b4f?w=300"
            alt={model.name}
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
        <div>
          <p className="mb-4 text-sm text-gray-600 uppercase">{model.category}</p>
          <p className="mb-4 text-gray-700">{model.description}</p>
          <p className="text-gray-700">Likes: {model.likes} ♥</p>
          <p className="text-gray-700">
            Added: {new Date(model.dateAdded).toLocaleDateString()}
          </p>
        </div>
      </div>
    </main>
  );
}