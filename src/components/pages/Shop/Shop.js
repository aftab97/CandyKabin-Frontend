import React, { useEffect, useState } from "react";
import { SubCategoryPage } from "../SubCategoryPage/SubCategoryPage";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Collapsible from "react-collapsible";

export const Shop = ({ match }) => {
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
        <ul className="sub-sub-category-links sidepanel-option international-list">
          <h4>CATEGORY:</h4>
          <form
            className="checkout-delivery-options-form"
            onChange={handleRadioButton4}
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
              <input type="radio" value="Candy" name="radio-button" />
              CANDY
            </label>
            <label>
              <input type="radio" value="Chocolate" name="radio-button" />
              CHOCOLATE
            </label>
            <label>
              <input type="radio" value="Soda And Drinks" name="radio-button" />
              SODA AND DRINKS
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

        <ul className="sub-sub-category-links sidepanel-option sweets-and-candy-list">
          <h4>Category:</h4>
          <form
            className="checkout-delivery-options-form"
            onChange={handleRadioButton4}
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
              <input type="radio" value="Bubble Gum" name="radio-button" />
              BUBBLE GUM
            </label>
            <label>
              <input type="radio" value="Chocolate" name="radio-button" />
              CHOCOLATE
            </label>
            <label>
              <input type="radio" value="Fun Candy" name="radio-button" />
              FUN CANDY
            </label>
            <label>
              <input type="radio" value="Hard Candy" name="radio-button" />
              HARD CANDY
            </label>
            <label>
              <input type="radio" value="Soft Candy" name="radio-button" />
              SOFT CANDY
            </label>
            <label>
              <input type="radio" value="Jellybeans" name="radio-button" />
              JELLYBEANS
            </label>
            <label>
              <input type="radio" value="Licourice" name="radio-button" />
              LIQUORICE
            </label>
            <label>
              <input type="radio" value="Lollipops" name="radio-button" />
              LOLLIPOPS
            </label>
            <label>
              <input type="radio" value="Novelty Candy" name="radio-button" />
              NOVELTY CANDY
            </label>
            <label>
              <input type="radio" value="Powder Sherbet" name="radio-button" />
              POWDER SHERBET
            </label>
            <label>
              <input type="radio" value="Toffee" name="radio-button" />
              TOFFEE
            </label>
          </form>
        </ul>

        <ul className="sub-sub-category-links sidepanel-option pick-and-mix-list">
          <h4>Category:</h4>
          <form
            className="checkout-delivery-options-form"
            onChange={handleRadioButton4}
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
              <input type="radio" value="Hard Candy" name="radio-button" />
              HARD CANDY
            </label>
            <label>
              <input type="radio" value="Soft Candy" name="radio-button" />
              SOFT CANDY
            </label>
            <label>
              <input type="radio" value="Chocolate" name="radio-button" />
              CHOCOLATE
            </label>
            <label>
              <input type="radio" value="Sour Candy" name="radio-button" />
              SOUR CANDY
            </label>
            <label>
              <input type="radio" value="Chewy Candy" name="radio-button" />
              CHEWY CANDY
            </label>
          </form>
        </ul>
        <ul className="sub-sub-category-links sidepanel-option traditional-list">
          <h4>CATEGORY:</h4>
          <form
            className="checkout-delivery-options-form"
            onChange={handleRadioButton4}
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
              <input
                type="radio"
                value="Hard Boiled Candy"
                name="radio-button"
              />
              HARD BOILED CANDY
            </label>
            <label>
              <input type="radio" value="Soft Candy" name="radio-button" />
              SOFT CANDY
            </label>
            <label>
              <input type="radio" value="Licourice" name="radio-button" />
              LIQUORICE
            </label>
            <label>
              <input
                type="radio"
                value="Powder And Sherbets"
                name="radio-button"
              />
              POWDER AND SHERBETS
            </label>
            <label>
              <input type="radio" value="Toffee" name="radio-button" />
              TOFFEE
            </label>
            <label>
              <input type="radio" value="Chocolate" name="radio-button" />
              CHOCOLATE
            </label>
          </form>
        </ul>

        <ul className="brand-list">
          <form
            className="checkout-delivery-options-form sidepanel-option fixed-height"
            onChange={handleRadioButton3}
          >
            <h4>SORT BY BRAND: </h4>

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
              JOLLY RANCHER
            </label>
            <label>
              <input type="radio" value="Calypso" name="radio-button" />
              CALYPSO
            </label>
            <label>
              <input type="radio" value="M-And-Ms" name="radio-button" />
              M&M'S
            </label>
            <label>
              <input type="radio" value="Sour Patch" name="radio-button" />
              SOUR PATCH
            </label>
            <label>
              <input type="radio" value="Fanta" name="radio-button" />
              FANTA
            </label>
            <label>
              <input type="radio" value="Nestle" name="radio-button" />
              NESTLE
            </label>
            <label>
              <input type="radio" value="Hersheys" name="radio-button" />
              HERSHEY'S
            </label>
            <label>
              <input type="radio" value="Twix" name="radio-button" />
              TWIX
            </label>
            <label>
              <input type="radio" value="Kool-Aid" name="radio-button" />
              KOOL-AID
            </label>
            <label>
              <input type="radio" value="Warheads" name="radio-button" />
              WARHEADS
            </label>
            <label>
              <input type="radio" value="Reeses" name="radio-button" />
              REESE's
            </label>
            <label>
              <input type="radio" value="Laffy Taffy" name="radio-button" />
              LAFFY TAFFY
            </label>
            <label>
              <input type="radio" value="Dr Pepper" name="radio-button" />
              DR PEPPER
            </label>
            <label>
              <input type="radio" value="CAndC" name="radio-button" />
              C&C
            </label>
            <label>
              <input type="radio" value="SweedishFish" name="radio-button" />
              SWEDISH FISH
            </label>
            <label>
              <input type="radio" value="Gatorade" name="radio-button" />
              GATORADE
            </label>
            <label>
              <input type="radio" value="Cheetos" name="radio-button" />
              CHEETOS
            </label>
            <label>
              <input type="radio" value="Herrs" name="radio-button" />
              HERRS
            </label>
            <label>
              <input type="radio" value="Lifesavers" name="radio-button" />
              LIFESAVERS
            </label>
            <label>
              <input type="radio" value="Mike And Ike" name="radio-button" />
              MIKE & IKE
            </label>
            <label>
              <input type="radio" value="Hostess" name="radio-button" />
              HOSTESS
            </label>
            <label>
              <input type="radio" value="Mrs Freshely" name="radio-button" />
              MRS FRESHLEYS
            </label>
            <label>
              <input type="radio" value="Ice Breakers" name="radio-button" />
              ICE BREAKERS
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
              <input type="radio" value="KOSHER" name="radio-button" />
              KOSHER
            </label>
            <label>
              <input type="radio" value="VEGETARIAN" name="radio-button" />
              VEGETARIAN
            </label>
            <label>
              <input type="radio" value="VEGAN" name="radio-button" />
              VEGAN
            </label>
            <label>
              <input type="radio" value="HALAL" name="radio-button" />
              HALAL
            </label>

            <label>
              <input type="radio" value="SUGAR FREE" name="radio-button" />
              SUGAR FREE
            </label>
            <label>
              <input type="radio" value="FAT FREE" name="radio-button" />
              FAT FREE
            </label>
            <label>
              <input type="radio" value="GLUTEN FREE" name="radio-button" />
              GLUTEN FREE
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
      <Collapsible trigger="FILTER" id="products-collapsible">
        {/* <br />
        <br />
        <a href="/shop/international">INTERNATIONAL</a>
        <br />
        <br />
        <a href="/shop/sweets-and-candy">SWEETS AND CANDY</a>
        <br />
        <br /> */}
        <Collapsible trigger="CATEGORY" className="international-mobile">
          <form
            className="checkout-delivery-options-form"
            onChange={handleRadioButton4}
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
              <input type="radio" value="Candy" name="radio-button" />
              CANDY
            </label>
            <label>
              <input type="radio" value="Chocolate" name="radio-button" />
              CHOCOLATE
            </label>
            <label>
              <input type="radio" value="Soda And Drinks" name="radio-button" />
              SODA AND DRINKS
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
        </Collapsible>
        <Collapsible trigger="CATEGORY" className="sweets-and-candy-mobile">
          <form
            className="checkout-delivery-options-form"
            onChange={handleRadioButton4}
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
              <input type="radio" value="Bubble Gum" name="radio-button" />
              BUBBLE GUM
            </label>
            <label>
              <input type="radio" value="Chocolate" name="radio-button" />
              CHOCOLATE
            </label>
            <label>
              <input type="radio" value="Fun Candy" name="radio-button" />
              FUN CANDY
            </label>
            <label>
              <input type="radio" value="Hard Candy" name="radio-button" />
              HARD CANDY
            </label>
            <label>
              <input type="radio" value="Soft Candy" name="radio-button" />
              SOFT CANDY
            </label>
            <label>
              <input type="radio" value="Jellybeans" name="radio-button" />
              JELLYBEANS
            </label>
            <label>
              <input type="radio" value="Licourice" name="radio-button" />
              LIQUORICE
            </label>
            <label>
              <input type="radio" value="Lollipops" name="radio-button" />
              LOLLIPOPS
            </label>
            <label>
              <input type="radio" value="Novelty Candy" name="radio-button" />
              NOVELTY CANDY
            </label>
            <label>
              <input type="radio" value="Powder Sherbet" name="radio-button" />
              POWDER SHERBET
            </label>
            <label>
              <input type="radio" value="Toffee" name="radio-button" />
              TOFFEE
            </label>
          </form>
        </Collapsible>
        <Collapsible trigger="CATEGORY" className="pick-and-mix-mobile">
          <form
            className="checkout-delivery-options-form"
            onChange={handleRadioButton4}
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
              <input type="radio" value="Hard Candy" name="radio-button" />
              HARD CANDY
            </label>
            <label>
              <input type="radio" value="Soft Candy" name="radio-button" />
              SOFT CANDY
            </label>
            <label>
              <input type="radio" value="Chocolate" name="radio-button" />
              CHOCOLATE
            </label>
            <label>
              <input type="radio" value="Sour Candy" name="radio-button" />
              SOUR CANDY
            </label>
            <label>
              <input type="radio" value="Chewy Candy" name="radio-button" />
              CHEWY CANDY
            </label>
          </form>
        </Collapsible>
        <Collapsible trigger="CATEGORY" className="traditional-mobile">
          <form
            className="checkout-delivery-options-form"
            onChange={handleRadioButton4}
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
              <input
                type="radio"
                value="Hard Boiled Candy"
                name="radio-button"
              />
              HARD BOILED CANDY
            </label>
            <label>
              <input type="radio" value="Soft Candy" name="radio-button" />
              SOFT CANDY
            </label>
            <label>
              <input type="radio" value="Licourice" name="radio-button" />
              LIQUORICE
            </label>
            <label>
              <input
                type="radio"
                value="Powder And Sherbets"
                name="radio-button"
              />
              POWDER AND SHERBETS
            </label>
            <label>
              <input type="radio" value="Toffee" name="radio-button" />
              TOFFEE
            </label>
            <label>
              <input type="radio" value="Chocolate" name="radio-button" />
              CHOCOLATE
            </label>
          </form>
        </Collapsible>
        <Collapsible trigger="SORT BY BRAND: " className="brand-list-mobile">
          <ul className="">
            <form
              className="checkout-delivery-options-form-mobile sidepanel-option-mobile fixed-height-mobile"
              onChange={handleRadioButton3}
            >
              <label>
                <input
                  type="radio"
                  value="-1"
                  name="radio-button"
                  defaultChecked
                  id="default-checked-option3"
                />
                NONE
              </label>
              <label>
                <input type="radio" value="Jolly Rancher" name="radio-button" />
                JOLLY RANCHER
              </label>
              <label>
                <input type="radio" value="Calypso" name="radio-button" />
                CALYPSO
              </label>
              <label>
                <input type="radio" value="M-And-Ms" name="radio-button" />
                M&M'S
              </label>
              <label>
                <input type="radio" value="Sour Patch" name="radio-button" />
                SOUR PATCH
              </label>
              <label>
                <input type="radio" value="Fanta" name="radio-button" />
                FANTA
              </label>
              <label>
                <input type="radio" value="Nestle" name="radio-button" />
                NESTLE
              </label>
              <label>
                <input type="radio" value="Hersheys" name="radio-button" />
                HERSHEY'S
              </label>
              <label>
                <input type="radio" value="Twix" name="radio-button" />
                TWIX
              </label>
              <label>
                <input type="radio" value="Kool-Aid" name="radio-button" />
                KOOL-AID
              </label>
              <label>
                <input type="radio" value="Warheads" name="radio-button" />
                WARHEADS
              </label>
              <label>
                <input type="radio" value="Reeses" name="radio-button" />
                REESE's
              </label>
              <label>
                <input type="radio" value="Laffy Taffy" name="radio-button" />
                LAFFY TAFFY
              </label>
              <label>
                <input type="radio" value="Dr Pepper" name="radio-button" />
                DR PEPPER
              </label>
              <label>
                <input type="radio" value="CAndC" name="radio-button" />
                C&C
              </label>
              <label>
                <input type="radio" value="SweedishFish" name="radio-button" />
                SWEDISH FISH
              </label>
              <label>
                <input type="radio" value="Gatorade" name="radio-button" />
                GATORADE
              </label>
              <label>
                <input type="radio" value="Cheetos" name="radio-button" />
                CHEETOS
              </label>
              <label>
                <input type="radio" value="Herrs" name="radio-button" />
                HERRS
              </label>
              <label>
                <input type="radio" value="Lifesavers" name="radio-button" />
                LIFESAVERS
              </label>
              <label>
                <input type="radio" value="Mike And Ike" name="radio-button" />
                MIKE & IKE
              </label>
              <label>
                <input type="radio" value="Hostess" name="radio-button" />
                HOSTESS
              </label>
              <label>
                <input type="radio" value="Mrs Freshely" name="radio-button" />
                MRS FRESHLEYS
              </label>
              <label>
                <input type="radio" value="Ice Breakers" name="radio-button" />
                ICE BREAKERS
              </label>
            </form>
          </ul>
        </Collapsible>
        <Collapsible trigger="SORT BY DATE: ">
          <ul>
            <form
              className="checkout-delivery-options-form-mobile sidepanel-option-mobile"
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
        </Collapsible>
      </Collapsible>

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
            subCategory="Sweets And Candy"
            subSubCategory={subSubCategory}
            brand="NA"
            dietary={dietary}
            sortByDate={sortByDate}
          />
        )}
      />
      <Route
        path="/shop/pick-and-mix"
        exact
        render={() => (
          <SubCategoryPage
            subCategory="Pick And Mix"
            subSubCategory={subSubCategory}
            brand="NA"
            dietary={dietary}
            sortByDate={sortByDate}
          />
        )}
      />
      <Route
        path="/shop/traditional"
        exact
        render={() => (
          <SubCategoryPage
            subCategory="Traditional"
            subSubCategory={subSubCategory}
            brand="NA"
            dietary={dietary}
            sortByDate={sortByDate}
          />
        )}
      />
      <Route
        path="/shop/clearance"
        exact
        render={() => (
          <SubCategoryPage
            subCategory="Clearance"
            subSubCategory={subSubCategory}
            brand="NA"
            dietary={dietary}
            sortByDate={sortByDate}
          />
        )}
      />
    </div>
  );
};

// TODO add other sub categories for shop
