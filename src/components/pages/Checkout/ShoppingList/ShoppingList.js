import React, { useContext } from "react";
import BasketContext from "../../../../context/BasketContext";

export const ShoppingList = () => {
  const { shoppingCart } = useContext(BasketContext);

  const handleIncrement = (e) => {
    ++e.currentTarget.parentNode.querySelector(".table-amount").childNodes[0]
      .data;
  };

  const handleDecrement = (e) => {
    --e.currentTarget.parentNode.querySelector(".table-amount").childNodes[0]
      .data;
  };

  return shoppingCart ? (
    <>
      <div className="checkout-styling-table">
        <table
          cellpadding="0"
          cellspacing="0"
          style={{ margin: "auto", marginTop: 20, border: "1px solid #e5e5e5" }}
        >
          <tr
            className="checkount-table-header"
            style={{ backgroundColor: "#e57098" }}
          >
            <th style={{ paddingTop: 10, paddingBottom: 10 }}>
              Your Order Details
            </th>
            <th style={{ paddingTop: 10, paddingBottom: 10 }}>Quantity</th>
            <th style={{ paddingTop: 10, paddingBottom: 10 }}>Total</th>
          </tr>

          {shoppingCart.map((item) => (
            <tr>
              <td>
                <div className="table-row-container">
                  <div className="checkout-table-image-container">
                    <img
                      src={item.imageSrc}
                      style={{ maxWidth: 50, maxHeight: 70 }}
                    />
                  </div>
                  <div>{item.productName}</div>
                </div>
              </td>
              <td>
                <div className="table-row-container2">
                  <div
                    className="table-add table-button"
                    onClick={handleIncrement}
                  >
                    +
                  </div>
                  <div className="table-button table-amount">{item.amount}</div>
                  <div
                    className="table-reduce table-button"
                    onClick={handleDecrement}
                  >
                    -
                  </div>
                </div>
              </td>
              <td>NEEDS TO BE FILLED</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  ) : (
    <div>
      <h2>Basket Is Empty</h2>
    </div>
  );
};
