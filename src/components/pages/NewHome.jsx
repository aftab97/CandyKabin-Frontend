import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

let settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
};

export const NewHome = () => {
  return (
    <div className="homepage-container-new">
      <div className="homepage-banner-1">
        <a href="">
          <h4>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            laboriosam, totam ipsam
          </h4>
        </a>
      </div>

      <div className="homepage-banner-2">
        <a href="">
          <h4>FREE GIFTS WITH ORDERS OVER £50</h4>
        </a>
        <a href="">
          <h4>UK TRACKED DELIVERY AVAILABLE</h4>
        </a>
        <a href="">
          <h4>NEXT DAY DELIVERY AVAILABLE</h4>
        </a>
      </div>

      <div className="homepage-top-slider">
        <Slider {...settings}>
          <div>
            <a href="/pick-and-mix">
              <img
                src="https://via.placeholder.com/800x200"
                className="homepage-top-slider-individual"
                alt="sweet"
              />
            </a>
          </div>
          <div>
            <a href="/pick-and-mix">
              <img
                src="https://via.placeholder.com/800x200"
                className="homepage-top-slider-individual"
                alt="sweet"
              />
            </a>
          </div>
          <div>
            <a href="/pick-and-mix">
              <img
                src="https://via.placeholder.com/800x200"
                className="homepage-top-slider-individual"
                alt="sweet"
              />
            </a>
          </div>
        </Slider>
      </div>

      <div className="homepage-banner-3">
        <div className="homepage-banner-3-links">
          <Link to="/">
            <h4>NEW IN STOCK</h4>
          </Link>
          <Link to="/">
            <h4>BEST SELLER</h4>
          </Link>
          <Link to="/">
            <h4>SPECIAL OFFER</h4>
          </Link>
          <Link to="/" className="homepage-banner-3-links-last">
            <h4>FULL LIST OF NEW PRODUCTS</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};
