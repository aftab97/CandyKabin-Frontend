import React, { useState, useEffect, useRef, useContext } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
  Link,
} from "react-router-dom";
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
// import { Navbar } from "./components/layout/Navbar";
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
import { index } from "./components/pages/Admin";
import { MobileNav } from "./components/layout/MobileNav";
import { NewIn } from "./components/pages/NewIn/NewIn";
import { GiftsAndHampers } from "./components/pages/GiftsAndHampers/GiftsAndHampers";
import { Search } from "./components/pages/Search/Search";
import { Basket } from "./components/pages/Basket/Basket";

import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// new nav imports
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as BasketIcon } from "./icons/basket.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as BoltIcon } from "./icons/bolt.svg";
import { ReactComponent as LoginIcon } from "./icons/login.svg";
import { ReactComponent as LogoutIcon } from "./icons/logout.svg";
import { CSSTransition } from "react-transition-group";
import Logo from "./img/logo-pink.png";
import MobileLogo from "./img/logo-initials.png";
import WorldEmoji from "./img/worldwide-emoji.png";

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
    email: undefined,
  });

  const [open, setOpen] = useState(false);

  const [shoppingCart, setShoppingCart] = useState([]);

  const [location, setLocation] = useState(undefined);
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

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
        console.log(userRes);
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

    setTotalCost(cost + deliveryCost);

    // handle change in total cost
  }, [shoppingCart]);

  useEffect(() => {
    console.log("aftab");

    let cost = 0;
    shoppingCart.map((item) => (cost += item.amount * item.price));

    setProductCost(cost);

    console.log(deliveryCost);

    setTotalCost(cost + deliveryCost);

    // handle change in total cost
  }, [location]);

  // alert configirations
  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: "10px",
    // you can also just use 'scale'
    transition: transitions.SCALE,
    containerStlye: { backgroundColor: "red" },
  };

  const mouseLeaveHandle = (e) => {
    document.querySelector("#shop-links").style.display = "none";
    document.querySelector("#new-in-links").style.display = "none";
    document.querySelector("#gifts-and-hampers-links").style.display = "none";
    document.querySelector("#more-links").style.display = "none";
    // document.querySelector("#traditional-links").style.display = "none";
    // document.querySelector("#dietary-links").style.display = "none";
  };

  const handleMenuClose = () => {
    setOpen(false);
  };

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
              deliveryCost,
              setDeliveryCost,
              totalCost,
              setTotalCost,
              open,
              setOpen,
            }}
          >
            <AlertProvider template={AlertTemplate} {...options}>
              <Basket />
              {/* <Header />
              <Navbar /> */}

              <Navbar>
                {userData.user ? (
                  <NavItemLogout
                    icon={<LogoutIcon onClick={handleMenuClose} />}
                  />
                ) : (
                  <NavItemLogin
                    icon={<LoginIcon onClick={handleMenuClose} />}
                  />
                )}
                <NavItemBasket
                  icon={<BasketIcon onClick={handleMenuClose} />}
                />
                <NavText text={"MENU"} icon={<CaretIcon />}>
                  <DropdownMenu></DropdownMenu>
                </NavText>
              </Navbar>

              <MobileNav />
              <div
                className="container"
                onClick={handleMenuClose}
                // onMouseOver={mouseLeaveHandle}
              >
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/login" component={Login} />
                  {/* <Route path="/adminLogin" component={AdminLogin} />
                <Route path="/adminSummary" component={AdminSummary} /> */}
                  <Route path="/admin" component={index} />
                  <Route path="/register" component={Register} />
                  <Route exact path="/products" component={Products} />
                  <Route path="/products/:id" component={ProductPage} />
                  <Route path="/search/:id" component={Search} />
                  <Route path="/shop" component={Shop} />
                  <Route path="/new-in" component={NewIn} />
                  <Route
                    path="/gifts-and-hampers"
                    component={GiftsAndHampers}
                  />
                  <Route path="/dietary" component={Dietary} />
                  <Route path="/three" component={Three} />
                  <Route path="/checkout" component={CheckoutPage} />
                  <Route path="/checkout2" component={CheckoutPage2} />
                  {/* static pages */}
                  <Route
                    path="/customer-services"
                    component={CustomerServices}
                  />
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
            </AlertProvider>
          </BasketContext.Provider>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

