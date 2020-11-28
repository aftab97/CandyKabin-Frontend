import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import bannerImage from "../../img/banner.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import kingOfCandy from "../../img/king-of-candy-new-new.jpeg";
import youAreNowAKidInACandyStore from "../../img/you-are-now-a-kid-in-a-candy-store-new.png";

// minibrands
import fanta from "../../img/mini-brands/fanta.png";
import cheetos from "../../img/mini-brands/cheetos.png";
import sour from "../../img/mini-brands/sour.png";
import herrs from "../../img/mini-brands/herrs.png";
import war from "../../img/mini-brands/war.png";
import mike from "../../img/mini-brands/mike.png";
import cad from "../../img/mini-brands/cad.png";
import dew from "../../img/mini-brands/dew.png";
import haribo from "../../img/mini-brands/haribo.png";
import stockleys from "../../img/mini-brands/stockleys.png";
import hostess from "../../img/mini-brands/hostess.png";
import jolly from "../../img/mini-brands/jolly.png";
import bang from "../../img/mini-brands/bang.png";
import cAndC from "../../img/mini-brands/c-a-c.png";

import scrollDownTo from "../../img/scroll-down-to.png";
import startShopping from "../../img/start-shopping.png";

import candy1 from "../../img/new-in-home.jpg";
import candy2 from "../../img/gummy-bear-rs.png";
import candy3 from "../../img/international-home.jpg";
import candy4 from "../../img/candy-2-rs.png";
import gifts from "../../img/gifts-rs.png";

import sliderNew0 from "../../img/rap-banner.mp4";
import sliderNew1 from "../../img/new-test.mp4";
import sliderNew2 from "../../img/new-test2.mp4";
import sliderNew3 from "../../img/new-test3.mp4";
import sliderNew4 from "../../img/new-test4.mp4";
import sliderNew5 from "../../img/bang-banner.mp4";
import sliderNew6 from "../../img/calpyso-banner.jpeg";
import sliderNew7 from "../../img/c&c-banner.jpeg";

import logo from "../../img/parallax-img.png";

import { Helmet } from "react-helmet";

