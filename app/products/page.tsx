import { FC } from 'react';

const ProductsPage: FC = () => {
  return (
    <div>
      {/* Header */}
      <h1>3D Models</h1>

      {/* Search Bar */}
      <input type="text" placeholder="Search for a model" />

      {/* Categories */}
      <div>
        <h2>Categories</h2>
        <ul>
          <li><a href="/products">All</a></li>
          <li><a href="/products?category=3d-printer">3D Printer</a></li>
          <li><a href="/products?category=art">Art</a></li>
          <li><a href="/products?category=education">Education</a></li>
          <li><a href="/products?category=fashion">Fashion</a></li>
          <li><a href="/products?category=hobby-diy">Hobby & DIY</a></li>
          <li><a href="/products?category=household">Household</a></li>
          <li><a href="/products?category=miniatures">Miniatures</a></li>
          <li><a href="/products?category=tools">Tools</a></li>
          <li><a href="/products?category=toys-games">Toys & Games</a></li>
        </ul>
      </div>

      {/* Product Listings */}
      <div>
        <h2>Products</h2>
        <div>
          <img src="/placeholder-image.jpg" alt="Printer Upgrade Kit" />
          <p>3D-printer <span>♥ 1789</span></p>
          <h3>Printer Upgrade Kit</h3>
          <h4>Enhancer parts for 3D printer</h4>
          <p>$799</p>
          <a href="#">View Details</a>
        </div>
        <div>
          <img src="/placeholder-image.jpg" alt="Printer Upgrade Kit" />
          <p>3D-printer <span>♥ 1789</span></p>
          <h3>Printer Upgrade Kit</h3>
          <h4>Enhancer parts for 3D printer</h4>
          <p>$799</p>
          <a href="#">View Details</a>
        </div>
        <div>
          <img src="/placeholder-image.jpg" alt="Printer Upgrade Kit" />
          <p>3D-printer <span>♥ 1789</span></p>
          <h3>Printer Upgrade Kit</h3>
          <h4>Enhancer parts for 3D printer</h4>
          <p>$799</p>
          <a href="#">View Details</a>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;