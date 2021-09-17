import React from 'react';
import '../../App.css';
import { Checkout1 } from '../Checkout1';
import Footer from '../Footer';

export default function Product2(props) {
  const { products } = props;
  return (
    <>
      <Checkout1
        Title="Event2"
        Event="Dance Party"
        src="./images/events3.jpg"
        Description="nnn"
        Restriction="18plus"
        Where="Rotterdam"
        When="251221"
        Price="20.00"
        Available="Sold Out"
      />
      <Footer />
    </>
  );
}
