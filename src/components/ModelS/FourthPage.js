import React from "react";
import styled from "styled-components";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

function FourthPage() {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <Container>
      <Wrap1 data-aos="fade-up">
        <img src="/images/game.jpg" alt="" />
        <div>
          <h4>Game from Anywhere</h4>
          <p>Up to 10 teraflops of processing power enables in-</p>
          <p>car gaming on-par with today’s newest consoles.</p>
          <p>Wireless controller compatibility lets you game</p>
          <p>from any seat.</p>
        </div>
      </Wrap1>
      <Wrap2 data-aos="fade-up">
        <img src="/images/connected.jpg" alt="" />
        <div>
          <h4>Stay Connected</h4>
          <p>Multi-device Bluetooth, wireless and USB-C</p>
          <p>charging for every passenger, with enough power</p>
          <p>to fast-charge your tablets and laptop.</p>
        </div>
      </Wrap2>
      <Wrap3 data-aos="fade-up">
        <img src="/images/audio.jpg" alt="" />
        <div>
          <h4>Your Best Audio System</h4>
          <p>A 22-speaker, 960-watt audio system with active</p>
          <p>noise canceling offers the best listening experience </p>
          <p>at home or on the road.</p>
        </div>
      </Wrap3>
      <Wrap4 data-aos="fade-up">
        <img src="/images/storage.jpg" alt="" />
        <div>
          <h4>Real Storage</h4>
          <p>With front and rear trunks and fold-flat seats,</p>
          <p>Model S is a luxury car where you can fit your bike </p>
          <p>without taking the wheel off, and your luggage too.</p>
        </div>
      </Wrap4>
    </Container>
  );
}

const Container = styled.div`
  height: 190vh;
  background: rgb(0, 0, 0);
`;

const Wrap1 = styled.div`
  height: 280px;
  width: 100%;
  img {
    border: 1px solid rgb(0, 0, 0);
    width: 39%;
    height: 100%;
    transform: translateX(140px);
  }
  div {
    transform: translate(750px, -200px);
    h4 {
      font-weight: 900;
      color: rgb(249, 249, 249);
      padding-bottom: 10px;
    }
    p {
      color: rgb(249, 249, 249);
    }
  }
`;
const Wrap2 = styled.div`
  height: 280px;
  width: 100%;
  img {
    border: 1px solid rgb(0, 0, 0);
    width: 39%;
    height: 100%;
    transform: translateX(632px);
  }
  div {
    transform: translate(140px, -200px);
    h4 {
      font-weight: 900;
      color: rgb(249, 249, 249);
      padding-bottom: 10px;
    }
    p {
      color: rgb(249, 249, 249);
    }
  }
`;
const Wrap3 = styled(Wrap1)``;
const Wrap4 = styled(Wrap2)``;
export default FourthPage;
