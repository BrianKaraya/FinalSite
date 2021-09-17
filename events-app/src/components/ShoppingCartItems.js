import React, { useState } from 'react';
import EventData from './EventData';

const ShoppingCartItems = (props) => {
  const { products } = EventData;
  const [cartItems, setCartItems] = useState([]);

  //const { cartItems } = props;

  return (
    <div cartItems={cartItems}>
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
    </div>
  );
};

export default ShoppingCartItems;
