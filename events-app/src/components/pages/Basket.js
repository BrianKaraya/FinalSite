import React from 'react';

//import { useState } from 'react';

// import CartItem from '../CartItem';
import ShoppingCartItems from '../ShoppingCartItems';
import { EventData } from '../EventData';

export default function Basket(props) {
  /* return (
    <div className="cartscreen">
      <div className="cartscreen-left">
        <h2>Shopping cart</h2>
        <CartItem />
      </div>

      <div className="cartscreen-right">
        <div className="cartscreen-info">
          <p>Subtotal (0) Items</p>
          <p>$10.00</p>
        </div>
        <div>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  ); */
  const { products } = props;
  return (
    <>
      <ShoppingCartItems products={products} />
    </>
  );
}
