import React from "react";
import styled from "styled-components";
import "aos/dist/aos.css";
import Aos from "aos";
import FadeIn from "react-fade-in";
import { useEffect } from "react";

function FifthPage() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Container>
      <img src="/images/model-s/plaid-blue.jpg" alt="" />
      <Wrap1>
        <h1 data-aos="fade-up">1,020 hp</h1>
        <p data-aos="fade-up">Peak power</p>
      </Wrap1>
      <Wrap2>
        <h1 data-aos="fade-up">9.23s</h1>
        <p data-aos="fade-up">@155 mph 1/4 mile</p>
      </Wrap2>
      <Wrap3>
        <h1 data-aos="fade-up">1.99s</h1>
        <p data-aos="fade-up">0-60 mph*</p>
      </Wrap3>

      <Wrap4 data-aos="fade-up">
        <h4>Plaid</h4>
        <h1>Beyond Ludicrous</h1>
        <OrderButton>Order Now</OrderButton>
      </Wrap4>

      <Wrap5 data-aos="fade-up">
        <div>
          <FadeIn>
            <p>
              With the longest range and quickest acceleration of any electric
              vehicle in
            </p>
            <p>
              production, Model S Plaid is the highest performing sedan ever
              built. Both Long
            </p>
            <p>
              Range and Plaid powertrains, with updated battery architecture,
              are capable of
            </p>
            <p>back-to-back, consistent 1/4 mile runs.</p>
          </FadeIn>
        </div>
      </Wrap5>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background: rgb(249, 249, 249);
  img {
    width: 100%;
    height: 60%;
  }
`;

const Wrap1 = styled.div`
  transform: translate(380px, -130px);
  h1 {
    color: rgb(249, 249, 249);
    font-family: "Lato", sans-serif;
    font-weight: 600;
    transform: translateX(10px);
  }
  p {
    color: rgb(249, 249, 249);
    font-family: "Lato", sans-serif;
  }
`;

const Wrap2 = styled(Wrap1)`
  transform: translate(600px, -182px);
  p {
    transform: translateX(-25px);
    font-family: "Lato", sans-serif;
    font-weight: 500;
  }
`;
const Wrap3 = styled(Wrap1)`
  transform: translate(800px, -236px);
  p {
    transform: translateX(5px);
    font-family: "Lato", sans-serif;
    font-weight: 500;
  }
`;

const Wrap4 = styled.div`
  h4 {
    transform: translate(140px, -130px);
    font-weight: 500;
    color: rgb(0, 0, 0);
    font-family: "Open Sans", sans-serif;
    font-size: 17px;
  }

  h1 {
    transform: translate(139px, -128px);
    color: rgb(0, 0, 0);
    font-weight: 600;
    font-family: "Open Sans", sans-serif;
  }
`;
const OrderButton = styled.div`
  transform: translate(126px, -122px);
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
    transform: translate(500px, -230px);
    color: rgb(40, 40, 40);
    font-family: "Open Sans", sans-serif;
    padding-bottom: 1px;
  }
`;
export default FifthPage;
