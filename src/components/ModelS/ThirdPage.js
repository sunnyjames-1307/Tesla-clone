import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ThirdPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Container>
      <Carousel {...settings}>
        <Wrap>
          <a>
            <img src="/images/model-s/witcher.jpg" alt="steering" />
            <h2>17” Cinematic Display</h2>
            <p>
              With 2200x1300 resolution, ultra bright, true colors and
              exceptional responsiveness, the new
            </p>
            <p>center display is the best screen to watch anywhere.</p>
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/images/model-s/tesla-steering.jpg" alt="steering" />
            <h2>Focus on Driving</h2>
            <p>
              The ultimate focus on driving: no stalks, no shifting. Model S is
              the best car to drive, and the best
            </p>
            <p>car to be driven in.</p>
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/images/model-s/screen.jpg" alt="steering" />
            <h2>Perfect Environment</h2>
            <p>
              Clean, powerful yet invisible cabin conditioning. Tri-zone
              temperature controls, ventilated front
            </p>
            <p>seats and HEPA filtration come standard.</p>
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/images/model-s/seats.jpg" alt="steering" />
            <h2>Redesigned Second Row</h2>
            <p>
              Seating for three adults, with extra legroom, headroom and a
              stowable armrest with integrated
            </p>
            <p>storage and wireless charging.</p>
          </a>
        </Wrap>
      </Carousel>
    </Container>
  );
}

const Container = styled.div`
  height: 150vh;
  background: rgb(0, 0, 0);
`;

const Carousel = styled(Slider)`
  & > button {
    height: 50%;
    width: 5vw;
    z-index: 1;
  }
  ul li button {
    transform: translate(-300px, 120px);
    border-radius: 50%;
    &:before {
      font-size: 10px;
      color: rgb(150, 150, 171);
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

const Wrap = styled.div`
  transform: translate(50px, 150px);

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
      border: 5px solid rgb(0, 0, 0);
    }
    h2 {
      color: white;
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
export default ThirdPage;
