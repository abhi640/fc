import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Pricing</PricingHeading>
          <PricingContainer>
            <PricingCard to='/monthly'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Monthly Pack</PricingCardPlan>
                <PricingCardCost>INR 2,000/-</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>One steam bath per month</PricingCardFeature>
                  <PricingCardFeature>Training Exercise Assistance</PricingCardFeature>
                  <PricingCardFeature>Diet Assistance</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to='/quarterly'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Quarterly Pack</PricingCardPlan>
                <PricingCardCost>INR 4,500/-</PricingCardCost>
                <PricingCardLength>per quarter</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>INR 1,500/- per month</PricingCardFeature>
                  <PricingCardFeature>Admission Fee waive off</PricingCardFeature>
                  <PricingCardFeature>All monthly pack features included</PricingCardFeature>
                 
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to='/halfyearly'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Half-Yearly Pack</PricingCardPlan>
                <PricingCardCost>INR 7,200/-</PricingCardCost>
                <PricingCardLength>Every six months</PricingCardLength>
                <PricingCardFeatures>
                <PricingCardFeature>INR 1,200/- per month</PricingCardFeature>
                <PricingCardFeature>Admission Fee waive off</PricingCardFeature>
                <PricingCardFeature>All monthly pack features included</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
