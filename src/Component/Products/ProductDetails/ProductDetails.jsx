import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Carousel } from 'bootstrap';
import './details.css';
import { useNavigate } from 'react-router-dom';

export function ProductDetails({ onAddToCart }) {
  const navigate = useNavigate(); 
  const [quantity, setQuantity] = useState(1); // State for quantity
  useEffect(() => {
    const carousel = new Carousel(document.querySelector('.carousel'));
    return () => {
      carousel.dispose();
    };
  }, []);

  // Check if product data exists before rendering
  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
      onAddToCart({ ...selectedProduct, quantity }); // Pass the selected product with quantity to onAddToCart
      console.log('Product added to cart:', { ...selectedProduct, quantity }); // Console log statement
      navigate('/product-cart'); // Navigate to ProductCart component
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1); // Increment quantity
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1); // Decrement quantity if greater than 1
    }
  };
  
  return (
    <div className="ProductDetails">
      <div className="detail_container">
        <div className="text_container">
          <h1>{selectedProduct.title}</h1>
          <h3>{selectedProduct.description}</h3>
          <h5>{selectedProduct.price}</h5>
          <div className="detail_buttons">
            <div className="quantity_controls">
            <button onClick={handleDecrement}>-</button>
            <input id="kactane" min="1" value={quantity} max="11" type="number" readOnly />
            <button onClick={handleIncrement}>+</button>
            </div>
            <button onClick={handleAddToCart}>
              <i className="fas fa-shopping-bag"></i> Add To Bag
            </button>
          </div>
        </div>
        <div className="detail_image">
          <div className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={selectedProduct.image} alt={selectedProduct.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
