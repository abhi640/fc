import React from "react";
import { Button } from "../../elements";
import {
  CTA,
  Container,
  ContentWrapper,
  StyledSpan,
  AccentColor,
} from "./styles";
import { ctaData } from "./data";

const CallToAction = () => {
  return (
    <CTA>
      <Container>
        <ContentWrapper>
          <StyledSpan>{ctaData.headline}</StyledSpan>
          <h2>
            {ctaData.titleStart}{" "}
            <AccentColor>{ctaData.titleAccent}</AccentColor>
            {ctaData.titleEnd}
          </h2>
          <Button>{ctaData.buttonText}</Button>
        </ContentWrapper>
      </Container>
    </CTA>
  );
};

export default CallToAction;
