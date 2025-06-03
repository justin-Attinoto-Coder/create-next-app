import { FC, ReactNode } from 'react';
import Link from 'next/link';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <nav>
        {/* Navigation Bar */}
          <Link href="/">PrintForge</Link>
          <a href="/products">3D Models</a>
          <a href="/about">About</a>
        </nav>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;