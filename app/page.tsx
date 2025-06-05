import { FC } from "react";
import Link from "next/link";
import FallbackImage from "@/app/components/FallbackImage";

const Home: FC = () => {
  return (
    <main>
      <section className="flex flex-col-reverse items-center justify-between gap-8 px-6 py-12 mx-auto md:flex-row max-w-7xl">
        <div className="flex-1 space-y-6">
          <p className="hidden text-sm text-gray-600 uppercase md:block">
            Your go-to platform for 3D printing files
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Discover what’s possible with 3D Printing
          </h1>
          <p className="text-lg text-gray-600">
            Join our community of creators and explore a vast
            library of user-submitted models.
          </p>
          <div className="flex gap-4">
            <Link href="/3d-models">
              <button
                className="px-6 py-3 text-black transition duration-100 bg-white border-2 border-black hover:bg-black hover:text-white"
              >
                Browse Models
              </button>
            </Link>
          </div>
        </div>
        <FallbackImage
          src="/3D-printing-community.jpg"
          fallbackSrc="https://images.unsplash.com/photo-1591796146141-3e7b2e5e9b4f?w=350"
          className="w-[350px] h-auto rounded-lg"
          alt="3D Printing Community"
        />
      </section>
    </main>
  );
};

export default Home;