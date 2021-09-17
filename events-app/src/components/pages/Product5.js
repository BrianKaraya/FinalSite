import React from 'react';
import '../../App.css';
import { Checkout1 } from '../Checkout1';
import Footer from '../Footer';

export default function Product5(props) {
  const { products } = props;
  return (
    <>
      <Checkout1
        Title="Event 5"
        Event="Zumba"
        src="images/rsz_zumba.jpg"
        Description="vhhhhhhhh"
        Restriction="None"
        Where="Delft"
        When="230122"
        Price="12.00"
        Available="Available"
      />
      <Footer />
    </>
  );
}