import rightJellyBaby from "../../img/right-jelly-baby.png";
import leftJellyBaby from "../../img/left-jelly-baby.png";

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
          <title>Candy Kabin - American Sweets and American Candy</title>
          <meta
            name="description"
            content="Sweets and Candy - We have the widest range of American Sweets and Candy at the very best prices. Our range includes Hershey, Reeses, Twizzlers, M&M's,..based in Rochdale"
          />
          <meta
            name="keywords"
            content="Candy Kabin, Rochdale, Delivery information, Candy, Sweets, American, Chocolate, International, Traditional, Pick and Mix, Jolly Rancher, Calypso, M&M's, Sour Patch, Fanta, Nestle, Hershey's, Twix, Kool-Aid"
          />
        </Helmet>
        <div className="slider-block">
          <br />
          <Slider {...settingsMain} className="homepage-slider">
            <div className="slider-segment">
              <Link to="/search/rap snacks?">
                <video
                  loop
                  autoPlay
                  playsInline
                  src={sliderNew0}
                  className="videoMobile"
                />
              </Link>
            </div>
            <div className="slider-segment">
              <Link to="/search/jolly%20rancher?">
                <video
                  loop
                  autoPlay
                  playsInline
                  src={sliderNew1}
                  className="videoMobile"
                />
              </Link>
            </div>
            <div className="slider-segment">
              <Link to="/search/sour%20patch?">
                <video
                  loop
                  autoPlay
                  playsInline
                  src={sliderNew2}
                  className="videoMobile"
                />
              </Link>
            </div>
            <div className="slider-segment">
              <a href="/search/pop%20tarts?">
                <video
                  loop
                  autoPlay
                  playsInline
                  src={sliderNew3}
                  className="videoMobile"
                />
              </a>
            </div>
            {/* <div className="slider-segment">
              <Link to="/search/takis?">
                <video loop autoPlay src={sliderNew4} className="videoMobile" />
              </Link>
            </div>
            <div className="slider-segment">
              <Link to="/search/bang?">
                <video loop autoPlay src={sliderNew5} className="videoMobile" />
              </Link>
            </div> */}
            <div className="slider-segment">
              <Link to="/search/calypso?">
                <img src={sliderNew6} className="videoMobile" />
              </Link>
            </div>
            <div className="slider-segment">
              <Link to="/search/c%20&%20c?">
                <img src={sliderNew7} className="videoMobile" />
              </Link>
            </div>
          </Slider>
        </div>

        <div className="block-1-new">
          <img
            src={kingOfCandy}
            className="block-1-image"
            alt="king of candy"
          />
          <img src={rightJellyBaby} className="right-jelly-baby" alt="text" />
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
          <div className="home-top-brand">
            <a href="/search/C%20&%20C?">
              <img src={cAndC} className="home-brand fanta2" />
            </a>
            <a href="/search/cheetos?">
              <img src={cheetos} className="home-brand cheetos" />
            </a>
            <a href="/search/sour patch?">
              <img src={sour} className="home-brand sour" />
            </a>
            <a href="/search/herr's?">
              <img src={herrs} className="home-brand herrs" />
            </a>
            <a href="/search/warheads?">
              <img src={war} className="home-brand war" />
            </a>
          </div>
          <img src={leftJellyBaby} className="left-jelly-baby" alt="text" />

          <div className="block-2-title-container">
            <div className="mike-jolly-container">
              <a href="/search/mike?">
                <img src={mike} />
              </a>
              <a href="/search/jolly rancher?">
                <img src={jolly} />
              </a>
            </div>
            <img
              src={youAreNowAKidInACandyStore}
              alt="you are now a kid in a candy store"
              className="block-2-title"
            />
            <div className="bang-container">
              <a href="/search/bang?">
                <img src={bang} />
              </a>
            </div>
          </div>

          <div className="home-top-brand-2">
            <a href="/search/cadbury?">
              <img src={cad} className="home-brand2 fanta" />
            </a>
            <a href="/search/dew?">
              <img src={dew} className="home-brand2 dew" />
            </a>
            <a href="/search/haribo?">
              <img src={haribo} className="home-brand2 sour haribo" />
            </a>
            <a href="/search/hostess?">
              <img src={hostess} className="home-brand2 herrs" />
            </a>
            <a href="/shop/traditional">
              <img src={stockleys} className="home-brand2 war" />
            </a>
          </div>
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
              <a href="/pick-and-mix">
                <img src={candy2} className="box-img" alt="sweet" />
                <h2>Pick & Mix</h2>
              </a>
            </div>
            <div>
              <a href="/new-in/products">
                <img src={candy1} className="box-img" alt="sweet" />
                <h2>New In</h2>
              </a>
            </div>
            <div>
              <a href="/shop/international">
                <img src={candy3} className="box-img" alt="sweet" />
                <h2>International</h2>
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
              <a href="/new-in/products">
                <img src={candy1} className="box-img" alt="sweet" />
                <h2>New In</h2>
              </a>
            </div>
            <div>
              <a href="/pick-and-mix">
                <img src={candy2} className="box-img" alt="sweet" />
                <h2>Pick & Mix</h2>
              </a>
            </div>
            <div>
              <a href="/shop/international">
                <img src={candy3} className="box-img" alt="sweet" />
                <h2>International</h2>
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
            <h2>Welcome to CandyKabin </h2>
            <br />
            <p>
              Candy Kabin are proud to be one of the UK’s biggest suppliers of
              international confectionary. From a variety of sweets and snacks
              we are proud to stock products from the USA, Sweden, Canada and
              much much MORE! We have a huge range of Sodas, Candy, Chocolate &
              Snacks to satisfy your cravings! And it doesn’t stop their. We
              have designed a one stop shop to cater for everyone including
              adults to help regress them back to their childhood! With over 100
              pick and mix sweets thier is something for everyone at Candy
              Kabin!
            </p>
            <br />
          </div>
        </div>

        <div className="parallax-block-2">{/* <img src={logo} /> */}</div>

        <div className="block-4-new">
          <div className="block-2">
            <h2>Our Story</h2>
            <br />
            <p>
              Established in February 2019, Candy Kabin is a family business
              specialising in international grocery and confectionory. We are
              located in the heart of Rochdale and offer both retail and online
              ordering services. With our never ending range of sweets and
              treats, we can be sure to supply you with exclusive and most
              popular brands such as Jolly Rancher, Cheetos, Mike & Ikes, M&M’s,
              Fanta, Calypso and much much more!
            </p>
            <br />
          </div>
        </div>
      </div>
    )
  );
}
