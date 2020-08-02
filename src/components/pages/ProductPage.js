import React, { useEffect, useState, useContext } from "react";
import { stringifyUrl } from "query-string";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import Emoji from "react-emoji-render";
import BasketContext from "../../context/BasketContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAlert } from "react-alert";

//dietary
import halalLogo from "../../img/dietary/halal-new.png";
import glutenFreeLogo from "../../img/dietary/gluten-free-new.png";
import kosherLogo from "../../img/dietary/kosher-new.png";
import veganLogo from "../../img/dietary/vegan-new.png";
import vegetarianLogo from "../../img/dietary/vegetarian-new.png";

export const ProductPage = ({ match, location, history }) => {
  const [product, setProduct] = useState(undefined);

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
    let productName = document.querySelector(".i-title ").innerHTML;
    let pickedAmount = parseInt(document.querySelector(".i-amount").innerHTML);
    let data = parseFloat(
      document.querySelector(".i-product-price").childNodes[1].data
    );
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

  const handleClick2 = (e) => {
    let productName = document.querySelector(".i-title ").innerHTML;
    let pickedAmount = parseInt(
      document.querySelector(".amount-mobile").innerHTML
    );
    let data = parseFloat(
      document.querySelector(".i-product-price").childNodes[1].data
    );
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

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    sliderToShow: 1,
    slidersToScroll: 1,
  };

  return (
    <div className="individual-product-page">
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
              <div className="i-title-container hvr-grow2">
                <h2>
                  <span className="i-title">{product.productName}</span>
                </h2>
              </div>
              <div className="i-image hvr-grow2">
                <img src={product.imageURL} />
              </div>

              {product.ingredients ? (
                <div className="i-ingredients">
                  <p>{product.ingredients}</p>
                </div>
              ) : (
                <></>
              )}

              <div className="i-price-container-mobile">
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
              <ul className="i-sub-description hvr-grow2">
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
              </ul>
              <div className="i-price-basket">
                <div
                  className={`i-product-price-container hvr-grow`}
                  index={product.productName}
                >
                  <h3 className="i-product-price">
                    £{(product.price / 100).toFixed(2)}
                  </h3>
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

              <div className="i-dietary-container hvr-grow2">
                {product.halal ? (
                  <div className="dietary">
                    <img src={halalLogo} className="dietary-img" />
                  </div>
                ) : (
                  <></>
                )}
                {product.vegetarian ? (
                  <div className="dietary">
                    <img src={vegetarianLogo} className="dietary-img" />
                  </div>
                ) : (
                  <></>
                )}
                {product.kosher ? (
                  <div className="dietary">
                    <img src={kosherLogo} className="dietary-img" />
                  </div>
                ) : (
                  <></>
                )}
                {product.vegan ? (
                  <div className="dietary">
                    <img src={veganLogo} className="dietary-img" />
                  </div>
                ) : (
                  <></>
                )}
                {product.fatFree ? <div className="dietary">true</div> : <></>}
                {product.sugarFree ? (
                  <div className="dietary">true</div>
                ) : (
                  <></>
                )}
                {product.glutenFree ? (
                  <div className="dietary">
                    <img src={glutenFreeLogo} className="dietary-img" />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>

          <div className="i-product-description-container hvr-grow2">
            {product.description ? (
              <p className="i-product-description">
                <Emoji text=":fire::fire::fire::fire:" />
                {product.description}
                <Emoji text=":fire::fire::fire::fire:" />
              </p>
            ) : (
              <></>
            )}
          </div>

          {product.ingredients ? (
            <div className="i-ingredients-mobile">
              <p>{product.ingredients}</p>
            </div>
          ) : (
            <></>
          )}

          <div className="i-product-weight">{product.weight}</div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};
