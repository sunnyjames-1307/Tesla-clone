import React, { useEffect } from "react";
import styled from "styled-components";
import "aos/dist/aos.css";
import Aos from "aos";

const EighthPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Container>
      <Wrap1 data-aos="fade-up">
        <img src="/images/model-s/wheel.jpg" alt="" />
        <h4>Responsive Performance</h4>
        <p>Staggered, performance-focused wheels and tires</p>
        <p>keep the car planted and transfer even more power</p>
        <p>down to the road.</p>
      </Wrap1>
      <Wrap2 data-aos="fade-up">
        <img src="/images/model-s/bumper.jpg" alt="" />
        <h4>Optimized Aerodynamics</h4>
        <p>Attention to detail on all exterior surfaces makes</p>
        <p>Model S the most aerodynamic production car on</p>
        <p>Earth.</p>
      </Wrap2>
      <Wrap3 data-aos="fade-up">
        <img src="/images/model-s/car-front.jpg" alt="" />
        <h4>Refined Styling</h4>
        <p>Exterior design combines an iconic look with</p>
        <p>elegant proportions.</p>
      </Wrap3>
    </Container>
  );
};

const Container = styled.div`
  height: 160vh;
  background: rgb(0, 0, 0);
`;

const Wrap1 = styled.div`
  img {
    transform: translate(650px, 80px);
    height: 280px;
  }
  h4 {
    color: rgb(249, 249, 249);
    transform: translate(150px, -130px);
  }
  p {
    color: rgb(249, 249, 249);
    transform: translate(150px, -100px);
  }
`;

const Wrap2 = styled.div`
  img {
    transform: translate(150px, 0px);
    height: 280px;
  }
  h4 {
    color: rgb(249, 249, 249);
    transform: translate(760px, -200px);
  }
  p {
    color: rgb(249, 249, 249);
    transform: translate(760px, -170px);
  }
`;

const Wrap3 = styled.div`
  img {
    transform: translate(650px, -80px);
    height: 280px;
  }
  h4 {
    color: rgb(249, 249, 249);
    transform: translate(150px, -270px);
  }
  p {
    color: rgb(249, 249, 249);
    transform: translate(150px, -240px);
  }
`;
export default EighthPage;
