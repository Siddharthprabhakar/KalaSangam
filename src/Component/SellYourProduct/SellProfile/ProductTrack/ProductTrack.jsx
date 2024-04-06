import './track.css';

// Sample data for testing
const sampleProducts = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 10, stockQuantity: 20 },
  { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 15, stockQuantity: 15 },
  { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 20, stockQuantity: 10 },
];

const sampleBestSellingProducts = [
  { id: 1, name: 'Best Product 1' },
  { id: 2, name: 'Best Product 2' },
];

const sampleProductsNeedRestock = [
  { id: 3, name: 'Restock Product 1' },
];

// Component to display the product list
const ProductList = ({ products }) => (
  <div>
    <h3>Product List</h3>
    <table className="product-list-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock Quantity</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>${product.price}</td>
            <td>{product.stockQuantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Component to display best-selling products
const BestSellingProducts = ({ bestSellingProducts }) => (
  <div>
    <h3>Best Selling Products</h3>
    <ul className="best-selling-products-list">
      {bestSellingProducts.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  </div>
);

// Component to display products needing restocking
const RestockProducts = ({ productsNeedRestock }) => (
  <div>
    <h3>Products Needing Restocking</h3>
    <ul className="products-restock-list">
      {productsNeedRestock.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  </div>
);

export function ProductTrack() {
  return (
    <div className="seller-profile-container">
      <ProductList products={sampleProducts} />
      <BestSellingProducts bestSellingProducts={sampleBestSellingProducts} />
      <RestockProducts productsNeedRestock={sampleProductsNeedRestock} />
    </div>
  );
}
