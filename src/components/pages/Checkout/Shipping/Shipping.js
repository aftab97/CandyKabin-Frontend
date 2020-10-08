import React, { useContext, useEffect, useState } from "react";
import BasketContext from "../../../../context/BasketContext";
import UserContext from "../../../../context/UserContext";

export const Shipping = () => {
  const {
    shoppingCart,
    setShoppingCart,
    count,
    incrementCounter,
    location,
    setLocation,
    productCost,
    deliveryCost,
    setDeliveryCost,
  } = useContext(BasketContext);

  // const [deliveryCost, setDeliveryCost] = useState(0);

  const calculateDeliveryCost = () => {
    let totalWeight = 0;
    let cost = 0;

    shoppingCart.map((item) => (totalWeight += item.weight * item.amount));

    console.log(totalWeight);

    switch (location) {
      case "UK MAINLAND":
        if (totalWeight <= 1000) {
          cost = 2.99;
        } else if (totalWeight > 1000 && totalWeight <= 2000) {
          cost = 4.99;
        } else if (totalWeight > 2000 && totalWeight <= 5000) {
          cost = 6.99;
        } else if (totalWeight > 5000 && totalWeight <= 10000) {
          cost = 8.99;
        } else if (totalWeight > 10000 && totalWeight <= 20000) {
          cost = 11.99;
        } else {
          cost = 20;
        }
        break;

      case "NORTHERN IRELAND":
        if (totalWeight <= 1000) {
          cost = 4.99;
        } else if (totalWeight > 1000 && totalWeight <= 2000) {
          cost = 5.99;
        } else if (totalWeight > 2000 && totalWeight <= 5000) {
          cost = 8.99;
        } else if (totalWeight > 5000 && totalWeight <= 10000) {
          cost = 10.99;
        } else if (totalWeight > 10000 && totalWeight <= 20000) {
          cost = 14.99;
        } else {
          cost = 24.99;
        }
        break;

      case "IRELAND":
        if (totalWeight <= 1000) {
          cost = 7.99;
        } else if (totalWeight > 1000 && totalWeight <= 2000) {
          cost = 9.49;
        } else if (totalWeight > 2000 && totalWeight <= 5000) {
          cost = 11.99;
        } else if (totalWeight > 5000 && totalWeight <= 10000) {
          cost = 14.99;
        } else if (totalWeight > 10000 && totalWeight <= 20000) {
          cost = 19.99;
        } else {
          cost = 24.99;
        }
        break;

      case "SCOTTISH HIGHLANDS & ISLANDS":
        if (totalWeight <= 1000) {
          cost = 5.99;
        } else if (totalWeight > 1000 && totalWeight <= 2000) {
          cost = 7.49;
        } else if (totalWeight > 2000 && totalWeight <= 5000) {
          cost = 9.99;
        } else if (totalWeight > 5000 && totalWeight <= 10000) {
          cost = 12.99;
        } else if (totalWeight > 10000 && totalWeight <= 20000) {
          cost = 15.99;
        } else {
          cost = 24.99;
        }
        break;

      case "COLLECTION":
        cost = 0;
        break;
    }

    setDeliveryCost(cost);

    console.log(cost);

    // console.log(deliveryCost);
  };

  useEffect(() => {
    calculateDeliveryCost();
  }, [shoppingCart]);

  useEffect(() => {
    calculateDeliveryCost();
  }, [location]);

  const handleRadioButtion = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="checkout-delivery-cost">
      <div className="checkout-delivery-options-container">
        <h4>SELECT YOUR SHIPPING LOCATION:</h4>
        <form
          className="checkout-delivery-options-form"
          onChange={handleRadioButtion}
        >
          <label>
            <input type="radio" value="UK MAINLAND" name="radio-button" />
            UK MAINLAND
          </label>
          <label>
            <input type="radio" value="NORTHERN IRELAND" name="radio-button" />
            NORTHERN IRELAND
          </label>
          <label>
            <input type="radio" value="IRELAND" name="radio-button" />
            IRELAND
          </label>
          <label>
            <input
              type="radio"
              value="SCOTTISH HIGHLANDS & ISLANDS"
              name="radio-button"
            />
            SCOTTISH HIGHLANDS & ISLANDS
          </label>
          <label>
            <input type="radio" value="COLLECTION" name="radio-button" />
            COLLECTION
          </label>
        </form>
      </div>
    </div>
  );
};
