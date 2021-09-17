import React from 'react';
import './ServicesPage.css';
import ServicesPageItems from './ServicesPageItems';

export const ServicesPage = () => {
  return (
    <div className="s-cards">
      <h1>Services</h1>
      <div className="s-cards__container">
        <div className="s-cards__wrapper">
          {/* <div className="s-cards__items">
            <ServicesPageItems
              src="./images/bkg2.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
            />
            <ServicesPageItems
              src="images/rsz_crowd.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              //label="Luxury"
              // path="/services"
            />
          </div> */}
          <div className="s-cards__items">
            <ServicesPageItems
              src="images/bkg2.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              //label="Mystery"
              // path="/services"
            />
            <ServicesPageItems
              src="images/advert.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              //label="Adventure"
              // path="/products"
            />
            <ServicesPageItems
              src="images/maldives1.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              //label="Adrenaline"
              // path="/sign-up"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
