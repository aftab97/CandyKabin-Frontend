import React, { useEffect, useState, useContext, useLayoutEffect } from "react";
import { stringifyUrl } from "query-string";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import Emoji from "react-emoji-render";
import BasketContext from "../../context/BasketContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAlert } from "react-alert";
import { Helmet } from "react-helmet";

//dietary
import halalLogo from "../../img/dietary/halal-new.png";
import glutenFreeLogo from "../../img/dietary/gluten-free-new.png";
import kosherLogo from "../../img/dietary/kosher-new.png";
import veganLogo from "../../img/dietary/vegan-new.png";
import vegetarianLogo from "../../img/dietary/vegetarian-new.png";
import sugarFreelogo from "../../img/dietary/sugar-free.png";
import fatFree from "../../img/dietary/fat-free.png";

export const ProductPage = ({ match, location, history }) => {
  const [product, setProduct] = useState(undefined);
  let [quantity, setQuantity] = useState(1);

  const alert = useAlert();

  const { shoppingCart, setShoppingCart, count, incrementCounter } = useContext(
    BasketContext
  );

  useEffect(() => {
    console.log("on a product page");
    console.log(match.params.id);
    console.log(location);

    const grabData = async () => {
      const fetchedProduct = await Axios.get(
        `${process.env.REACT_APP_URL}/product/products?individualProduct=` +
          match.params.id.replace(/&/g, "%26") // handle the & so it changes to the URL format
      );

      console.log(fetchedProduct.data);

      setProduct(fetchedProduct.data);
    };

    grabData();
  }, []);

  const goBackButton = () => {
    // const history = useHistory();
    history.goBack();
  };

  const increment = (e) => {
    ++document.querySelector(".i-amount").innerHTML;
    ++document.querySelector(".amount-mobile").innerHTML;
    // ++e.currentTarget.parentNode.querySelector("h4").childNodes[0].data;
  };

  const decrement = (e) => {
    if (document.querySelector(".i-amount").innerHTML > 0)
      --document.querySelector(".i-amount").innerHTML;

    if (document.querySelector(".amount-mobile").innerHTML > 0) {
      --document.querySelector(".amount-mobile").innerHTML;
    }
  };

  const handleClick = (e) => {
    let productName = document
      .querySelector(".i-title ")
      .textContent.replace(/^\s\s*/, "")
      .replace(/\s\s*$/, "");
    let pickedAmount = parseInt(document.querySelector(".i-amount").innerHTML);
    let data = parseFloat(
      document.querySelector(".i-product-price").childNodes[1].data
    );

    // check if discount available
    let discount = document.querySelector(".i-product-price-discount");

    if (discount !== null) {
      data = parseFloat(
        document.querySelector(".i-product-price-discount").childNodes[1].data
      );
    }

    let id = e.currentTarget.querySelector(".add-to-basket-button").id;

    let image = document.querySelector(".i-image > img");

    let nonParsedWeight = document.querySelector(".i-product-weight")
      .childNodes[0].data;

    let weight = parseInt(nonParsedWeight);

    let totalCost = pickedAmount * data;

    if (pickedAmount > 0) {
      incrementCounter();
      setShoppingCart([
        ...shoppingCart,
        {
          id,
          productName,
          amount: pickedAmount,
          price: data,
          weight,
          orderNo: count,
          imageSrc: image.src,
          totalCost,
          UUID: "",
          subName: "",
        },
      ]);

      let finalAmount = [
        ...shoppingCart,
        {
          id,
          productName,
          amount: pickedAmount,
          price: data,
          weight,
          orderNo: count,
          imageSrc: image.src,
          totalCost,
          UUID: "",
          subName: "",
        },
      ];

      var arr2 = finalAmount.reduce((a, b) => {
        var i = a.findIndex((x) => x.productName === b.productName);
        return (
          i === -1
            ? a.push({
                id: b.id,
                productName: b.productName,
                amount: b.amount,
                price: b.price,
                weight: b.weight,
                orderNo: b.orderNo,
                imageSrc: b.imageSrc,
                totalCost: b.totalCost,
                UUID: b.UUID,
                subName: b.subName,
              })
            : ((a[i].amount += b.amount), (a[i].totalCost += b.totalCost)),
          a
        );
      }, []);

      setShoppingCart(arr2);
      localStorage.setItem("basket", JSON.stringify(arr2));

      alert.success("ADDED TO BASKET");
    }
  };

  const handleClick2 = (e) => {
    let productName = document
      .querySelector(".i-title ")
      .textContent.replace(/^\s\s*/, "")
      .replace(/\s\s*$/, "");
    let pickedAmount = parseInt(
      document.querySelector(".amount-mobile").innerHTML
    );
    let data = parseFloat(
      document.querySelector(".i-product-price").childNodes[1].data
    );

    // check if discount available
    let discount = document.querySelector(".i-product-price-discount");

    if (discount !== null) {
      data = parseFloat(
        document.querySelector(".i-product-price-discount").childNodes[1].data
      );
    }

    let id = e.currentTarget.querySelector(".add-to-basket-button").id;

    let image = document.querySelector(".i-image > img");

    let nonParsedWeight = document.querySelector(".i-product-weight")
      .childNodes[0].data;

    let weight = parseInt(nonParsedWeight);

    let totalCost = pickedAmount * data;

    if (pickedAmount > 0) {
      incrementCounter();
      setShoppingCart([
        ...shoppingCart,
        {
          id,
          productName,
          amount: pickedAmount,
          price: data,
          weight,
          orderNo: count,
          imageSrc: image.src,
          totalCost,
        },
      ]);

      let finalAmount = [
        ...shoppingCart,
        {
          id,
          productName,
          amount: pickedAmount,
          price: data,
          weight,
          orderNo: count,
          imageSrc: image.src,
          totalCost,
        },
      ];

      var arr2 = finalAmount.reduce((a, b) => {
        var i = a.findIndex((x) => x.productName === b.productName);
        return (
          i === -1
            ? a.push({
                id: b.id,
                productName: b.productName,
                amount: b.amount,
                price: b.price,
                weight: b.weight,
                orderNo: b.orderNo,
                imageSrc: b.imageSrc,
                totalCost: b.totalCost,
              })
            : ((a[i].amount += b.amount), (a[i].totalCost += b.totalCost)),
          a
        );
      }, []);

      setShoppingCart(arr2);
      localStorage.setItem("basket", JSON.stringify(arr2));
      alert.success("ADDED TO BASKET");
    }
  };

  const handleNormalPurchase = (e) => {
    let productName = document
      .querySelector(".i-title ")
      .textContent.replace(/^\s\s*/, "")
      .replace(/\s\s*$/, "");

    console.log("PRODUCT NAME: " + productName);
    let pickedAmount = parseInt(document.querySelector(".i-amount").innerHTML);
    let data = parseFloat(
      document.querySelector(".i-product-price").childNodes[1].data
    );

    // check if discount available
    let discount = document.querySelector(".i-product-price-discount");

    if (discount !== null) {
      data = parseFloat(
        document.querySelector(".i-product-price-discount").childNodes[1].data
      );
    }

    let id = document.querySelector(".add-to-basket-button").id;

    let image = document.querySelector(".i-image > img");

    let nonParsedWeight = document.querySelector(".i-product-weight")
      .childNodes[0].data;

    let weight = parseInt(nonParsedWeight);

    let totalCost = pickedAmount * data;

    incrementCounter();
    setShoppingCart([
      ...shoppingCart,
      {
        id,
        productName,
        amount: quantity,
        price: data,
        weight,
        orderNo: count,
        imageSrc: image.src,
        totalCost,
        UUID: "",
        subName: "",
      },
    ]);

    let finalAmount = [
      ...shoppingCart,
      {
        id,
        productName,
        amount: quantity,
        price: data,
        weight,
        orderNo: count,
        imageSrc: image.src,
        totalCost,
        UUID: "",
        subName: "",
      },
    ];

    var arr2 = finalAmount.reduce((a, b) => {
      var i = a.findIndex((x) => x.productName === b.productName);
      return (
        i === -1
          ? a.push({
              id: b.id,
              productName: b.productName,
              amount: b.amount,
              price: b.price,
              weight: b.weight,
              orderNo: b.orderNo,
              imageSrc: b.imageSrc,
              totalCost: b.totalCost,
              UUID: b.UUID,
              subName: b.subName,
            })
          : ((a[i].amount += b.amount), (a[i].totalCost += b.totalCost)),
        a
      );
    }, []);

    setShoppingCart(arr2);
    localStorage.setItem("basket", JSON.stringify(arr2));
    alert.success("ADDED TO BASKET");
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    sliderToShow: 1,
    slidersToScroll: 1,
  };

  const handleMouseMove = (e) => {
    //Movement Animation to happen
    const card = document.querySelector(".card-2");
    const container = document.querySelector(".container-2");

    //Items
    const title = document.querySelector(".title-2");
    const sneaker = document.querySelector(".sneaker img");
    const purchase = document.querySelector(".purchase");
    const description = document.querySelector(".info h3");
    const sizes = document.querySelector(".sizes");
    const price = document.querySelector(".price-2");

    if (window.screen.availWidth > 600) {
      container.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      });
    }
  };

  const handleMouseEnter = () => {
    //Movement Animation to happen
    const card = document.querySelector(".card-2");
    const container = document.querySelector(".container-2");

    //Items
    const title = document.querySelector(".title-2");
    const sneaker = document.querySelector(".sneaker img");
    const purchase = document.querySelector(".purchase");
    const description = document.querySelector(".info h3");
    const sizes = document.querySelector(".sizes");
    const price = document.querySelector(".price-2");
    const price3 = document.querySelector(".price-3");
    const quantity = document.querySelector(".i-quantity-container");

    if (window.screen.availWidth > 600) {
      container.addEventListener("mouseenter", () => {
        card.style.transition = "none";
        //Popout
        title.style.transform = "translateZ(150px)";
        price.style.transform = "translateZ(150px)";
        sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
        description.style.transform = "translateZ(125px)";
        sizes.style.transform = "translateZ(100px)";
        quantity.style.transform = "translateZ(75px)";
        purchase.style.transform = "translateZ(50px)";
        if (price3 !== null) {
          price3.style.transform = "translateZ(150px)";
        }
      });
    }
  };

  const handleMouseLeave = () => {
    //Movement Animation to happen
    const card = document.querySelector(".card-2");
    const container = document.querySelector(".container-2");

    //Items
    const title = document.querySelector(".title-2");
    const price = document.querySelector(".price-2");
    const price3 = document.querySelector(".price-3");
    const sneaker = document.querySelector(".sneaker img");
    const purchase = document.querySelector(".purchase");
    const description = document.querySelector(".info h3");
    const sizes = document.querySelector(".sizes");
    const quantity = document.querySelector(".i-quantity-container");

    if (window.screen.availWidth > 600) {
      //Animate Out
      container.addEventListener("mouseleave", () => {
        card.style.transition = "all 0.5s ease";
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        //Popback
        title.style.transform = "translateZ(0px)";
        price.style.transform = "translateZ(0px)";
        sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
        description.style.transform = "translateZ(0px)";
        sizes.style.transform = "translateZ(0px)";
        purchase.style.transform = "translateZ(0px)";
        quantity.style.transform = "translateZ(0px)";

        if (price3 !== null) {
          price3.style.transform = "translateZ(0px)";
        }
      });
    }
  };

  const handleQuantityClick = (e) => {
    setQuantity(parseInt(e.currentTarget.childNodes[0].data));

    // remove all the classes with the class active-quantity
  };
  return (
    <div className="individual-product-page">
      {product ? (
        <Helmet>
          <meta charSet="utf-8" />
          <title>Candy Kabin - {match.params.id}</title>
          <meta name="description" content={product.description} />
          <meta
            name="keywords"
            content="Candy Kabin, Rochdale, Delivery information, Candy, Sweets, American, Chocolate, International, Traditional, Pick and Mix, Jolly Rancher, Calypso, M&M's, Sour Patch, Fanta, Nestle, Hershey's, Twix, Kool-Aid"
          />
        </Helmet>
      ) : (
        <></>
      )}

      <button
        onClick={goBackButton}
        className="i-go-back-button-container hvr-grow2"
      >
        <div className="i-go-back-button-inner-container">
          <span>
            <svg
              className="arrow-back-svg"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </span>
          <h3> Back </h3>
        </div>
      </button>

      {product ? (
        <div className="i-product-container">
          <div className="i-title-image-subDescription-container">
            <div className="i-title-image-container">
              <div
                className="i-title-container hvr-grow2"
                style={{ display: "none" }}
              >
                <h2>
                  <span className="i-title">{product.productName}</span>
                </h2>
              </div>

              <div className="i-image hvr-grow2" style={{ display: "none" }}>
                <img src={product.imageURL} alt={product.productName} />
              </div>

              <div
                className="container-2 "
                // onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
              >
                <div className="card-2">
                  <div className="sneaker">
                    <div className="circle"></div>
                    <img
                      src={product.imageURL}
                      alt={product.productName}
                      className="sneaker-img"
                    />
                  </div>
                  <div className="info">
                    <h1 className="title-2">{product.productName}</h1>
                    {product.discountPrice ? (
                      <h2 className="price-2">
                        £{(product.price / 100).toFixed(2)}
                        <div className="discount"></div>
                      </h2>
                    ) : (
                      <h2 className="price-2">
                        £{(product.price / 100).toFixed(2)}
                      </h2>
                    )}
                    {product.discountPrice ? (
                      <h2 className="price-3">
                        £{(product.discountPrice / 100).toFixed(2)}
                      </h2>
                    ) : (
                      <></>
                    )}

                    <h3>
                      {product.description}
                      <br />
                      {product.subDescription1 ? (
                        <>
                          <br />
                          {product.subDescription1}
                        </>
                      ) : (
                        <></>
                      )}
                      {product.subDescription2 ? (
                        <>
                          <br />
                          {product.subDescription2}
                        </>
                      ) : (
                        <></>
                      )}
                      {product.subDescription3 ? (
                        <>
                          <br />
                          {product.subDescription3}
                        </>
                      ) : (
                        <></>
                      )}
                      {product.subDescription4 ? (
                        <>
                          <br />
                          {product.subDescription4}
                        </>
                      ) : (
                        <></>
                      )}
                      {product.subDescription5 ? (
                        <>
                          <br />
                          {product.subDescription5}
                        </>
                      ) : (
                        <></>
                      )}
                      {product.subDescription6 ? (
                        <>
                          <br />
                          {product.subDescription6}
                        </>
                      ) : (
                        <></>
                      )}
                      {product.subDescription7 ? (
                        <>
                          <br />
                          {product.subDescription7}
                        </>
                      ) : (
                        <></>
                      )}
                      {product.subDescription8 ? (
                        <>
                          <br />
                          {product.subDescription8}
                        </>
                      ) : (
                        <></>
                      )}
                      {product.subDescription9 ? (
                        <>
                          <br />
                          {product.subDescription9}
                        </>
                      ) : (
                        <></>
                      )}
                      {product.subDescription10 ? (
                        <>
                          <br />
                          {product.subDescription10}
                        </>
                      ) : (
                        <></>
                      )}
                      {product.subDescription11 ? (
                        <>
                          <br />
                          {product.subDescription11}
                        </>
                      ) : (
                        <></>
                      )}
                      {product.subDescription12 ? (
                        <>
                          <br />
                          {product.subDescription12}
                        </>
                      ) : (
                        <></>
                      )}
                      {product.subDescription13 ? (
                        <>
                          <br />
                          {product.subDescription13}
                        </>
                      ) : (
                        <></>
                      )}
                      {product.subDescription14 ? (
                        <>
                          <br />
                          {product.subDescription14}
                        </>
                      ) : (
                        <></>
                      )}
                      {product.subDescription15 ? (
                        <>
                          <br />
                          {product.subDescription15}
                        </>
                      ) : (
                        <></>
                      )}
                      {product.ingredients ? (
                        <>
                          <br />
                          <br />
                          {product.ingredients}
                        </>
                      ) : (
                        <></>
                      )}
                    </h3>
                    <div className="sizes">
                      {product.kosher ? (
                        <div className="dietary">
                          <img
                            src={kosherLogo}
                            className="dietary-img"
                            alt="kosher"
                          />
                        </div>
                      ) : (
                        <></>
                      )}

                      {product.fatFree ? (
                        <div className="dietary">
                          <img
                            src={fatFree}
                            className="dietary-img"
                            alt="fatFree"
                          />
                        </div>
                      ) : (
                        <></>
                      )}

                      {product.vegetarian ? (
                        <div className="dietary">
                          <img
                            src={vegetarianLogo}
                            className="dietary-img"
                            alt="vegetarian"
                          />
                        </div>
                      ) : (
                        <></>
                      )}

                      {product.halal ? (
                        <div className="dietary">
                          <img
                            src={halalLogo}
                            className="dietary-img"
                            alt="halal"
                          />
                        </div>
                      ) : (
                        <></>
                      )}

                      {product.vegan ? (
                        <div className="dietary">
                          <img
                            src={veganLogo}
                            className="dietary-img"
                            alt="vegan"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                      {product.sugarFree ? (
                        <div className="dietary">
                          <img
                            src={sugarFreelogo}
                            className="dietary-img"
                            alt="sugar free"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                      {product.glutenFree ? (
                        <div className="dietary">
                          <img
                            src={glutenFreeLogo}
                            className="dietary-img"
                            alt="gluten free"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>

                    <div className="i-quantity-container">
                      <h4>Amount: </h4>
                      <div className="i-quantity">
                        <button
                          className={quantity === 1 ? "active-quantity" : <></>}
                          onClick={handleQuantityClick}
                        >
                          1
                        </button>
                        <button
                          className={quantity === 2 ? "active-quantity" : <></>}
                          onClick={handleQuantityClick}
                        >
                          2
                        </button>
                        <button
                          className={quantity === 5 ? "active-quantity" : <></>}
                          onClick={handleQuantityClick}
                        >
                          5
                        </button>
                        <button
                          className={
                            quantity === 10 ? "active-quantity" : <></>
                          }
                          onClick={handleQuantityClick}
                        >
                          10
                        </button>
                      </div>
                    </div>
                    <div class="purchase">
                      <button onClick={handleNormalPurchase}>Purchase</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* {product.ingredients ? (
                <div className="i-ingredients">
                  <p>{product.ingredients}</p>
                </div>
              ) : (
                <></>
              )} */}

              <div
                className="i-price-container-mobile"
                style={{ display: "none" }}
              >
                <div className="i-price-inner-container">
                  <div className="i-product-price-mobile mobile-button price-mobile-container hvr-grow2">
                    £{(product.price / 100).toFixed(2)}
                  </div>
                  <div className="mobile-button-container-increment-decrement">
                    <div className="mobile-button mobile-increase-button">
                      <button className="increase-mobile" onClick={increment}>
                        +
                      </button>
                    </div>
                    <div className="mobile-button mobile-decrease-button">
                      <button className="decrease-mobile" onClick={decrement}>
                        -
                      </button>
                    </div>
                  </div>
                  <div className="amount-mobile mobile-button">0</div>
                </div>
                <div
                  id={product.productName}
                  onClick={handleClick2}
                  className="mobile-button mobile-add-to-basket-container"
                >
                  <button className="add-to-basket-button">
                    ADD TO BASKET
                  </button>
                </div>
              </div>
            </div>

            <div className="i-sub-description-container">
              <ul
                className="i-sub-description hvr-grow2"
                style={{ display: "none" }}
              >
                {product.subDescription1 ? (
                  <li className="hvr-grow">
                    🍭
                    {product.subDescription1}
                  </li>
                ) : (
                  <></>
                )}
                {product.subDescription2 ? (
                  <li className="hvr-grow">
                    🍭
                    {product.subDescription2}
                  </li>
                ) : (
                  <></>
                )}
                {product.subDescription3 ? (
                  <li className="hvr-grow">
                    🍭
                    {product.subDescription3}
                  </li>
                ) : (
                  <></>
                )}
                {product.subDescription4 ? (
                  <li className="hvr-grow">
                    🍭
                    {product.subDescription4}
                  </li>
                ) : (
                  <></>
                )}
                {product.subDescription5 ? (
                  <li className="hvr-grow">
                    🍭
                    {product.subDescription5}
                  </li>
                ) : (
                  <></>
                )}
                {product.subDescription6 ? (
                  <li className="hvr-grow">
                    🍭
                    {product.subDescription6}
                  </li>
                ) : (
                  <></>
                )}
                {product.subDescription7 ? (
                  <li className="hvr-grow">
                    🍭
                    {product.subDescription7}
                  </li>
                ) : (
                  <></>
                )}
                {product.subDescription8 ? (
                  <li className="hvr-grow">
                    🍭
                    {product.subDescription8}
                  </li>
                ) : (
                  <></>
                )}
                {product.subDescription9 ? (
                  <li className="hvr-grow">
                    🍭
                    {product.subDescription9}
                  </li>
                ) : (
                  <></>
                )}
                {product.subDescription10 ? (
                  <li className="hvr-grow">
                    🍭
                    {product.subDescription10}
                  </li>
                ) : (
                  <></>
                )}
              </ul>
              <div className="i-price-basket" style={{ display: "none" }}>
                <div
                  className={`i-product-price-container hvr-grow`}
                  index={product.productName}
                >
                  <h3 className="i-product-price">
                    £{(product.price / 100).toFixed(2)}
                  </h3>

                  {product.discountPrice ? (
                    <h3
                      className="i-product-price-discount"
                      style={{ display: "none" }}
                    >
                      £{(product.discountPrice / 100).toFixed(2)}
                    </h3>
                  ) : (
                    <></>
                  )}
                </div>
                <div>
                  <button
                    className="i-product-page-button increase hvr-grow"
                    onClick={increment}
                  >
                    +
                  </button>
                  <div
                    className="i-product-page-button decrease hvr-grow"
                    onClick={decrement}
                  >
                    -
                  </div>
                </div>
                <div className="i-amount-container hvr-grow">
                  <h4 className="i-amount">0</h4>
                </div>
                <div
                  className="i-basket-container hvr-grow"
                  id={product.productName}
                  onClick={handleClick}
                >
                  <button id={product._id} className="add-to-basket-button">
                    <h2>ADD TO BASKET</h2>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="i-dietary-container hvr-grow2"
            style={{ display: "none" }}
          >
            {product.kosher ? (
              <div className="dietary">
                <img src={kosherLogo} className="dietary-img" alt="kosher" />
              </div>
            ) : (
              <></>
            )}

            {product.fatFree ? (
              <div className="dietary">
                <img src={fatFree} className="dietary-img" alt="fatFree" />
              </div>
            ) : (
              <></>
            )}

            {product.vegetarian ? (
              <div className="dietary">
                <img
                  src={vegetarianLogo}
                  className="dietary-img"
                  alt="vegetarian"
                />
              </div>
            ) : (
              <></>
            )}

            {product.halal ? (
              <div className="dietary">
                <img src={halalLogo} className="dietary-img" alt="halal" />
              </div>
            ) : (
              <></>
            )}

            {product.vegan ? (
              <div className="dietary">
                <img src={veganLogo} className="dietary-img" alt="vegan" />
              </div>
            ) : (
              <></>
            )}
            {product.sugarFree ? (
              <div className="dietary">
                <img
                  src={sugarFreelogo}
                  className="dietary-img"
                  alt="sugar free"
                />
              </div>
            ) : (
              <></>
            )}
            {product.glutenFree ? (
              <div className="dietary">
                <img
                  src={glutenFreeLogo}
                  className="dietary-img"
                  alt="gluten free"
                />
              </div>
            ) : (
              <></>
            )}
          </div>

          {/* <div className="i-product-description-container hvr-grow2">
            {product.ingredients ? (
              <p className="i-product-description">
                <Emoji text=":fire::fire:" />
                {product.ingredients}
                <Emoji text=":fire::fire:" />
              </p>
            ) : (
              <></>
            )}
          </div> */}

          {/* {product.ingredients ? (
            <div className="i-ingredients-mobile">
              <p>{product.ingredients}</p>
            </div>
          ) : (
            <></>
          )} */}

          <div className="i-product-weight" style={{ display: "none" }}>
            {product.weight}
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};
