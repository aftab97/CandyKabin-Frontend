import React, { useContext, useEffect, useState } from "react";
import BasketContext from "../../../../context/BasketContext";

export const Shipping = () => {
  const { shoppingCart, setShoppingCart, count, incrementCounter } = useContext(
    BasketContext
  );

  const [deliveryCost, setDeliveryCost] = useState(0);

  const calculateDeliveryCost = () => {
    let cost = 0;

    shoppingCart.map((item) => (cost += item.weight * item.amount));

    setDeliveryCost(cost);

    console.log(cost);

    // console.log(deliveryCost);
  };

  useEffect(() => {
    calculateDeliveryCost();
  }, [shoppingCart]);

  return (
    <div>
      <h2>Shipping Cost:</h2>
      <h2>{deliveryCost}</h2>
    </div>
  );
};
