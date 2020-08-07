import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import bannerImage from "../../img/banner.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import kingOfCandy from "../../img/king-of-candy-new-new.png";
import youAreNowAKidInACandyStore from "../../img/you-are-now-a-kid-in-a-candy-store-new.png";

import scrollDownTo from "../../img/scroll-down-to.png";
import startShopping from "../../img/start-shopping.png";

import candy1 from "../../img/candy-rs.png";
import candy2 from "../../img/gummy-bear-rs.png";
import candy3 from "../../img/hersheys-chocolate-rs.png";
import candy4 from "../../img/candy-2-rs.png";
import gifts from "../../img/gifts-rs.png";

import sliderNew1 from "../../img/new-test.mp4";
import sliderNew2 from "../../img/new-test2.mp4";

import logo from "../../img/logo-pink-new.png";

import { Helmet } from "react-helmet";

export default function Home() {
  const { userData } = useContext(UserContext);
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   slidesToShow: 2,
  //   slidersToScroll: 1,
  //   arrows: true,
  // };

  let settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  let settingsMain = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  let settingsMobile = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
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
    // window.addEventListener("scroll", scrollHandler);
    // if (window.innerWidth <= 800) {
    //   const leftBlock = document.querySelector(".block-1");
    //   leftBlock.classList.add("block-1-animation");
    // }
    // return () => {
    //   window.removeEventListener("scroll", scrollHandler);
    // };
  }, []);

  // const scrollHandler = () => {
  //   console.log("hello");
  //   // TODO
  //   // check positioning of elements and see if they where they are before adding animation to them

  //   const thumbnailRow = document.querySelector(".thumbnail-row");

  //   const dimensions = thumbnailRow.getBoundingClientRect();

  //   const left = document.querySelector("#margin-left-image");
  //   const right = document.querySelector("#margin-right-image");

  //   const leftBlock = document.querySelector(".block-1");
  //   const rightBlock = document.querySelector(".block-2");

  //   const bottomleftBlock = document.querySelector(".bottom-block-1");
  //   const bottommiddleBlock = document.querySelector(".bottom-block-2");
  //   const bottomrightBlock = document.querySelector(".bottom-block-3");

  //   console.log(dimensions.top);

  //   //check if desktop
  //   if (window.innerWidth > 800) {
  //     if (dimensions.top < 700) {
  //       left.classList.add("margin-right-image-animation");
  //       right.classList.add("margin-left-image-animation");
  //     }
  //     if (dimensions.top < -350) {
  //       leftBlock.classList.add("block-1-animation");
  //       rightBlock.classList.add("block-2-animation");
  //     }
  //     if (dimensions.top < -640) {
  //       bottomleftBlock.classList.add("block-1-animation");
  //       bottommiddleBlock.classList.add("block-3-animation");
  //       bottomrightBlock.classList.add("block-2-animation");
  //     }
  //   }

  //   //check if mobile
  //   if (window.innerWidth <= 800) {
  //     const origin = document.querySelector(".slick-list");
  //     const dimensions = origin.getBoundingClientRect();

  //     console.log("mobile: " + dimensions.top);

  //     console.log("is a mobile");

  //     if (dimensions.top < -40) {
  //       rightBlock.classList.add("block-1-animation");
  //     }
  //     if (dimensions.top < -250) {
  //       bottomleftBlock.classList.add("block-1-animation");
  //       bottommiddleBlock.classList.add("block-1-animation");
  //       bottomrightBlock.classList.add("block-1-animation");
  //     }
  //   }
  // };

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
        <Helmet>
          <meta charSet="utf-8" />
          <title>Candy Kabin - KING OF CANDY</title>
          <meta
            name="description"
            content="Rochdale based candy company supplying sweets and chocolates"
          />
          <meta
            name="keywords"
            content="Candy Kabin, Rochdale, Delivery information, Candy, Sweets, American, Chocolate, International, Traditional, Pick and Mix, Jolly Rancher, Calypso, M&M's, Sour Patch, Fanta, Nestle, Hershey's, Twix, Kool-Aid"
          />
        </Helmet>
        <div className="slider-block">
          <br />
          <Slider {...settingsMain} className="homepage-slider">
            <div>
              <a href="#">
                <video loop autoPlay src={sliderNew1} />
              </a>
            </div>
            <div>
              <a href="#">
                <video loop autoPlay src={sliderNew2} />
              </a>
            </div>
          </Slider>
        </div>

        <div className="block-1-new">
          <img
            src={kingOfCandy}
            className="block-1-image"
            alt="king of candy"
          />
        </div>
        <div className="svg-container">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="svg-1"
          >
            <path class="large-angle" d="M0 0 L100 90 L100 0 V100 H0"></path>
          </svg>
        </div>
        <div className="block-2-new">
          <img
            src={youAreNowAKidInACandyStore}
            alt="you are now a kid in a candy store"
          />
        </div>
        <div className="svg-container-2">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="svg-2"
          >
            <path class="large-angle" d="M0 0 L100 90 L100 0 V100 H0"></path>
          </svg>
        </div>
        <div className="block-3-new">
          <Slider {...settings} className="slider-desktop">
            <div>
              <a href="/shop/pick-and-mix">
                <img src={candy1} className="box-img" alt="sweet" />
                <h2>Pick & Mix</h2>
              </a>
            </div>
            <div>
              <a href="/new-in/products">
                <img src={candy2} className="box-img" alt="sweet" />
                <h2>New In</h2>
              </a>
            </div>
            <div>
              <a href="/search/hershey">
                <img src={candy3} className="box-img" alt="sweet" />
                <h2>Hershey's Chocolate</h2>
              </a>
            </div>
            <div>
              <a href="/shop/traditional">
                <img src={candy4} className="box-img" alt="sweet" />
                <h2>Traditional</h2>
              </a>
            </div>
            <div>
              <a href="/gifts-and-hampers/products">
                <img src={gifts} className="box-img" alt="sweet" />
                <h2>Gifts & Hampers</h2>
              </a>
            </div>
          </Slider>

          <Slider {...settingsMobile} className="slider-mobile">
            <div>
              <a href="/shop/pick-and-mix">
                <img src={candy1} className="box-img" alt="sweet" />
                <h2>Pick & Mix</h2>
              </a>
            </div>
            <div>
              <a href="/new-in/products">
                <img src={candy2} className="box-img" alt="sweet" />
                <h2>New In</h2>
              </a>
            </div>
            <div>
              <a href="/search/hershey">
                <img src={candy3} className="box-img" alt="sweet" />
                <h2>Hershey's Chocolate</h2>
              </a>
            </div>
            <div>
              <a href="/shop/traditional">
                <img src={candy4} className="box-img" alt="sweet" />
                <h2>Traditional</h2>
              </a>
            </div>
            <div>
              <a href="/gifts-and-hampers/products">
                <img src={gifts} className="box-img" alt="sweet" />
                <h2>Gifts & Hampers</h2>
              </a>
            </div>
          </Slider>

          <br />
        </div>

        <div className="parallax-block">
          <img src={logo} alt="logo" />
        </div>

        <div className="block-4-new">
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
            <br />
          </div>
        </div>

        <div className="parallax-block-2">{/* <img src={logo} /> */}</div>

        <div className="block-4-new">
          <div className="block-2">
            <h2>AMERICAN CHOCOLATE</h2>
            <br />
            <p>
              Nobody makes chocolate bars and nibbles like the Americans which
              is why our team at Candy Kabin are proud to stock some of the most
              iconic and well-known US brands. We have Hershey bars, Milk Duds,
              M&M's, Chocnibbles and more. Order your chocolate products today.
            </p>
            <br />
          </div>
        </div>
      </div>
    )
  );
}
