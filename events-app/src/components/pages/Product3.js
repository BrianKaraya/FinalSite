import React from 'react';
import '../../App.css';
import { Checkout1 } from '../Checkout1';
import Footer from '../Footer';

export default function Product3(props) {
  const { products } = props;
  return (
    <>
      <Checkout1
        Title="Event 3"
        Event="Bachata"
        src="images/upcomingevent4.jpg"
        Description="ghvjbbii"
        Restriction="None"
        Where="Heerlen"
        When="221121"
        Price="Free"
        Available="Available"
      />
      <Footer />
    </>
  );
}
