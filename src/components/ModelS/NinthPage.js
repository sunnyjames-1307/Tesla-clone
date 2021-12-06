import React from "react";
import styled from "styled-components";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const NinthPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Container>
      <img src="/images/model-s/big-blue.jpg" alt="" />
      <Wrap>
        <Wrap1 data-aos="fade-up">
          <h1>405mi</h1>
          <p>Go anywhere with up to 405 miles of</p>
          <p>estimated range on a single charge</p>
        </Wrap1>
        <Wrap2 data-aos="fade-up">
          <h1>200mi</h1>
          <p>Supercharge up to 200 miles in</p>
          <p>15 minutes</p>
        </Wrap2>
        <Wrap3 data-aos="fade-up">
          <h1>25,000+</h1>
          <p>Superchargers placed along popular</p>
          <p>routes</p>
        </Wrap3>
        <Wrap4 data-aos="fade-up">
          <h3>Range</h3>
          <h1>Go Anywhere</h1>
          <p>Travel farther on a single charge than any</p>
          <p>other electric vehicle—and keep going with</p>
          <p>access to 25,000+ Superchargers globally. By</p>
          <p>combining up to 405 miles of estimated</p>
          <p>range with Tesla fast charging technology,</p>
          <p>you’ll spend less time charging and even</p>
          <p>more time on the road.</p>
          <OrderButton>ORDER NOW</OrderButton>
        </Wrap4>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  background: rgb(249, 249, 249);
  img {
    width: 70%;
    height: 100%;
  }
`;

const Wrap = styled.div``;
const Wrap1 = styled.div`
  h1 {
    color: rgb(249, 249, 249);
    transform: translate(-750px, 500px);
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
  }
  p {
    color: rgb(249, 249, 249);
    transform: translate(-810px, 505px);
    font-size: 13px;
  }
`;

const Wrap2 = styled.div`
  h1 {
    color: rgb(249, 249, 249);
    transform: translate(-490px, 434px);
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
  }
  p {
    color: rgb(249, 249, 249);
    transform: translate(-530px, 439px);
    font-size: 13px;
  }
`;
const Wrap3 = styled.div`
  h1 {
    color: rgb(249, 249, 249);
    transform: translate(-250px, 375px);
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
  }
  p {
    color: rgb(249, 249, 249);
    transform: translate(-300px, 370px);
    font-size: 13px;
  }
`;

const Wrap4 = styled.div`
  h3 {
    transform: translate(30px, -160px);
    font-weight: 500;
  }
  h1 {
    transform: translate(30px, -160px);
    color: black;
  }
  p {
    transform: translate(30px, -140px);
    color: rgb(60, 60, 60);
  }
`;
const OrderButton = styled.div`
  transform: translate(30px, 130px);
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
export default NinthPage;
