import React from "react";
import styled from "styled-components";
import "aos/dist/aos.css";
import Aos from "aos";
import FadeIn from "react-fade-in";

const SeventhPage = () => {
  return (
    <Container>
      <img src="/images/model-s/model-s-red.jpg" alt="" />
      <Wrap1>
        <h2> </h2>
        <p>Performance-focused chassis</p>
      </Wrap1>
      <Wrap2>
        <h2>0.208 Cd</h2>
        <p>Lowest-drag car on Earth</p>
      </Wrap2>
      <Wrap3>
        <h2> </h2>
        <p>Refined exterior styling</p>
      </Wrap3>
      <Wrap4>
        <Wrap4 data-aos="fade-up">
          <h4>Exterior</h4>
          <h1>Designed for Efficiency</h1>
          <OrderButton>Order Now</OrderButton>
        </Wrap4>

        <Wrap5 data-aos="fade-up">
          <div>
            <FadeIn>
              <p>
                With the lowest drag coefficient on Earth and unmatched
                efficiency, Model S is built
              </p>
              <p>
                for speed and range. Together with a wider body and chassis,
                these elements help
              </p>
              <p>
                you go down the straight or around corners quicker than ever.
              </p>
            </FadeIn>
          </div>
        </Wrap5>
      </Wrap4>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background: rgb(249, 249, 249);
  img {
    height: 60%;
  }
`;

const Wrap1 = styled.div`
  h2 {
    transform: translate(550px, -140px);
    font-size: 30px;
    color: rgb(249, 249, 249);
  }
  p {
    transform: translate(250px, -85px);
    color: rgb(249, 249, 249);
  }
`;
const Wrap2 = styled(Wrap1)`
  p {
    transform: translate(550px, -138px);
  }
`;
const Wrap3 = styled(Wrap1)`
  p {
    transform: translate(850px, -156px);
  }
`;

const Wrap4 = styled.div`
  h4 {
    transform: translate(140px, -50px);
    font-weight: 500;
    color: rgb(0, 0, 0);
    font-family: "Open Sans", sans-serif;
    font-size: 17px;
  }

  h1 {
    transform: translate(139px, -50px);
    color: rgb(0, 0, 0);
    font-weight: 500;
    font-family: "Open Sans", sans-serif;
  }
`;
const OrderButton = styled.div`
  transform: translate(126px, -50px);
  background-color: rgba(249, 249, 249, 1);
  width: 150px;
  height: 40px;
  color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid rgb(0, 0, 0);
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 13px;
  cursor: pointer;
  margin: 8px;

  &:hover {
    background: rgb(0, 0, 0);
    opacity: 1;
    color: rgb(249, 249, 249);
  }
`;

const Wrap5 = styled.div`
  p {
    transform: translate(500px, -160px);
    color: rgb(40, 40, 40);
    font-family: "Open Sans", sans-serif;
    padding-bottom: 1px;
  }
`;

export default SeventhPage;
