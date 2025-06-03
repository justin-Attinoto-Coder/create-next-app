import { FC } from 'react';

const Home: FC = () => {
  return (
    <div>
      {/* Header/Tagline */}
      <h1>Discover what’s possible with 3D printing</h1>
      <p>Join our community of creators user-submitted 3D models</p>
      
      {/* CTA Button */}
      <a href="/products">Browse Models</a>

      {/* Product Listings */}
      <div>
        <h2>Featured Products</h2>
        <div>
          <h3>Printer Upgrade Kit</h3>
          <p>Enhancer parts for 3D printer</p>
          <p>$799</p>
          <span>♥</span>
        </div>
        <div>
          <h3>Printer Upgrade Kit</h3>
          <p>Enhancer parts for 3D printer</p>
          <p>$799</p>
          <span>♥</span>
        </div>
      </div>

      {/* About Section */}
      <div>
        <h2>About PrintForge</h2>
        <p>Founded in 2023, PrintForge is a platform for 3D printing to-go enthusiasts, makers, and creators to share and discover amazing 3D files.</p>
      </div>

      {/* Community Features */}
      <div>
        <h2>Empowering makers worldwide</h2>
        <p>Our mission is to foster a vibrant community where creativity enables anyone to bring their ideas to life through 3D printing.</p>
      </div>

      <div>
        <h2>Our vision</h2>
        <p>At PrintForge, we believe that 3D printing is revolutionizing manufacturing. Our platform serves as a bridge between designers and makers, enabling the sharing of knowledge and pushing the boundaries of what’s possible with 3D printing.</p>
      </div>

      <div>
        <h2>100K+ Models</h2>
        <p>Access our vast library of community-submitted 3D models and tools to artistic creations.</p>
        <a href="/products">Active Community</a>
        <p>Join thousands of makers who share tips, provide feedback, and collaborate on projects.</p>
        <a href="/about">Free to Use</a>
        <p>Most models are free to download, with optional premium features for power users.</p>
      </div>
    </div>
  );
};

export default Home;