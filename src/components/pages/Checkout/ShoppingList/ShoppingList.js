import React, { useContext } from "react";
import BasketContext from "../../../../context/BasketContext";

export const ShoppingList = () => {
  const { shoppingCart, setShoppingCart } = useContext(BasketContext);

  const handleIncrement = (e) => {
    let productName = e.currentTarget.parentNode.parentNode.parentNode.querySelector(
      ".product-name-table"
    ).childNodes[0].data;

    console.log(productName);

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

  const handleDecrement = (e) => {
    let productName = e.currentTarget.parentNode.parentNode.parentNode.querySelector(
      ".product-name-table"
    ).childNodes[0].data;

    console.log(productName);

    let nonSelectedItem = shoppingCart.filter(
      (p) => p.productName !== productName
    );

    let selectedItem = shoppingCart.filter(
      (p) => p.productName === productName
    );

    selectedItem[0].amount -= 1;

    let combinedArr = [];
    combinedArr = [...selectedItem, ...nonSelectedItem];

    combinedArr.sort((a, b) => a.orderNo - b.orderNo); //keeps the order of the cart when it is updated

    setShoppingCart(combinedArr);
    localStorage.setItem("basket", JSON.stringify(combinedArr));
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
                  <div>
                    <div className="product-name-table">{item.productName}</div>
                    <div className="product-individual-price-table">
                      {item.price}
                    </div>
                    <div
                      className="product-remove-table"
                      style={{ color: "#e57098" }}
                    >
                      REMOVE
                    </div>
                  </div>
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
              <td>{(item.amount * item.price).toFixed(2)}</td>
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
