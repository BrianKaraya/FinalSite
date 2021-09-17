import React from 'react';
import '../../App.css';
import { Checkout1 } from '../Checkout1';
import Footer from '../Footer';
/* import Slider from '../Slider';
import { SliderData } from '../../components/SliderData'; */

export default function Product1(props) {
  const { products } = props;

  return (
    <>
      {/* <h1 className="hello">hello</h1> */}
      <Checkout1
        Title="Event 1"
        Event="Kids Outing"
        src="./images/rsz_kids.jpg"
        Description="sdfgcnjk"
        Restriction="None"
        Where="Groningen"
        When="121212"
        Price="15.00"
        Available="Available"
      />
      <Footer />
    </>
  );
}
