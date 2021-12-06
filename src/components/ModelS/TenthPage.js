import React from "react";
import styled from "styled-components";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TenthPage() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Container>
      <Wrap1>
        <h1>Freedom to Travel</h1>
        <p>
          Enter a destination on your touchscreen and Trip Planner will
          automatically calculate your route with
        </p>
        <p> Superchargers along the way.</p>
      </Wrap1>

      <Carousel {...settings}>
        <Wrap2>
          <a>
            <img src="/images/model-s/LAmap.jpg" alt="steering" />
            <h3>San Jose to Los Angeles</h3>
            <h3>340 miles</h3>
          </a>
        </Wrap2>
        <Wrap3>
          <a>
            <img src="/images/model-s/Berkleymap.jpg" alt="steering" />
            <h3>Berkeley to Lake Tahoe</h3>
            <h3>178 miles</h3>
          </a>
        </Wrap3>
        <Wrap4>
          <a>
            <img src="/images/model-s/nymap.jpg" alt="steering" />
            <h3>Manhattan to Boston</h3>
            <h3>211 miles</h3>
          </a>
        </Wrap4>
        <Wrap5>
          <a>
            <img src="/images/model-s/orlandomap.jpg" alt="steering" />
            <h3>Manhattan to Boston</h3>
            <h3>195 miles</h3>
          </a>
        </Wrap5>
      </Carousel>
    </Container>
  );
}

const Container = styled.div`
  height: 160vh;
`;

const Wrap1 = styled.div`
  font-family: "Lato", sans-serif;
  transform: translate(240px, 170px);
  p {
    transform: translateY(20px);
  }
`;

const Carousel = styled(Slider)`
  & > button {
    height: 50%;
    width: 5vw;
    z-index: 1;
  }
  ul li button {
    transform: translate(-300px, 130px);
    border-radius: 50%;
    &:before {
      font-size: 10px;
      color: rgb(88, 88, 88);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap2 = styled.div`
  transform: translate(70px, 220px);

  position: relative;
  cursor: pointer;

  justify-content: center;
  a {
    border-radius: 1px;

    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 90%;
      height: 85vh;
    }
    h2 {
      color: rgb(56, 56, 56);
      position: fixed;
      font-family: "Lato", sans-serif;
      font-weight: 600;
      text-border: rgb(0, 0, 0);
      transform: translate(400px, 50px);
      padding-bottom: 10px;
    }

    p {
      color: white;
      font-family: "Lato", sans-serif;
      transform: translate(400px, 50px);
      display: block;
    }
  }
`;

const Wrap3 = styled(Wrap2)``;
const Wrap4 = styled(Wrap2)``;
const Wrap5 = styled(Wrap2)``;

export default TenthPage;
