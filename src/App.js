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
import Logo from "./img/logo-pink.PNG";
import MobileLogo from "./img/logo-mobile.PNG";
import WorldEmoji from "./img/worldwide-emoji.png";
import { TextField } from "@material-ui/core";

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

  // const history = useHistory();

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
                {/* <form className="searchbar" onSubmit={handleSearchChange}>
                  <TextField
                    id="outlined-basic"
                    label="Search product.."
                    variant="outlined"
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                </form> */}

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
    <>
      <nav className="navbar">
        <div className="new-logo" onClick={redirectToHomepage}>
          {mobile ? <img src={MobileLogo} /> : <img src={Logo} />}
        </div>
        <div className="navbar-icon">
          <a target="_blank" href="https://www.instagram.com/candykabin/">
            <svg
              className="instagram-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
        <div className="navbar-icon">
          <a target="_blank" href="https://www.facebook.com/candykabin1">
            <svg
              className="facebook-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
            </svg>
          </a>
        </div>
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    </>
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
  const history = useHistory();

  const [search, setSearch] = useState("");

  const handleSearchChange = () => {
    if (search.length > 0 && search !== " ") {
      history.push(`/search/${search}`);
      setSearch("");
    }
  };

  return (
    <>
      <form className="searchbar" onSubmit={handleSearchChange}>
        <TextField
          id="outlined-basic"
          label="Search product.."
          variant="outlined"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
      <li className="nav-item" onClick={logout}>
        <a className="icon-button">{props.icon}</a>
      </li>
    </>
  );
}
function NavItemLogin(props) {
  const history = useHistory();
  const login = () => history.push("/login");

  const [search, setSearch] = useState("");

  const handleSearchChange = () => {
    if (search.length > 0 && search !== " ") {
      history.push(`/search/${search}`);
      setSearch("");
    }
  };

  return (
    <>
      <form className="searchbar" onSubmit={handleSearchChange}>
        <TextField
          id="outlined-basic"
          label="Search product.."
          variant="outlined"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
      <li className="nav-item" onClick={login}>
        <a className="icon-button">{props.icon}</a>
      </li>
    </>
  );
}

function NavItemBasket(props) {
  const { shoppingCart } = useContext(BasketContext);

  const handleSlideOut = () => {
    let newBasketContainer = document.querySelector(".new-basket-container");
    newBasketContainer.style.display = "flex";
  };

  return (
    <li className="nav-item">
      <a className="icon-button" onClick={handleSlideOut}>
        {props.icon}
        <h5 className="basket-amount-nav">{shoppingCart.length}</h5>
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
      <>
        <a
          className="menu-item"
          onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
        >
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
      </>
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
          <form
            className="searchbar-mobile"
            // onSubmit={handleSearchChange}
          >
            <TextField
              id="outlined-basic"
              label="Search product.."
              variant="outlined"
              onChange={(e) => {
                // setSearch(e.target.value);
              }}
            />
          </form>
          <br />
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
    </div>
  );
}
