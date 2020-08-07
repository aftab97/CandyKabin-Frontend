import React, { useContext } from "react";
import BasketContext from "../../../context/BasketContext";

import { Button, makeStyles } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

const useStlyes = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  dropDown: {
    width: 200,
    justifyContent: "center",
  },
  button: {
    width: 200,
    backgroundColor: "#e57098",
    color: "white",
  },
  menuItem: {
    justifyContent: "center",
  },
}));

export const Basket = () => {
  const classes = useStlyes();
  const history = useHistory();

  const { shoppingCart, setShoppingCart, productCost } = useContext(
    BasketContext
  );
  const handleSlider = () => {
    let slider = document.querySelector(".new-basket-container");
    slider.style.display = "none";
  };

  const handleCheckout = () => {
    let slider = document.querySelector(".new-basket-container");
    slider.style.display = "none";

    history.push("/checkout");
  };

  const handlingAdd = (e) => {
    console.log("adding more");

    let productName = e.currentTarget.parentNode.parentNode.querySelector(
      ".product-name-basket"
    ).childNodes[0].data;

    let nonSelectedItem = shoppingCart.filter(
      (p) => p.productName !== productName
    );

    let selectedItem = shoppingCart.filter(
      (p) => p.productName === productName
    );

    selectedItem[0].amount += 1;

    let combinedArr = [];
    combinedArr = [...selectedItem, ...nonSelectedItem];

    combinedArr.sort((a, b) => a.orderNo - b.orderNo); //keeps the order of the cart when it is updated

    setShoppingCart(combinedArr);
    localStorage.setItem("basket", JSON.stringify(combinedArr));
  };

  const handlingReduce = (e) => {
    console.log("reducing more");

    let productName = e.currentTarget.parentNode.parentNode.querySelector(
      ".product-name-basket"
    ).childNodes[0].data;

    let nonSelectedItem = shoppingCart.filter(
      (p) => p.productName !== productName
    );

    let selectedItem = shoppingCart.filter(
      (p) => p.productName === productName
    );

    if (selectedItem[0].amount > 1) {
      selectedItem[0].amount -= 1;
      let combinedArr = [];
      combinedArr = [...selectedItem, ...nonSelectedItem];

      combinedArr.sort((a, b) => a.orderNo - b.orderNo);

      setShoppingCart(combinedArr);
      localStorage.setItem("basket", JSON.stringify(combinedArr));
    }
  };

  const handleRemove = (e) => {
    let productName = e.currentTarget.parentNode.parentNode.querySelector(
      ".product-name-basket"
    ).childNodes[0].data;

    let nonSelectedItem = shoppingCart.filter(
      (p) => p.productName !== productName
    );

    let combinedArr = [...nonSelectedItem];

    combinedArr.sort((a, b) => a.orderNo - b.orderNo);

    setShoppingCart(combinedArr);
    localStorage.setItem("basket", JSON.stringify(combinedArr));
  };

  return (
    <div className="new-basket-container">
      <div className="basket-blur" onClick={handleSlider}></div>
      <div className="basket-container-sidebar open-basket-slider">
        <div className="new-basket-title-container">
          <h1 className="new-basket-title">BASKET</h1>
        </div>
        <div className="fixed-height-basket">
          <ul>
            {shoppingCart.length > 0 ? (
              JSON.parse(localStorage.getItem("basket")).map((data, index) => (
                <li key={index} className="basket-list">
                  <div className="basket-image-container">
                    <img src={data.imageSrc} alt={data.productName} />
                  </div>
                  <div className="basket-info-container">
                    <h4 className="product-name-basket">{data.productName}</h4>{" "}
                    <h5 className="product-price-basket">
                      £{data.price.toFixed(2)}
                    </h5>
                    <button
                      className="basket-remove-button"
                      onClick={handleRemove}
                    >
                      REMOVE
                    </button>
                  </div>
                  <div className="basket-buttons-container">
                    <button
                      onClick={handlingAdd}
                      className="basket-button-v1 shadow basket-button-increment"
                    >
                      +
                    </button>
                    <h4>{data.amount}</h4>
                    <button
                      onClick={handlingReduce}
                      className="basket-button-v1 shadow basket-button-decrement"
                    >
                      -
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <li className="basket-no-item-message">
                Basket contains no items
              </li>
            )}
          </ul>
        </div>
        <div className="new-basket-price-container">
          {shoppingCart.length > 0 ? (
            <>
              <h2 className="basket-title">Total: £{productCost.toFixed(2)}</h2>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {shoppingCart.length > 0 ? (
            <>
              <Button className={classes.button} onClick={handleCheckout}>
                <Link to="/checkout">CHECKOUT</Link>
              </Button>
            </>
          ) : (
            <>
              <Button className={classes.button} disabled>
                CHECKOUT
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
