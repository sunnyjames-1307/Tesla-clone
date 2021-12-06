import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Header from "./Header";
function FrontData() {
  return (
    <Wrap bgImage="/images/model-s.jpg">
      <Header />
      <Fade bottom>
        <ItemText>
          <h1>Model S</h1>
          <p>Plaid</p>
        </ItemText>
      </Fade>

      <Buttons>
        <ButtonGroup>
          <Mileage>
            390 mi
            <p>Range (est.)</p>
          </Mileage>
          <SixtySpeed>
            1.99 s<p>0-60 mph*</p>
          </SixtySpeed>
          <TopSpeed>
            200 mph
            <p>Top Speed+</p>
          </TopSpeed>
          <PeakPower>
            1,020 hp
            <p>Peak Power</p>
          </PeakPower>
          <RightButton>Order Now</RightButton>
        </ButtonGroup>
      </Buttons>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transform: translateY(100%)
  transition: transform 0.2s ease-in-ease-out;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  h1 {
    color: rgb(10, 10, 10);
    font-family: "Lato", sans-serif;
    letter-spacing: 0.8px;
    font-size: 40px;
    font-weight: 700;
  }

  p {
    font-size: 20px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  margin-right: 100px;

  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Mileage = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 550;
  font-family: Arial, Verdana, sans-serif;

  p {
    margin-left: 10px;
    color: white;
    font-size: 13px;
    font-weight: 500;
    font-family: Arial, Verdana, sans-serif;
    position: absolute;
    align-items: center;
    transform: translateY(15px);
  }
`;
const SixtySpeed = styled(Mileage)`
  transform: translateX(50px);
`;
const TopSpeed = styled(Mileage)`
  transform: translateX(100px);
`;
const PeakPower = styled(Mileage)`
  transform: translateX(150px);
`;

const RightButton = styled.div`
  transform: translateX(200px);
  background-color: rgba(23, 26, 32, 0);
  width: 180px;
  height: 45px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid rgb(249, 249, 249);
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 13px;
  cursor: pointer;
  margin: 8px;

  &:hover {
    background: white;
    opacity: 0.8;
    color: rgb(0, 0, 0);
  }
`;

const Buttons = styled.div``;

export default FrontData;
