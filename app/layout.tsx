import "./globals.css";
import Link from "next/link";
import type { RootLayoutProps } from "@/app/types";
import { Albert_Sans, Montserrat_Alternates } from "next/font/google";
import FallbackImage from "@/app/components/FallbackImage";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat-alternates",
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${albertSans.className} ${montserratAlternates.variable}`}>
        <header className="w-full bg-white">
          <nav className="flex justify-between px-6 py-4">
            <Link href="/">
              <div className="relative cursor-pointer">
                {/* Desktop Logo */}
                <FallbackImage
                  src="/Print-Forge.jpg"
                  fallbackSrc="https://images.unsplash.com/photo-1622328485338-2a7f2a3e3f91?w=200"
                  alt="PrintForge Logo"
                  className="w-[200px] h-auto hidden md:block"
                />
                {/* Mobile Logo */}
                <FallbackImage
                  src="/Print-Forge.jpg"
                  fallbackSrc="https://images.unsplash.com/photo-1622328485338-2a7f2a3e3f91?w=40"
                  alt="PrintForge Logo"
                  className="w-[40px] h-auto block md:hidden"
                />
              </div>
            </Link>
            <ul className="flex items-center text-gray-900 gap-2.5">
              <li className="text-sm uppercase cursor-pointer">
                <Link href="/3d-models">3D Models</Link>
              </li>
              <li className="text-sm text-gray-900 uppercase cursor-pointer">
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}