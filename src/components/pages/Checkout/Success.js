import React, { useEffect, useContext } from "react";

import greenTick from "../../../img/tick.png";
import BasketContext from "../../../context/BasketContext";
import UserContext from "../../../context/UserContext";
import Axios from "axios";

export const Success = () => {
  const { setShoppingCart } = useContext(BasketContext);

  useEffect(() => {
    setShoppingCart([]);
    localStorage.setItem("basket", "");
  }, []);

  return (
    <div className="success-page-container">
      <div className="success-page">
        <img src={greenTick} className="green-tick" />
        <h2>
          Congratulations on your order! You will receive a email soon detailing
          your full order.
        </h2>
      </div>
    </div>
  );
};
