import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import BasketContext from "../../context/BasketContext";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import Logo from "../../img/logo.png";
// TODO - Add functionality for remove

export default function Header() {
  const { shoppingCart, setShoppingCart, productCost } = useContext(
    BasketContext
  );
  const { userData, setUserData } = useContext(UserContext);
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

  const basketOverlayData =
    shoppingCart.length > 0 ? (
      JSON.parse(localStorage.getItem("basket")).map((data, index) => (
        <li key={index} className="basket-list">
          <div className="basket-image-container">
            <img src={data.imageSrc} />
          </div>
          <div className="basket-info-container">
            <h4 className="product-name-basket">{data.productName}</h4>{" "}
            <h5 className="product-price-basket">£{data.price.toFixed(2)}</h5>
            <button className="basket-remove-button" onClick={handleRemove}>
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
      <li>Basket contains no items</li>
    );

  const logout = async () => {
    //update db with shoopping cart /first clear then update
    console.log(userData.user.id);
    let basketData = shoppingCart;

    const clear = await Axios.post(
      `${process.env.REACT_APP_URL}/users/clearCart`,
      { id: userData.user.id },
      {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": userData.token,
        },
      }
    );

    const data = await shoppingCart.map((p) =>
      Axios.post(
        `${process.env.REACT_APP_URL}/users/updateCart`,
        {
          id: userData.user.id,
          productId: p.id,
          productName: p.productName,
          amount: p.amount,
          price: p.price,
          orderNo: p.orderNo,
          imageSrc: p.imageSrc,
          weight: p.weight,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": userData.token,
          },
        }
      )
    );

    localStorage.setItem("basket", "");

    setShoppingCart([]);

    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  const history = useHistory();
  const login = () => history.push("/login");
  const checkout = () => history.push("/checkout");

  const handleMouseOver = () => {
    const basketOverlay = document.querySelector(".basketOverlay");
    basketOverlay.style.opacity = "1";
    basketOverlay.style.display = "block";
  };

  const handleMouseLeave = () => {
    const basketOverlay = document.querySelector(".basketOverlay");
    basketOverlay.style.opacity = "0";
    basketOverlay.style.display = "none";
  };

  const openMobileNav = () => {
    let hamburger = document.querySelector("#hamburger");

    if (hamburger.style.display === "none") {
      hamburger.style.display = "block";
    } else {
      hamburger.style.display = "none";
    }
  };

  return (
    <header id="header">
      <div className="hamburger-button">
        <button onClick={openMobileNav}>|||</button>
      </div>

      <Link to="/">
        <img src={Logo} className="logo" />
      </Link>
      <div>
        <svg
          className="instagram-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </div>
      <div>
        <svg
          className="facebook-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
        </svg>
      </div>
      <div className="header-buttons-container">
        {userData.user ? (
          <div className="login-container">
            <button onClick={logout} className="header-login-button">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 12c8 0 10 6.478 10 12H2c0-5.522 2-12 10-12zm0-12a5.5 5.5 0 110 11 5.5 5.5 0 010-11z"
                  fill="#535A6B"
                  fill-rule="nonzero"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className="login-container">
            <button onClick={login} className="header-login-button">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 12c8 0 10 6.478 10 12H2c0-5.522 2-12 10-12zm0-12a5.5 5.5 0 110 11 5.5 5.5 0 010-11z"
                  fill="#535A6B"
                  fill-rule="nonzero"
                />
              </svg>
            </button>
          </div>
        )}

        {/* BASKET STUFF */}
        <div className="basket-container" onMouseLeave={handleMouseLeave}>
          <div
            className="header-basket-container"
            onMouseOver={handleMouseOver}
            onClick={checkout}
          >
            <svg width="22" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.894 5.469c0-2.254 1.712-4.019 3.898-4.019 2.17 0 3.868 1.765 3.868 4.019v.86H6.894v-.86zm9.216.86v-.86C16.11 2.402 13.774 0 10.792 0 7.794 0 5.445 2.402 5.445 5.469v.86H1.449C.306 6.329 0 7 0 8.032V22c0 1.099.724 1.696 1.75 1.696h18.355c1.27 0 1.45-.725 1.45-1.696V8.032c0-1.25-1.05-1.703-1.45-1.703H16.11z"
                fill="#535A6B"
                fill-rule="nonzero"
              />
            </svg>
          </div>
          <div className="basketOverlay">
            <h2 className="basket-title">BASKET</h2>
            {basketOverlayData}
            <h2 className="basket-title">Total: £{productCost.toFixed(2)}</h2>
            <button className="basket-checkout-button">
              <Link to="/checkout">
                <h2>CHECKOUT</h2>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
