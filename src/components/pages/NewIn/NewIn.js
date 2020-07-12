import React, { useEffect, useState } from "react";
import { SubCategoryPage } from "../SubCategoryPage/SubCategoryPage";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Collapsible from "react-collapsible";

export const NewIn = ({ match }) => {
  const [dietary, setDietary] = useState("NONE");
  const [sortByDate, setSortByDate] = useState(-1);
  const [brand, setBrand] = useState("NONE");
  const [subSubCategory, setSubSubCategory] = useState("NONE");

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

  const handleFilterCollapse = (e) => {
    let element = document.querySelector(".Collapsible__trigger.is-open");
    element.classList.remove("is-open");
    element.classList.add("is-closed");
    let check = document.querySelector(".Collapsible__contentOuter");
    check.style.height = "0px!important";
  };
  return (
    <div className="shop">
      <div className="shop-links-container">
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
      </div>

      <Collapsible trigger="FILTER" id="products-collapsible">
        <br />
        <br />
        <a href="/shop/international">INTERNATIONAL</a>
        <br />
        <br />
        <a href="/shop/sweets-and-candy">SWEETS AND CANDY</a>
        <br />
        <br />
      </Collapsible>

      <Route
        path="/new-in/products"
        // exact
        // component={ChocolateBars}
        exact
        render={() => (
          <SubCategoryPage
            subCategory="New In"
            dietary={dietary}
            sortByDate={sortByDate}
          />
        )}
      />
    </div>
  );
};

// TODO add other sub categories for shop
