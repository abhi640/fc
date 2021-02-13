import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection, Pricing } from '../../components';
import CallToAction from '../../components/callToAction/CallToAction'
import ServicesComp from '../../components/services/Services';
import Cards from '../../components/Cards';
import Feedback from '../../components/testimonials/Testimonial';

function Gallery() {
  return (
    <div>
    
      <Cards />

      
      <Pricing />
      
      <Feedback />
      
      
      
    </div>
  );
}

export default Gallery;
