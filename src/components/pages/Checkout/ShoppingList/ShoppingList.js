import React, { useContext } from "react";
import BasketContext from "../../../../context/BasketContext";

export const ShoppingList = () => {
  const { shoppingCart } = useContext(BasketContext);

  return shoppingCart ? (
    <>
      {shoppingCart.map((item) => (
        <div>
          {item.amount} x {item.productName}
        </div>
      ))}
    </>
  ) : (
    <div>
      <h2>Basket Is Empty</h2>
    </div>
  );
};
