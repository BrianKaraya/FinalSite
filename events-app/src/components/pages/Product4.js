import React from 'react';
import '../../App.css';
import { Checkout1 } from '../Checkout1';
import Footer from '../Footer';

export default function Product4(props) {
  const { products } = props;
  return (
    <>
      <Checkout1
        Title="Event 4"
        Event="Show your moves"
        src="images/events4.jpg"
        Description="bbbbbbbbbbb"
        Restriction="None"
        Where="Hoensbroek"
        When="231021"
        Price="5.00"
        Available="Available"
      />
      <Footer />
    </>
  );
}
