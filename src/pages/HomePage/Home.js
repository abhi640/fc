import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection, Pricing } from '../../components';
import CallToAction from '../../components/callToAction/CallToAction'
import ServicesComp from '../../components/services/Services';
import Cards from '../../components/Cards';
import Feedback from '../../components/testimonials/Testimonial';

function Home() {
  return (
    <div>
      
    <InfoSection {...homeObjOne} />

    
      <Cards />

      <CallToAction />

      <ServicesComp />

      <InfoSection {...homeObjTwo} />
      <Pricing />
      
      <Feedback />
      
      
      
    </div>
  );
}

export default Home;
