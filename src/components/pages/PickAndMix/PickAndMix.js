import React, { useEffect } from "react";
import { SubCategoryPage } from "../SubCategoryPage/SubCategoryPage";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

export const PickAndMix = ({ match }) => {
  useEffect(() => {
    console.log(match);
  }, []);
  return (
    <div className="shop">
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

      <Route
        path="/pick-and-mix/lollipops"
        // exact
        // component={ChocolateBars}
        exact
        render={() => <SubCategoryPage subCategory="Lollipops" />}
      />
      <Route
        path="/pick-and-mix/bubblegum"
        exact
        render={() => <SubCategoryPage subCategory="Bubblegum" />}
      />
    </div>
  );
};

// TODO add other sub categories for shop
