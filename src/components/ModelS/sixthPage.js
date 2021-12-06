import React, { useEffect } from "react";
import styled from "styled-components";
import "aos/dist/aos.css";
import Aos from "aos";

const SixthPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Container>
      <Wrap data-aos="fade-up">
        <h1>Electric Powertrain</h1>
        <div>
          <p>
            Long Range and Plaid platforms unite powertrain and battery
            technologies for unrivaled performance,{" "}
          </p>
          <p>
            range and efficiency. New module and pack thermal architecture
            allows faster charging and gives you more{" "}
          </p>
          <p>power and endurance in all conditions.</p>
        </div>
      </Wrap>
      <img src="/images/model-s/powertrain.jpg" alt="" />
      <Wrap2>
        <Line />
        <h2>Long Range</h2>
        <p>Dual Motor All-Wheel Drive platform allows for the </p>
        <p>longest range, and now delivers insane power and</p>
        <p> acceleration.</p>
        <Swrap1>
          <h3>3.1 s</h3>
          <span>0-60 mph</span>
        </Swrap1>

        <Swrap2>
          <h3>405 mi</h3>
          <span>range (EPA est.)</span>
        </Swrap2>

        <Swrap3>
          <h3>670 hp</h3>
          <span>peak power</span>
        </Swrap3>
      </Wrap2>
      <Wrap3>
        <Line />
        <h2>Plaid</h2>
        <p>Tri Motor All-Wheel Drive platform with torque </p>
        <p>vectoring features three independent motors, each with </p>
        <p>a carbon-sleeved rotor that maintains peak power </p>
        <p>output all the way to top speed.</p>
        <Swrap4>
          <h3>1.9 s*</h3>
          <span>0-60 mph</span>
        </Swrap4>
        <Swrap5>
          <h3>390 mi</h3>
          <span>range (EPA est.)</span>
        </Swrap5>
        <Swrap6>
          <h3>1,020 hp</h3>
          <span>peak power</span>
        </Swrap6>
      </Wrap3>
      <h5>* With rollout subtracted</h5>
    </Container>
  );
};

const Container = styled.div`
  height: 170vh;
  background: rgb(240, 240, 240);
  img {
    height: 47%;
    width: 84%;
    transform: translate(110px, 125px);
  }
  h5 {
    transform: translate(550px, -35px);
    font-family: "Open Sans", sans-serif;
  }
`;
const Wrap = styled.div`
  h1 {
    transform: translate(230px, 80px);
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    color: rgb(0, 0, 0);
  }
  div {
    transform: translate(230px, 95px);
    p {
      color: rgb(0, 0, 0);
    }
  }
`;

const Wrap2 = styled.div`
  transform: translate(220px, 150px);
  height: 220px;
  width: 392px;
  cursor: pointer;
  h2 {
    padding-top: 10px;
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
    color: rgb(88, 88, 88);
    font-size: 20px;
    padding-bottom: 10px;
    transform: translateX(10px);
  }

  p {
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: rgb(88, 88, 88);
    transform: translateX(10px);
  }

  h3 {
    display: flex;
    flex-direction: row;
    color: rgb(88, 88, 88);
  }

  &:hover,
  &:target {
    border: 3px solid rgb(0, 0, 0);
    p {
      color: rgb(0, 0, 0);
    }

    h3 {
      color: rgb(0, 0, 0);
    }
    h2 {
      color: rgb(0, 0, 0);
    }
  }
`;

const Wrap3 = styled(Wrap2)`
  transform: translate(665px, -70px);
`;

const Swrap1 = styled.div`
  transform: translate(20px, 45px);
  h3 {
    font-size: 30px;
    font-weight: 600;
    font-size: 25px;
    font-family: "Open Sans", sans-serif;
  }
`;

const Swrap2 = styled(Swrap1)`
  transform: translate(130px, -2px);
`;
const Swrap3 = styled(Swrap2)`
  transform: translate(280px, -50px);
`;
const Swrap4 = styled(Swrap1)``;
const Swrap5 = styled(Swrap2)``;
const Swrap6 = styled(Swrap3)``;

const Line = styled.div`
  transform: translate(-1px, -1px);
  background: rgb(88, 88, 88);
  height: 3px;
  width: 390px;
`;

export default SixthPage;
