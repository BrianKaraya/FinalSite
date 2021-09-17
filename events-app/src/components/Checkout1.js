import React, { useState } from 'react';
import './Checkout1.css';

import EventData from './EventData';

export const Checkout1 = (props) => {
  //const { products } = EventData;

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  return (
    <div className="checkout-main">
      <div className="checkout-header"></div>
      {/* <p className="co-text">
        <a href="/" className="co-link">
          Return home
        </a>
      </p> */}
      <div className="event">
        <h3>{props.Event}</h3>
        <div className="event-pic">
          <img src={props.src} />
        </div>
        <div className="event-container">
          <div className="event-info">
            {/* <h4 className="event-name">{props.Event}</h4> */}
            <h4>
              Description:<p>{props.Description}</p>
            </h4>
            <h4>
              Restriction:<p> {props.Restriction}</p>
            </h4>
            <h4>
              Where: <p>{props.Where}</p>
            </h4>
            <h4>
              When: <p>20/12/2021</p>
            </h4>
            <h4>
              Price: <p>{props.Price}</p>
            </h4>
          </div>
        </div>
      </div>

      <aside onAdd="onAdd" className="cart-items ">
        <div onAdd={onAdd} className="right-info cartItems={cartItems}">
          {/* <p className="right-name">{props.Event}</p> */}
          <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
          <p>
            Price: <span>{props.Price}</span>
          </p>
          <p>
            Status: <span>{props.Available}</span>
          </p>
          <p>
            Qty:{' '}
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </p>
          <p>
            <button type="button" onClick={onAdd}>
              Add to Cart
            </button>
          </p>
        </div>
      </aside>
    </div>
  );
};
