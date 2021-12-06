import React, { useEffect } from "react";
import styled from "styled-components";
//import Fade from "react-reveal/Fade";
import "aos/dist/aos.css";
import Aos from "aos";

function SecondPage() {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <Container>
      <ItemText data-aos="fade-up">
        <h1>All-New Interior</h1>
      </ItemText>

      <Wrap bgImage="/images/new-interior.jpg" />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background: rgb(0, 0, 0);
`;

const Wrap = styled.div`
  transform: translateY(5vh);
  height: 95vh;
  background-image: ${(props) => `url("${props.bgImage}")`};
  background-size: cover;
`;

const ItemText = styled.div`
  padding-top: 5vh;
  h1 {
    color: rgb(249, 249, 249);
    text-align: center;
    font-family: "Lato", sans-serif;
    font-weight: 500;
    font-size: 30px;
  }
`;

export default SecondPage;
