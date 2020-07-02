import React, { useEffect, useState } from "react";
import { SubCategoryPage } from "../SubCategoryPage/SubCategoryPage";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

export const Shop = ({ match }) => {
  const [dietary, setDietary] = useState("NONE");

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
          <li className="chocolate-bars-link">
            <Link to={`${match.url}/chocolatebars`}>Chocolate Bars</Link>
          </li>
          <li className="candy-link">
            <Link to={`${match.url}/candy`}>Candy</Link>
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
      </div>

      <Route
        path="/shop/chocolatebars"
        // exact
        // component={ChocolateBars}
        exact
        render={() => (
          <SubCategoryPage subCategory="Chocolate Bars" dietary={dietary} />
        )}
      />
      <Route
        path="/shop/candy"
        exact
        render={() => <SubCategoryPage subCategory="Candy" />}
      />
    </div>
  );
};

// TODO add other sub categories for shop
