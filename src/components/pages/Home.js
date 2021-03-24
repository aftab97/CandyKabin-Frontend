import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import bannerImage from "../../img/banner.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ParallaxBanner, Parallax } from "react-scroll-parallax";

import kingOfCandy from "../../img/king-of-candy-new-new.jpeg";
// import kingOfCandy2 from "../../img/king-of-candy-new-new-new.jpeg";
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

import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

// import style from "./parallax/Overlap.scss";
// import { Svg } from "./Svg";
import circle from "./parallax/circle.svg";
import circleRings from "./parallax/circle-rings.svg";
import { MaterialUiCard } from "./MaterialUi/MaterialUiCard";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100%",
  },
  paperImages: {
    width: "50%",
  },
  title: {
    textAlign: "center",
  },
  root2: {
    maxWidth: 345,
    margin: 10,
  },
  root3: {
    maxWidth: 345,
    margin: 10,
    height: 400,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  media2: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  kingOfCandy: {
    backgroundSize: "contain",
    backgroundColor: "#34ceef",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expand2: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  expandOpen2: {
    transform: "rotate(180deg)",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
}));

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

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [discountedProducts, setDiscountedProducts] = useState(undefined);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
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

  useEffect(() => {
    const grabData = async () => {
      const fetchedProduct = await Axios.get(
        `${process.env.REACT_APP_URL}/product/discountedItems`
      );

      console.log(fetchedProduct);

      setDiscountedProducts(fetchedProduct.data.splice(0, 8));
    };

    grabData();
  }, []);
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
        {/* <div className="slider-block">
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
        </div> */}
        <div className="top-selections">
          <h2 className={classes.title}>
            ⭐ Star American Sweet Collection ⭐
          </h2>
          <Grid
            className={classes.root}
            container
            spacing={3}
            style={{ display: "flex" }}
          >
            {/* ROW 1 */}
            <Grid item xs={3}>
              <Link
                to={
                  "/products/" + "HERSHEYS COOKIE & CREME COOKIE BITES (212G)"
                }
              >
                <Card className={classes.paper}>
                  <img
                    src="https://i.imgur.com/B2I3lSi.png"
                    className={classes.paperImages}
                  />
                  <h2>HERSHEYS COOKIE & CREME COOKIE BITES (212G)</h2>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={3}>
              <Link to={"/products/" + "HERSHEYS POP SNACK MIX (80Z)"}>
                <Card className={classes.paper}>
                  <img
                    src="https://i.imgur.com/C3ILJfN.png"
                    className={classes.paperImages}
                  />
                  <h2>HERSHEYS POP SNACK MIX (80Z)</h2>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={3}>
              <Link
                to={
                  "/products/" +
                  "DOUGHLISH COOKIE DOUGH TRIPLE CHOCOLATE BROWNIE (14OZ)"
                }
              >
                <Card className={classes.paper}>
                  <img
                    src="https://i.imgur.com/UKDEZYj.jpg"
                    className={classes.paperImages}
                  />
                  <h2>
                    DOUGHLISH COOKIE DOUGH TRIPLE CHOCOLATE BROWNIE (14OZ)
                  </h2>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={3}>
              <Link
                to={"/products/" + "NOT SO SOUR PUNCH FAN FAVOURITES (5OZ)"}
              >
                <Card className={classes.paper}>
                  <img
                    src="https://i.imgur.com/KUSi21H.png"
                    className={classes.paperImages}
                  />
                  <h2>NOT SO SOUR PUNCH FAN FAVOURITES (5OZ)</h2>
                </Card>
              </Link>
            </Grid>

            {/* ROW 2 */}
            <Grid item xs={3} className="mobile-hide">
              <Link
                to={"/products/" + "CALYPSO LIGHT ORIGINAL LEMONADE (473ml)"}
              >
                <Card className={classes.paper}>
                  <img
                    src="https://i.imgur.com/RjhEi2J.png"
                    className={classes.paperImages}
                    style={{ width: "20%" }}
                  />
                  <h2>CALYPSO LIGHT ORIGINAL LEMONADE (473ml)</h2>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={3} className="mobile-hide">
              <Link
                to={"/products/" + "NERDS GUMMY CLUSTERS PEG BAG 5OZ (141G)"}
              >
                <Card className={classes.paper}>
                  <img
                    src="https://i.imgur.com/P7ShP2R.jpg"
                    className={classes.paperImages}
                  />
                  <h2>NERDS GUMMY CLUSTERS PEG BAG 5OZ (141G)</h2>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={3} className="mobile-hide">
              <Link
                to={
                  "/products/" + "JOLLY RANCHER ORIGINAL HARD CANDY 8OZ(107G)"
                }
              >
                <Card className={classes.paper}>
                  <img
                    src="https://i.imgur.com/Ss4CLDw.jpg?1"
                    className={classes.paperImages}
                    style={{ width: "35%" }}
                  />
                  <h2>JOLLY RANCHER ORIGINAL HARD CANDY 8OZ(107G)</h2>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={3} className="mobile-hide">
              <Link to={"/products/" + "COOKIE DOUGH BITES 3.10Z (88G)"}>
                <Card className={classes.paper}>
                  <img
                    src="https://i.imgur.com/i9eKfAe.png"
                    className={classes.paperImages}
                  />
                  <h2>COOKIE DOUGH BITES 3.10Z (88G)</h2>
                </Card>
              </Link>
            </Grid>
          </Grid>
        </div>
        <div
          className="about-us"
          style={{
            backgroundColor: "#f5f5f5",
            textAlign: "center",
            padding: 10,
          }}
        >
          <h2 style={{ fontWeight: 400 }}>About Us</h2>
          <div className={classes.cardContainer}>
            <Card className={classes.root2}>
              <CardHeader
                title="Welcome to Candy Kabin"
                subheader="September 14, 2016"
              />
              <CardMedia
                className={clsx(classes.media, classes.kingOfCandy)}
                image={kingOfCandy}
                title="Welcome to Candy Kabin"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Candy Kabin are proud to be one of the UK’s biggest suppliers
                  of international confectionary.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  className={clsx(classes.expand2, {
                    [classes.expandOpen2]: expanded2,
                  })}
                  onClick={handleExpandClick2}
                  aria-expanded={expanded2}
                  aria-label="show more2"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded2} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    From a variety of sweets and snacks we are proud to stock
                    products from the USA, Sweden, Canada and much much MORE! We
                    have a huge range of Sodas, Candy, Chocolate & Snacks to
                    satisfy your cravings! And it doesn’t stop their. We have
                    designed a one stop shop to cater for everyone including
                    adults to help regress them back to their childhood! With
                    over 100 pick and mix sweets thier is something for everyone
                    at Candy Kabin!
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>

            <Card className={classes.root3}>
              <CardHeader title="Our Story..." subheader="June 20, 2020" />
              <CardMedia
                className={clsx(classes.media2, classes.kingOfCandy)}
                image={youAreNowAKidInACandyStore}
                title="Welcome to Candy Kabin"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Candy Kabin are proud to be one of the UK’s biggest suppliers
                  of international confectionary.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
        <br />
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
        </div>

        <div className="top-selections">
          <h2 className={classes.title}>️‍🔥 HOT DEALS ️‍🔥</h2>
          <Grid
            className={classes.root}
            container
            spacing={3}
            style={{ display: "flex" }}
          >
            {discountedProducts &&
              discountedProducts.map((product, key) => (
                <>
                  <Grid item xs={3} key={key}>
                    <Link to={"/products/" + product.productName}>
                      <Card className={classes.paper}>
                        <img
                          src={product.imageURL}
                          className={classes.paperImages}
                        />
                        <h2>{product.productName}</h2>

                        {product.discountPrice ? (
                          <h3 className="product-price">
                            £{(product.price / 100).toFixed(2)}
                            <div className="discount"></div>
                          </h3>
                        ) : (
                          <h3 className="product-price">
                            <span>£{(product.price / 100).toFixed(2)}</span>
                          </h3>
                        )}

                        {product.discountPrice ? (
                          <h3 className="product-discount">
                            £{(product.discountPrice / 100).toFixed(2)}
                          </h3>
                        ) : (
                          <></>
                        )}
                      </Card>
                    </Link>
                  </Grid>
                </>
              ))}
          </Grid>
        </div>
      </div>
    )
  );
}
