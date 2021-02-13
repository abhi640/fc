import React from 'react';
import { InfoSection, Pricing } from '../../components';

import ServicesComp from '../../components/services/Services';
import Feedback from '../../components/testimonials/Testimonial';

function Services() {
  return (
    <>
      <ServicesComp />
      <Pricing />
      <Feedback />

    </>
  );
}

export default Services;
