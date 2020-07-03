import React, { useEffect, useState } from "react";
import { SubCategoryPage } from "../SubCategoryPage/SubCategoryPage";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

export const PickAndMix = ({ match }) => {
  const [dietary, setDietary] = useState("NONE");
  const [sortByDate, setSortByDate] = useState(-1);
  const handleRadioButton = (e) => {
    setDietary(e.target.value);
  };
  const handleRadioButton2 = (e) => {
    setSortByDate(parseInt(e.target.value));
  };

  useEffect(() => {
    console.log(match);
  }, []);
  return (
    <div className="shop">
      <div>
        <ul className="shop-links">
          <li className="lollipops-link">
            <Link to={`${match.url}/lollipops`}>LOLLIPOPS</Link>
          </li>
          <li className="bubblegum-link">
            <Link to={`${match.url}/bubblegum`}>BUBBLEGUM</Link>
          </li>
          <li>EXAMPLE</li>
          <li>EXAMPLE</li>
          <li>EXAMPLE</li>
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
          <h4>SORT BY DATE: </h4>
          <form
            className="checkout-delivery-options-form"
            onChange={handleRadioButton2}
          >
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
        path="/pick-and-mix/lollipops"
        // exact
        // component={ChocolateBars}
        exact
        render={() => (
          <SubCategoryPage
            subCategory="Lollipops"
            dietary={dietary}
            sortByDate={sortByDate}
          />
        )}
      />
      <Route
        path="/pick-and-mix/bubblegum"
        exact
        render={() => (
          <SubCategoryPage
            subCategory="Bubblegum"
            dietary={dietary}
            sortByDate={sortByDate}
          />
        )}
      />
    </div>
  );
};

// TODO add other sub categories for shop
