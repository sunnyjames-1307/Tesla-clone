import React from "react";
import styled from "styled-components";
import FrontData from "./FrontPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import FifthPage from "./FifthPage";
import SixthPage from "./sixthPage";
import SeventhPage from "./SeventhPage";
import EighthPage from "./EighthPage";
import NinthPage from "./NinthPage";
import TenthPage from "./TenthPage";

function ModelS() {
  return (
    <Container>
      <FrontData />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <SeventhPage />
      <EighthPage />
      <NinthPage />
      <TenthPage />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
export default ModelS;