function Navbar(props) {
  const [mobile, setMobile] = useState(false);

  const { open, setOpen } = useContext(BasketContext);

  //check if mobile
  useEffect(() => {
    if (window.innerWidth <= 800) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  const history = useHistory();

  const redirectToHomepage = () => {
    history.push("/");
    setOpen(false);
  };
  return (
    <nav className="navbar">
      <div className="new-logo" onClick={redirectToHomepage}>
        {mobile ? <img src={MobileLogo} /> : <img src={Logo} />}
      </div>
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

function NavItemLogout(props) {
  const { shoppingCart, setShoppingCart, productCost } = useContext(
    BasketContext
  );
  const { userData, setUserData } = useContext(UserContext);

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

  return (
    <li className="nav-item" onClick={logout}>
      <a className="icon-button">{props.icon}</a>
    </li>
  );
}
function NavItemLogin(props) {
  const history = useHistory();
  const login = () => history.push("/login");

  return (
    <li className="nav-item" onClick={login}>
      <a className="icon-button">{props.icon}</a>
    </li>
  );
}

function NavItemBasket(props) {
  const handleSlideOut = () => {
    let newBasketContainer = document.querySelector(".new-basket-container");
    newBasketContainer.style.display = "flex";
  };

  return (
    <li className="nav-item">
      <a className="icon-button" onClick={handleSlideOut}>
        {props.icon}
      </a>
    </li>
  );
}

function NavText(props) {
  // const [open, setOpen] = useState(false);

  const { open, setOpen } = useContext(BasketContext);

  return (
    <li className="nav-item-text">
      <a className="icon-button-text" onClick={() => setOpen(!open)}>
        <h2>{props.text}</h2>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(170);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height + 20);
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  const { open, setOpen } = useContext(BasketContext);

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={"🏠"}>
            <Link
              to={"/"}
              onClick={() => {
                setOpen(!open);
              }}
            >
              HOMEPAGE
            </Link>
          </DropdownItem>
          <DropdownItem
            leftIcon={"🍬"}
            rightIcon={<ChevronIcon />}
            goToMenu="shop"
          >
            SHOP
          </DropdownItem>
          <DropdownItem leftIcon={"🎁"}>
            <Link
              to={"/gifts-and-hampers/products"}
              onClick={() => {
                setOpen(!open);
              }}
            >
              GIFTS & HAMPERS
            </Link>
          </DropdownItem>
          <DropdownItem leftIcon={"🔥"}>
            <Link
              to={"/new-in/products"}
              onClick={() => {
                setOpen(!open);
              }}
            >
              NEW IN
            </Link>
          </DropdownItem>
          <DropdownItem
            leftIcon={"❓"}
            rightIcon={<ChevronIcon />}
            goToMenu="questions"
          >
            QUESTIONS
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "shop"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>SHOP</h2>
          </DropdownItem>
          <DropdownItem leftIcon={"🌎"}>
            <Link to="/shop/international" onClick={() => setOpen(!open)}>
              International
            </Link>
          </DropdownItem>

          <DropdownItem leftIcon={"🍭"}>
            <Link to="/shop/sweets-and-candy" onClick={() => setOpen(!open)}>
              Sweets & Candy
            </Link>
          </DropdownItem>
          <DropdownItem leftIcon={"🍡"}>
            <Link to="/shop/pick-and-mix" onClick={() => setOpen(!open)}>
              Pick & Mix
            </Link>
          </DropdownItem>

          <DropdownItem leftIcon={"🍩"}>
            <Link to="/shop/traditional" onClick={() => setOpen(!open)}>
              Traditional
            </Link>
          </DropdownItem>
          <DropdownItem leftIcon={"💸"}>
            <Link to="/shop/clearance" onClick={() => setOpen(!open)}>
              Clearance
            </Link>
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "questions"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>QUESTIONS</h2>
          </DropdownItem>
          <DropdownItem leftIcon={"🌎"}>
            <Link to="/about-us" onClick={() => setOpen(!open)}>
              ABOUT US
            </Link>
          </DropdownItem>

          <DropdownItem>
            <Link
              to="/frequently-asked-questions"
              onClick={() => setOpen(!open)}
            >
              FREQUENTLY ASKED QUESTIONS
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/customer-services" onClick={() => setOpen(!open)}>
              CUSTOMER SERVICES
            </Link>
          </DropdownItem>

          <DropdownItem>
            <Link to="/allergy-information" onClick={() => setOpen(!open)}>
              ALLERGY INFORMATION
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/privacy-policy" onClick={() => setOpen(!open)}>
              PRIVACY POLICY
            </Link>
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "animals"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
