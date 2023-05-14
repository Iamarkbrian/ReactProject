import React, { useState } from 'react';


function Addtocart({ item }) {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = () => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  return (
    <div>
      {/* Your JSX code for the Add to Cart page */}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Addtocart;