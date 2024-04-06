import React, { useState, useEffect } from 'react';
import { ProductDetails } from '../../../ProductDetails/ProductDetails.jsx';
import { Container, Content } from './CardStyles.jsx';
import Card from './Card';
import nike1 from '../../../../../Assets/2.png';
import nike2 from '../../../../../Assets/3.png';
import nike3 from '../../../../../Assets/1.png';
import nike4 from '../../../../../Assets/4.png';
import { BigSidebar } from '../FilterSidebar/Screens/BigScreen/BigSidebar.jsx';
import SmallSidebar from '../FilterSidebar/Screens/SmallScreen/SmallSidebar.jsx';
import { Cart } from '../../../ProductCart/Cart.jsx';

const data = [
  {
    id: 1,
    image: nike1,
    title: 'Nike Kiger 9',
    description: 'Description of Nike Kiger 9',
    price: '$100',
  },
  {
    id: 2,
    image: nike2,
    title: 'Nike Winflo 10',
    description: 'Description of Nike Winflo 10',
    price: '$200',
  },
  {
    id: 3,
    image: nike3,
    title: 'Nike Alphafly 2',
    description: 'Description of Nike Alphafly 2',
    price: '$300',
  },
  {
    id: 4,
    image: nike4,
    title: 'Nike Zoom 2',
    description: 'Description of Nike Zoom 2',
    price: '$50',
  },
];

export function ProductCard() {
  const [isBigScreen, setIsBigScreen] = useState(window.innerWidth > 820);
  const [isCartVisible, setIsCartVisible] = useState(false); 
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const onAddToCart = (product) => {
    setSelectedProduct(product); // Store the selected product
    setIsCartVisible(true); // Set isCartVisible to true to show the cart
    console.log('Adding product to cart:', product);
  };
  
  useEffect(() => {
    const handleResize = () => {
      setIsBigScreen(window.innerWidth > 1165);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <div>
        {selectedProduct ? (
          <ProductDetails onAddToCart={onAddToCart}  />
        ) : (
          <Container isBigScreen={isBigScreen}>
            {isBigScreen ? <BigSidebar /> : <SmallSidebar />}
            <Content>
              {data.map((item) => (
                <Card
                  key={item.id}
                  prodImg={item.image}
                  prodTitle={item.title}
                  onClick={() => handleCardClick(item)}
                />
              ))}
            </Content>
          </Container>
        )}
      </div>
  );
}
