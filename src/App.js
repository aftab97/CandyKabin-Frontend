import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Axios from "axios";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import AdminLogin from "./components/auth/AdminLogin";
import Register from "./components/auth/Register";
import UserContext from "./context/UserContext";
import BasketContext from "./context/BasketContext";
import "./style.css";
import { Products } from "./components/pages/Products";
import { Shop } from "./components/pages/Shop/Shop";
import { ProductPage } from "./components/pages/ProductPage";
import { Dietary } from "./components/pages/Dietary/Dietary";
import AdminSummary from "./components/pages/AdminSummary";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Three } from "./components/Three";
import { CheckoutPage } from "./components/pages/Checkout/CheckoutPage";
import { CustomerServices } from "./components/pages/StaticPages/CustomerServices";
import { AllergyInformation } from "./components/pages/StaticPages/AllergyInformation";
import { FrequentlyAskedQuestions } from "./components/pages/StaticPages/FrequentlyAskedQuestions";
import { DeliveryInformation } from "./components/pages/StaticPages/DeliveryInformation";
import { ReturnsPolicy } from "./components/pages/StaticPages/ReturnsPolicy";
import { AboutUs } from "./components/pages/StaticPages/AboutUs";
import { PrivacyPolicy } from "./components/pages/StaticPages/PrivacyPolicy";
import { CheckoutPage2 } from "./components/pages/Checkout/CheckoutPage2";
import { PickAndMix } from "./components/pages/PickAndMix/PickAndMix";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  const [shoppingCart, setShoppingCart] = useState([]);

  const [location, setLocation] = useState(undefined);

  const [readyForCheckout, setReadyForCheckout] = useState(false);

  const [count, setCount] = useState(0);

  const [productCost, setProductCost] = useState(0);

  const incrementCounter = () => setCount((counter) => counter + 1);
  const decrementCounter = () => setCount((counter) => counter - 1);

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      let basket = localStorage.getItem("basket");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      if (basket === null) {
        localStorage.setItem("basket", "");
        basket = "";
      }

      if (basket !== "") {
        setShoppingCart(JSON.parse(basket));
      }
      const tokenRes = await Axios.post(
        `${process.env.REACT_APP_URL}/users/tokenIsValid`,
        null,
        {
          headers: { "x-auth-token": token },
        }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get(`${process.env.REACT_APP_URL}/users/`, {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  useEffect(() => {
    let cost = 0;
    shoppingCart.map((item) => (cost += item.amount * item.price));

    setProductCost(cost);
  }, [shoppingCart]);

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <BasketContext.Provider
            value={{
              shoppingCart,
              setShoppingCart,
              location,
              setLocation,
              count,
              setCount,
              incrementCounter,
              decrementCounter,
              readyForCheckout,
              setReadyForCheckout,
              productCost,
              setProductCost,
            }}
          >
            <Header />
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/adminLogin" component={AdminLogin} />
                <Route path="/adminSummary" component={AdminSummary} />
                <Route path="/register" component={Register} />
                <Route exact path="/products" component={Products} />
                <Route path="/products/:id" component={ProductPage} />
                <Route path="/shop" component={Shop} />
                <Route path="/pick-and-mix" component={PickAndMix} />
                <Route path="/dietary" component={Dietary} />
                <Route path="/three" component={Three} />
                <Route path="/checkout" component={CheckoutPage} />
                {/* static pages */}
                <Route path="/customer-services" component={CustomerServices} />
                <Route
                  path="/allergy-information"
                  component={AllergyInformation}
                />
                <Route
                  path="/frequently-asked-questions"
                  component={FrequentlyAskedQuestions}
                />
                <Route
                  path="/delivery-information"
                  component={DeliveryInformation}
                />
                <Route path="/returns-policy" component={ReturnsPolicy} />
                <Route path="/about-us" component={AboutUs} />
                <Route path="/privacy-policy" component={PrivacyPolicy} />
              </Switch>
            </div>
            <Footer />
          </BasketContext.Provider>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
