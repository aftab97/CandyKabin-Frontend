import React, { useEffect } from "react";
import { SubCategoryPage } from "./SubCategoryPage/SubCategoryPage";
import { Candy } from "./Candy/Candy";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

export const Shop = ({ match }) => {
  useEffect(() => {
    console.log(match);
  }, []);
  return (
    <div className="shop">
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

      <Route
        path="/shop/chocolatebars"
        // exact
        // component={ChocolateBars}
        exact
        render={() => <SubCategoryPage subCategory="Chocolate Bars" />}
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
