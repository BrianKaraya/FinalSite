import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

export const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out our upcoming events!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              id="111"
              src="./images/rsz_kids.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/Product1"
            />
            <CardItem
              id="112"
              src="images/events3.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/Product2"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              id="113"
              src="images/upcomingevent4.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/Product3"
            />
            <CardItem
              id="114"
              src="images/events4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/Product4"
            />
            <CardItem
              id="115"
              src="images/rsz_zumba.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/Product5"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};
