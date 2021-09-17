import React from 'react';
import '../../App.css';
import Slider from '../Slider';
import { SliderData } from '../../components/SliderData';

import { Cards } from '../Cards';
import Footer from '../Footer';

// import { SliderData } from '../SliderData';

export default function Home() {
  return (
    <>
      <div className="section">
        <Slider slides={SliderData} />
      </div>

      <Cards />
      <Footer />
    </>
  );
}
