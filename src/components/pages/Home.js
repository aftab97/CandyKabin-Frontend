import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import bannerImage from "../../img/banner.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slider1 from "../../img/home-slider-1.png";

import box1 from "../../img/candy-box-image.png";
import box2 from "../../img/cat-subscription-boxes.png";
import box3 from "../../img/cat-american-candy.png";

export default function Home() {
  const { userData } = useContext(UserContext);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidersToScroll: 1,
    arrows: true,
  };

  const history = useHistory();

  const showIntro = () => {
    let intro = document.querySelector(".timeout-intro");

    //stops page home page from crashing if page is changed too fast
    if (intro != null) {
      intro.classList.add("fade-in");
    }
  };

  const handleScroll = () => {
    document.querySelector(".thumbnail-row").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    // if (rect.top < 1 && rect. top > )
    let secondArrow = document.querySelector(".home-down-arrow-container-2");
    secondArrow.classList.add("bounce");
    // secondArrow.classList.remove("bounce");
  };
  const handleScroll2 = () => {
    document.querySelector(".homepage-info-block").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    // if (rect.top < 1 && rect. top > )
    let secondArrow = document.querySelector(".home-down-arrow-container-2");
    secondArrow.classList.add("bounce");
    // secondArrow.classList.remove("bounce");
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    if (window.innerWidth <= 800) {
      const leftBlock = document.querySelector(".block-1");
      leftBlock.classList.add("block-1-animation");
    }
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = () => {
    console.log("hello");
    // TODO
    // check positioning of elements and see if they where they are before adding animation to them

    const thumbnailRow = document.querySelector(".thumbnail-row");

    const dimensions = thumbnailRow.getBoundingClientRect();

    const left = document.querySelector("#margin-left-image");
    const right = document.querySelector("#margin-right-image");

    const leftBlock = document.querySelector(".block-1");
    const rightBlock = document.querySelector(".block-2");

    const bottomleftBlock = document.querySelector(".bottom-block-1");
    const bottommiddleBlock = document.querySelector(".bottom-block-2");
    const bottomrightBlock = document.querySelector(".bottom-block-3");

    console.log(dimensions.top);

    //check if desktop
    if (window.innerWidth > 800) {
      if (dimensions.top < 700) {
        left.classList.add("margin-right-image-animation");
        right.classList.add("margin-left-image-animation");
      }
      if (dimensions.top < -350) {
        leftBlock.classList.add("block-1-animation");
        rightBlock.classList.add("block-2-animation");
      }
      if (dimensions.top < -640) {
        bottomleftBlock.classList.add("block-1-animation");
        bottommiddleBlock.classList.add("block-3-animation");
        bottomrightBlock.classList.add("block-2-animation");
      }
    }

    //check if mobile
    if (window.innerWidth <= 800) {
      const origin = document.querySelector(".slick-list");
      const dimensions = origin.getBoundingClientRect();

      console.log("mobile: " + dimensions.top);

      console.log("is a mobile");

      if (dimensions.top < -40) {
        rightBlock.classList.add("block-1-animation");
      }
      if (dimensions.top < -250) {
        bottomleftBlock.classList.add("block-1-animation");
        bottommiddleBlock.classList.add("block-1-animation");
        bottomrightBlock.classList.add("block-1-animation");
      }
    }
  };

  const box1Redirect = () => {
    history.push("/shop/international");
  };

  const box2Redirect = () => {
    history.push("/shop/sweets-and-candy");
  };

  const box3Redirect = () => {
    history.push("/shop/clearance");
  };

  return (
    setTimeout(() => showIntro(), 1000),
    (
      <div className="home-page">
        {/* {userData.user ? (
        <h1>Welcome {userData.user.displayName}</h1>
      ) : (
        <>
          <h2>You are not logged in</h2>
          <Link to="/login">Log in</Link>
        </>
      )} */}

        <Slider {...settings} className="homepage-slider">
          <div>
            <a href="#">
              <img src={slider1} />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={slider1} />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={slider1} />
            </a>
          </div>
        </Slider>

        <div className="intro-container">
          <h1 className="timeout-intro">THE BEST IN THE BUSINESS....</h1>
        </div>

        <div className="home-down-arrow-container-1">
          <button onClick={handleScroll}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ transform: "rotate(90deg)" }}
            >
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg>
          </button>
        </div>

        <div class="row thumbnail-row non-mobile">
          <div class="my-work-image" id="margin-left-image">
            <img
              class="thumbnail-image"
              src="https://i8.amplience.net/i/jpl/image0-1-5f12b24ac192446145b7e45b2c657d05"
            />
            <div class="img__description_layer">
              <span class="img__description">AMERICAN CANDY</span>
            </div>
          </div>
          <div class="my-work-image" id="margin-right-image">
            <img
              class="thumbnail-image"
              src="https://i8.amplience.net/i/jpl/image2-8c734dd33379f5142e4e98310241d268"
            />
            <div class="img__description_layer">
              <span class="img__description">RETRO CANDY</span>
            </div>
          </div>
        </div>

        <div className="home-down-arrow-container-2">
          <button onClick={handleScroll2}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ transform: "rotate(90deg)" }}
            >
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg>
          </button>
        </div>

        <div className="homepage-info-block">
          <div className="block-1">
            <h2>AMERICAN SODA'S</h2>
            <br />
            <p>
              Candy Kabin are proud to be one of the UK's biggest supplier of
              American sodas, UK sodas and more! We have a huge range of sodas,
              pop, chocolate milks and more, all designed to satisfy your
              sweet-tooth and/or regress bigger kids back to their childhood! We
              have some of the biggest names in soft drinks such as Mountain
              Dew, Calypso, Chupa Chups, Fanta flavours and more. View our stock
              today.
            </p>
          </div>
          <div className="block-2">
            <h2>AMERICAN CHOCOLATE</h2>
            <br />
            <p>
              Nobody makes chocolate bars and nibbles like the Americans which
              is why our team at Candy Kabin are proud to stock some of the most
              iconic and well-known US brands. We have Hershey bars, Milk Duds,
              M&M's, Chocnibbles and more. Order your chocolate products today.
            </p>
          </div>
        </div>
        <div class="homepage-image-bottom-blocks">
          <div
            class="image-bottom-block-container bottom-block-1"
            onClick={box1Redirect}
          >
            <img class="thumbnail-image-bottom-block" src={box1} />
            <div class="bottom-block-image-description-container">
              <span class="bottom-block-image-description">INTERNATIONAL</span>
            </div>
            <p style={{ fontWeight: 600 }}>INTERNATIONAL</p>
          </div>

          <div
            class="image-bottom-block-container bottom-block-2"
            onClick={box2Redirect}
          >
            <img class="thumbnail-image-bottom-block" src={box2} />
            <div class="bottom-block-image-description-container">
              <span class="bottom-block-image-description">SWEETS & CANDY</span>
            </div>
            <p style={{ fontWeight: 600 }}>SWEETS & CANDY</p>
          </div>

          <div
            class="image-bottom-block-container bottom-block-3"
            onClick={box3Redirect}
          >
            <img class="thumbnail-image-bottom-block" src={box3} />
            <div class="bottom-block-image-description-container">
              <span class="bottom-block-image-description">CLEARANCE</span>
            </div>
            <p style={{ fontWeight: 600 }}>CLEARANCE</p>
          </div>
        </div>
      </div>
    )
  );
}
