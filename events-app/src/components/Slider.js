import React, { useState } from 'react';
// import BtnSlider from './BtnSlider';
import '../App.js';
import './Slider.css';
import './SliderData.js';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export default function Slider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const moveDot = (index) => {
    setCurrent(index - 1);
    //index in usestate starts at 0. if at 1 : setCurrent(index)
  };

  return (
    <>
      <section>
        <div className="slider">
          <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
          <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
          <div className="slides">
            <div className="slide">
              {SliderData.map((slide, index) => {
                return (
                  <div
                    className={index === current ? 'slide active' : 'slide'}
                    key={index}
                  >
                    {index === current && (
                      <img src={slide.image} alt="carousel" className="image" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* <div className="navigation-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
              <div className="auto-btn3"></div>
              <div className="auto-btn4"></div>
            </div>

            <div className="navigation-manual">
              <label htmlFor="radio1" className="manual-btn"></label>
              <label htmlFor="radio2" className="manual-btn"></label>
              <label htmlFor="radio3" className="manual-btn"></label>
              <label htmlFor="radio4" className="manual-btn"></label>
            </div> */}
          </div>
          <div className="container-dots">
            {Array.from({ length: 4 }).map((item, index) => (
              <div
                onClick={() => moveDot(index + 1)}
                className={current === index ? 'dot active' : 'dot'}
              ></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
