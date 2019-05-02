import React from "react";
import nicecar from "../assets/images/nicecar.jpg";
import { Image, Container, Button } from "semantic-ui-react";
import styled from "styled-components";

const HeroImage = () => (
  <>
    <Container fluid>
      <MainImage src={nicecar} />
      <HeroText>LuxeDetail</HeroText>
      <HeroSub>We are ready to detail your car on-demand</HeroSub>
      <HeroMeta>
        If you would like to get ahold of us immediately please call our office
        at (555)555-5555
        <br />
        <br />
        <br />
        <Button to="/ContactUs" inverted color="white" size="massive">
          Contact Us
        </Button>
      </HeroMeta>
    </Container>
  </>
);

const MainImage = styled(Image)`
  position: relative;
  height: auto
  width: 100%
  z-index: -1
`;

const HeroText = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  font-size: 6vw;
  line-height: 1
  color: white;
  z-index: 1;
  font-weight: 700
`;
const HeroSub = styled.div`
  position: absolute;
  top: 30%;
  width: 50%
  left: 10%
  font-size: 2vw;
  line-height: 1
  color: white;
  z-index: 1;
  font-weight: 700
`;
const HeroMeta = styled.div`
  position: absolute;
  top: 40%;
  width: 50%
  left: 10%
  font-size: 2vw;
  line-height: 1
  color: white;
  z-index: 1;
  font-weight: 700
`;

export default HeroImage;
