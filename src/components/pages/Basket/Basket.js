import React, { useContext } from "react";
import BasketContext from "../../../context/BasketContext";

import { Button, makeStyles } from "@material-ui/core";

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

  const { shoppingCart, setShoppingCart, productCost } = useContext(
    BasketContext
  );
  const handleSlider = () => {
    let slider = document.querySelector(".new-basket-container");
    slider.style.display = "none";
  };
  return (
    <div className="new-basket-container">
      <div className="basket-blur" onClick={handleSlider}>
        blur
      </div>
      <div className="basket-container-sidebar open-basket-slider">
        <div>
          <h1>BASKET</h1>
        </div>
        <div className="fixed-height-basket">
          <ul>
            {shoppingCart.length > 0 ? (
              JSON.parse(localStorage.getItem("basket")).map((data, index) => (
                <li key={index} className="basket-list">
                  <div className="basket-image-container">
                    <img src={data.imageSrc} />
                  </div>
                  <div className="basket-info-container">
                    <h4 className="product-name-basket">{data.productName}</h4>{" "}
                    <h5 className="product-price-basket">
                      £{data.price.toFixed(2)}
                    </h5>
                    <button
                      className="basket-remove-button"
                      // onClick={handleRemove}
                    >
                      REMOVE
                    </button>
                  </div>
                  <div className="basket-buttons-container">
                    <button
                      // onClick={handlingAdd}
                      className="basket-button-v1 shadow basket-button-increment"
                    >
                      +
                    </button>
                    <h4>{data.amount}</h4>
                    <button
                      // onClick={handlingReduce}
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
        <div>
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
              <Button className={classes.button}>CHECKOUT</Button>
            </>
          ) : (
            <>
              <Button className={classes.button} disabled>
                CHECKOUT
              </Button>
            </>
          )}
          {/* <Button className={classes.button}>CHECKOUT</Button> */}
        </div>
      </div>
    </div>
  );
};
