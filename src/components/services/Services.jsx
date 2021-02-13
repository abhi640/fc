import React from 'react';
import { servicesArray } from './data';
import {
  MainContainer,
  Header,
  Centered,
  ContentWrapper,
  Grid,
  Service,
  Container,
  Icon,
  Divider,
} from './style';

const ServicesComp = ({
  title = "OUR SERVICES",
  content = " We offer more than 35 group exercise, aerobic classes each week.",
}) => {
  return (
    <MainContainer>
      <Container>
        <Header>
          <Centered>
            <ContentWrapper>
              <Divider></Divider>
              <h2>{title}</h2>
              <p>{content}</p>
            </ContentWrapper>
          </Centered>
        </Header>
        <Grid>
          {servicesArray.map((service, index) => (
            <Service key={index}>
              <Icon>{service.icon}</Icon>
              <h4>{service.title}</h4>
              <p>{service.content}</p>
            </Service>
          ))}
        </Grid>
      </Container>
    </MainContainer>
  );
};

export default ServicesComp;
