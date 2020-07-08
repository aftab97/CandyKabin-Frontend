import React, { useEffect, useState } from "react";
import { SubCategoryPage } from "../SubCategoryPage/SubCategoryPage";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

export const Shop = ({ match }) => {
  const [dietary, setDietary] = useState("NONE");
  const [sortByDate, setSortByDate] = useState(-1);
  const [brand, setBrand] = useState("NONE");
  const [subSubCategory, setSubSubCategory] = useState("Candy");

  const handleRadioButton4 = (e) => {
    setSubSubCategory(e.target.value);
  };
  const handleRadioButton3 = (e) => {
    setBrand(e.target.value);
  };

  const handleRadioButton2 = (e) => {
    setSortByDate(parseInt(e.target.value));
  };

  useEffect(() => {
    console.log(match);
  }, []);

  const handleRadioButton = (e) => {
    setDietary(e.target.value);
  };
  return (
    <div className="shop">
      <div>
        <ul className="shop-links">
          <li className="american-link">
            <Link to={`${match.url}/international`}>International</Link>
          </li>
          <li className="candy-link">
            <Link to={`${match.url}/sweets-and-candy`}>Sweets & Candy</Link>
          </li>
          <li className="candy-link">
            <Link to={`${match.url}/pick-and-mix`}>Pick & Mix</Link>
          </li>
          <li className="candy-link">
            <Link to={`${match.url}/traditional`}>Traditional</Link>
          </li>
          <li className="candy-link">
            <Link to={`${match.url}/clearance`}>Clearance</Link>
          </li>
        </ul>

        <ul className="sub-sub-category-links sidepanel-option">
          <h4>Category:</h4>
          <form
            className="checkout-delivery-options-form"
            onChange={handleRadioButton4}
          >
            <label>
              <input
                type="radio"
                value="Candy"
                name="radio-button"
                defaultChecked
                id="default-checked-option"
              />
              CANDY
            </label>
            <label>
              <input type="radio" value="Chocolate Bars" name="radio-button" />
              CHOCOLATE BARS
            </label>
            <label>
              <input type="radio" value="Soda / Drinks" name="radio-button" />
              SODA / DRINKS
            </label>
            <label>
              <input type="radio" value="Crisps" name="radio-button" />
              CRISPS
            </label>
            <label>
              <input type="radio" value="Baked Goods" name="radio-button" />
              BAKED GOODS
            </label>
            <label>
              <input type="radio" value="Cereals" name="radio-button" />
              CEREALS
            </label>
            <label>
              <input type="radio" value="Gum" name="radio-button" />
              GUM
            </label>
          </form>
        </ul>

        <ul className="brand-list">
          <form
            className="checkout-delivery-options-form sidepanel-option fixed-height"
            onChange={handleRadioButton3}
          >
            <h4>SORT BY Brand: </h4>

            <label>
              <input
                type="radio"
                value="NONE"
                name="radio-button"
                defaultChecked
                id="default-checked-option3"
              />
              NONE
            </label>
            <label>
              <input type="radio" value="Jolly Rancher" name="radio-button" />
              Jolly Rancher
            </label>
            <label>
              <input type="radio" value="Calypso" name="radio-button" />
              Calypso
            </label>
            <label>
              <input type="radio" value="M&Ms" name="radio-button" />
              M&M'S
            </label>
            <label>
              <input type="radio" value="Sour Patch" name="radio-button" />
              Sour Patch
            </label>
            <label>
              <input type="radio" value="Fanta" name="radio-button" />
              Fanta
            </label>
            <label>
              <input type="radio" value="Nestle" name="radio-button" />
              Nestle
            </label>
            <label>
              <input type="radio" value="Hersheys" name="radio-button" />
              Hershey's
            </label>
            <label>
              <input type="radio" value="Warheads" name="radio-button" />
              Warheads
            </label>
            <label>
              <input type="radio" value="Laffy Taffy" name="radio-button" />
              Laffy Taffy
            </label>
            <label>
              <input type="radio" value="Dr Pepper" name="radio-button" />
              Dr Pepper
            </label>
            <label>
              <input type="radio" value="C&C" name="radio-button" />
              C&C
            </label>
            <label>
              <input type="radio" value="SweedishFish" name="radio-button" />
              SweedishFish
            </label>
            <label>
              <input type="radio" value="Gatorade" name="radio-button" />
              Gatorade
            </label>
            <label>
              <input type="radio" value="Cheetos" name="radio-button" />
              Cheetos
            </label>
            <label>
              <input type="radio" value="Herrs" name="radio-button" />
              Herrs
            </label>
            <label>
              <input type="radio" value="Lifesavers" name="radio-button" />
              Lifesavers
            </label>
            <label>
              <input type="radio" value="Mike & Ike" name="radio-button" />
              Mike & Ike
            </label>
            <label>
              <input type="radio" value="Hostess" name="radio-button" />
              Hostess
            </label>
            <label>
              <input type="radio" value="Mrs Freshely" name="radio-button" />
              Mrs Freshley
            </label>
            <label>
              <input type="radio" value="Ice Breakers" name="radio-button" />
              Ice Breakers
            </label>
          </form>
        </ul>

        <ul className="dietary-links">
          <h4>DIETARY:</h4>
          <form
            className="checkout-delivery-options-form"
            onChange={handleRadioButton}
          >
            <label>
              <input
                type="radio"
                value="NONE"
                name="radio-button"
                defaultChecked
                id="default-checked-option"
              />
              NONE
            </label>
            <label>
              <input type="radio" value="HALAL" name="radio-button" />
              HALAL
            </label>
            <label>
              <input type="radio" value="VEGETARIAN" name="radio-button" />
              VEGETARIAN
            </label>
            <label>
              <input type="radio" value="VEGAN" name="radio-button" />
              VEGAN
            </label>
          </form>
        </ul>
        <ul>
          <form
            className="checkout-delivery-options-form sidepanel-option"
            onChange={handleRadioButton2}
          >
            <h4>SORT BY DATE: </h4>
            <label>
              <input
                type="radio"
                value="-1"
                name="radio-button"
                defaultChecked
                id="default-checked-option2"
              />
              NEWEST
            </label>
            <label>
              <input type="radio" value="1" name="radio-button" />
              OLDEST
            </label>
          </form>
        </ul>
      </div>

      <Route
        path="/shop/international"
        // exact
        // component={ChocolateBars}
        exact
        render={() => (
          <SubCategoryPage
            subCategory="International"
            subSubCategory={subSubCategory}
            brand={brand}
            dietary={dietary}
            sortByDate={sortByDate}
          />
        )}
      />
      <Route
        path="/shop/sweets-and-candy"
        exact
        render={() => (
          <SubCategoryPage
            subCategory={"Sweets And Candy"}
            subSubCategory={subSubCategory}
            brand={false}
            dietary={dietary}
            sortByDate={sortByDate}
          />
        )}
      />
    </div>
  );
};

// TODO add other sub categories for shop
