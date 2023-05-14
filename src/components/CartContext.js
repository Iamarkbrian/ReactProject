import React from 'react';
import Addtocart from './Addtocart';


const AddToCartButton = ({ onAddToCart }) => {
  const handleClick = () => {
    // Call the onAddToCart function passed as a prop
    if (typeof onAddToCart === 'function') {
      onAddToCart();
    }
  };

  return (
    <div>
      {/* Other JSX code */}
      <Addtocart item={item} />
    </div>
  
  );
};

export default AddToCartButton;