import { TextField, Button, FormControl } from "@material-ui/core";
import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import BasketContext from "../../../../context/BasketContext";

export const ShoppingList = () => {
  const {
    shoppingCart,
    setShoppingCart,
    location,
    productCost,
    deliveryCost,
    discount,
    setDiscount,
  } = useContext(BasketContext);

  let [discountCode, setDiscountCode] = useState("");

  const handleIncrement = (e) => {
    let productName = e.currentTarget.parentNode.parentNode.parentNode.querySelector(
      ".product-name-table"
    ).childNodes[0].data;

    if (productName === "Pick And Mix Bag") {
      let UUID = e.currentTarget.parentNode.parentNode.parentNode.querySelector(
        ".product-uuid"
      ).childNodes[0].data;

      let nonSelectedItem = shoppingCart.filter((p) => p.UUID !== UUID);

      let selectedItem = shoppingCart.filter((p) => p.UUID === UUID);

      selectedItem[0].amount += 1;

      let combinedArr = [];
      combinedArr = [...selectedItem, ...nonSelectedItem];

      combinedArr.sort((a, b) => a.orderNo - b.orderNo); //keeps the order of the cart when it is updated

      setShoppingCart(combinedArr);
      localStorage.setItem("basket", JSON.stringify(combinedArr));
    } else {
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
    }
    // change discount back to 0
    setDiscount(0);
  };

  const handleDecrement = (e) => {
    let productName = e.currentTarget.parentNode.parentNode.parentNode.querySelector(
      ".product-name-table"
    ).childNodes[0].data;

    if (productName === "Pick And Mix Bag") {
      let UUID = e.currentTarget.parentNode.parentNode.parentNode.querySelector(
        ".product-uuid"
      ).childNodes[0].data;

      let nonSelectedItem = shoppingCart.filter((p) => p.UUID !== UUID);

      let selectedItem = shoppingCart.filter((p) => p.UUID === UUID);

      selectedItem[0].amount -= 1;

      let combinedArr = [];
      combinedArr = [...selectedItem, ...nonSelectedItem];

      combinedArr.sort((a, b) => a.orderNo - b.orderNo); //keeps the order of the cart when it is updated

      setShoppingCart(combinedArr);
      localStorage.setItem("basket", JSON.stringify(combinedArr));
    } else {
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
    }
    // change discount back to 0
    setDiscount(0);
  };

  const handleRemove = (e) => {
    let productName = e.currentTarget.parentNode.parentNode.querySelector(
      ".product-name-table"
    ).childNodes[0].data;

    if (productName === "Pick And Mix Bag") {
      let UUID = e.currentTarget.parentNode.parentNode.querySelector(
        ".product-uuid"
      ).childNodes[0].data;

      let nonSelectedItem = shoppingCart.filter((p) => p.UUID !== UUID);

      let combinedArr = [];
      combinedArr = [...nonSelectedItem];

      combinedArr.sort((a, b) => a.orderNo - b.orderNo); //keeps the order of the cart when it is updated

      setShoppingCart(combinedArr);
      localStorage.setItem("basket", JSON.stringify(combinedArr));
    } else {
      let nonSelectedItem = shoppingCart.filter(
        (p) => p.productName !== productName
      );

      let combinedArr = [...nonSelectedItem];

      combinedArr.sort((a, b) => a.orderNo - b.orderNo);

      setShoppingCart(combinedArr);
      localStorage.setItem("basket", JSON.stringify(combinedArr));
    }

    // change discount back to 0
    setDiscount(0);
  };

  const handleDiscountSubmit = () => {
    console.log("applying discount code");

    const checkLoggedIn = async () => {
      const getData = async () => {
        const dataResp = await Axios.post(
          `${process.env.REACT_APP_URL}/discounts/check`,
          { code: discountCode }
        );

        setDiscount(parseInt(dataResp.data.discount));
      };

      getData();
    };

    checkLoggedIn();

    // xhr request to grab code and check validity

    //change state according to discount

    //apply discount to final cost
  };

  let handleCost = () => {
    let cost = (productCost.toFixed(2) * (100 - discount)) / 100;
    return cost;
  };

  let handleTotalCost = () => {
    let cost = ((productCost * (100 - discount)) / 100 + deliveryCost).toFixed(
      2
    );
    return cost;
  };

  return shoppingCart ? (
    <>
      <div className="checkout-styling-table">
        <table
          cellpadding="0"
          cellspacing="0"
          style={{
            margin: "auto",
            marginTop: 20,
            border: "1px solid #e5e5e5",
            width: "95vw",
          }}
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
                      alt={item.productName}
                    />
                  </div>
                  <div>
                    <div className="product-name-table">{item.productName}</div>
                    <div>
                      {item.subName ? (
                        <ul className="product-name-sub">
                          {item.subName.split(",").map((val, index) => (
                            <li key={index}>{val}</li>
                          ))}
                        </ul>
                      ) : (
                        <></>
                      )}
                    </div>
                    <h4 className="product-uuid">{item.UUID}</h4>
                    <div className="product-individual-price-table">
                      £{item.price.toFixed(2)}
                    </div>
                    <div
                      className="product-remove-table"
                      style={{ color: "#e57098" }}
                      onClick={handleRemove}
                    >
                      <button>REMOVE</button>
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
                    <button>+</button>
                  </div>
                  <div className="table-button table-amount">{item.amount}</div>
                  <div
                    className="table-reduce table-button"
                    onClick={handleDecrement}
                  >
                    <button>-</button>
                  </div>
                </div>
              </td>
              <td style={{ textAlign: "center" }}>
                £{(item.amount * item.price).toFixed(2)}
              </td>
            </tr>
          ))}
          <tr>
            <td>APPLY DISCOUNT CODE</td>
            <td>
              <FormControl>
                <TextField
                  id="outlined-basic"
                  label="DISCOUNT CODE"
                  variant="outlined"
                  onChange={(e) => {
                    setDiscountCode(e.currentTarget.value);
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleDiscountSubmit}
                  className="discount-button"
                >
                  Apply
                </Button>
              </FormControl>
            </td>
          </tr>
          <tr>
            <td>PRODUCT COST</td>
            <td style={{ fontWeight: 600 }}>£{handleCost().toFixed(2)}</td>
          </tr>
          {location ? (
            <tr>
              <td>SHIPPING COST</td>
              <td style={{ fontWeight: 600 }}>£{deliveryCost.toFixed(2)}</td>
            </tr>
          ) : (
            <></>
          )}
          {location ? (
            <tr>
              <td>TOTAL COST</td>
              <td style={{ fontWeight: 600 }}>
                £{handleTotalCost()}
                {/* £{(productCost + deliveryCost).toFixed(2)} */}
              </td>
            </tr>
          ) : (
            <></>
          )}
        </table>
      </div>
    </>
  ) : (
    <div>
      <h2>Basket Is Empty</h2>
    </div>
  );
};
