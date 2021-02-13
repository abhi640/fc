import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/f4.JPG'
              text=''
              label='Adventure'
              path='/gallery'
            />
            <CardItem
              src='images/f2.JPG'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/gallery'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/f3.JPG'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/gallery'
            />
            <CardItem
              src='images/f5.JPG'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/gallery'
            />
            <CardItem
              src='images/f6.JPG'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/gallery'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
