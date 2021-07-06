import React, { useState, useCallback, useContext } from "react";
import UserContext from "../../../../context/UserContext";
import Axios from "axios";
export const AddProducts = () => {
  const [international, setInternational] = useState(false);
  const [sweetsAndCandy, setsweetsAndCandy] = useState(false);
  const [pickAndMix, setpickAndMix] = useState(false);
  const [traditional, settraditional] = useState(false);
  const [clearance, setclearance] = useState(false);
  const [giftsAndHampers, setGiftsAndHampers] = useState(false);
  const [wholeSale, setWholeSale] = useState(false);

  const [category, setCategory] = useState(undefined);
  const [subCategory, setSubCategory] = useState(undefined);
  const [subSubCategory, setSubSubCategory] = useState(undefined);
  const [brand, setBrand] = useState(undefined);
  const [imageURL, setImageURL] = useState(undefined);
  const [productName, setProductName] = useState(undefined);
  const [amountLeft, setAmountLeft] = useState(30);
  const [price, setPrice] = useState(undefined);
  const [weight, setWeight] = useState(undefined);
  const [showOnSite, setShowOnSite] = useState(true);
  const [date, setDate] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [description2, setDescription2] = useState(undefined);
  const [ingredients, setIngredients] = useState(undefined);
  const [subDescription1, setSubDescription1] = useState(undefined);
  const [subDescription2, setSubDescription2] = useState(undefined);
  const [subDescription3, setSubDescription3] = useState(undefined);
  const [subDescription4, setSubDescription4] = useState(undefined);
  const [subDescription5, setSubDescription5] = useState(undefined);
  const [subDescription6, setSubDescription6] = useState(undefined);
  const [subDescription7, setSubDescription7] = useState(undefined);
  const [subDescription8, setSubDescription8] = useState(undefined);
  const [subDescription9, setSubDescription9] = useState(undefined);
  const [subDescription10, setSubDescription10] = useState(undefined);
  const [subDescription11, setSubDescription11] = useState(undefined);
  const [subDescription12, setSubDescription12] = useState(undefined);
  const [subDescription13, setSubDescription13] = useState(undefined);
  const [subDescription14, setSubDescription14] = useState(undefined);
  const [subDescription15, setSubDescription15] = useState(undefined);
  const [dietary, setDietary] = useState([]);
  const [halal, setHalal] = useState(undefined);
  const [vegetarian, setVegetarian] = useState(undefined);
  const [kosher, setKosher] = useState(undefined);
  const [vegan, setVegan] = useState(undefined);
  const [fatFree, setFatFree] = useState(undefined);
  const [sugarFree, setSugarFree] = useState(undefined);
  const [glutenFree, setGlutenFree] = useState(undefined);
  const [newProdcut, setNewProduct] = useState(false);

  const { userData } = useContext(UserContext);

  let dietaryArray = [];

  const handleRadioButton1 = (e) => {
    console.log(e);

    let brands = document.querySelector(".brand-list");

    let category = document.querySelector(".international-list");

    if (e.target.value === "international") {
      setInternational(true);
      setsweetsAndCandy(false);
      setpickAndMix(false);
      settraditional(false);
      setclearance(false);
      setGiftsAndHampers(false);
      setCategory("Shop");
      setSubCategory("International");
      brands.style.display = "block";
      category.style.display = "block";
    } else if (e.target.value === "sweets and candy") {
      setInternational(false);
      setsweetsAndCandy(true);
      setpickAndMix(false);
      settraditional(false);
      setclearance(false);
      setGiftsAndHampers(false);
      setCategory("Shop");
      setSubCategory("Sweets And Candy");
      brands.style.display = "none";
      category.style.display = "block";
    } else if (e.target.value === "pick and mix") {
      setInternational(false);
      setsweetsAndCandy(false);
      setpickAndMix(true);
      settraditional(false);
      setclearance(false);
      setGiftsAndHampers(false);
      setCategory("Shop");
      setSubCategory("Pick And Mix");
      brands.style.display = "none";
      category.style.display = "block";
    } else if (e.target.value === "traditional") {
      setInternational(false);
      setsweetsAndCandy(false);
      setpickAndMix(false);
      settraditional(true);
      setclearance(false);
      setGiftsAndHampers(false);
      setCategory("Shop");
      setSubCategory("Traditional");
      brands.style.display = "none";
      category.style.display = "block";
    } else if (e.target.value === "clearance") {
      setInternational(false);
      setsweetsAndCandy(false);
      setpickAndMix(false);
      settraditional(false);
      setclearance(true);
      setGiftsAndHampers(false);
      setCategory("Shop");
      setSubCategory("Clearance");
      brands.style.display = "none";
      category.style.display = "none";
    } else if (e.target.value === "gifts and hampers") {
      setInternational(false);
      setsweetsAndCandy(false);
      setpickAndMix(false);
      settraditional(false);
      setclearance(false);
      setGiftsAndHampers(true);
      setCategory("Shop");
      setSubCategory("Gifts And Hampers");
      brands.style.display = "none";
      category.style.display = "none";
    } else if (e.target.value === "wholesale") {
      setInternational(false);
      setsweetsAndCandy(false);
      setpickAndMix(false);
      settraditional(false);
      setclearance(false);
      setGiftsAndHampers(false);
      setWholeSale(true);
      setCategory("Shop");
      setSubCategory("Wholesale");
      brands.style.display = "block";
      category.style.display = "block";
    }
  };

  const handleDietary = (e) => {
    const value = e.target.value;

    // setDietary(...dietary, [{ value }]);

    dietaryArray = [...dietaryArray, value];

    handleDietaryBoolean();
  };

  const handleDietaryBoolean = () => {
    console.log(dietaryArray);

    // let array = dietary;

    if (dietaryArray.includes("HALAL")) {
      setHalal(true);
    }

    if (dietaryArray.includes("VEGETARIAN")) {
      setVegetarian(true);
    }

    if (dietaryArray.includes("VEGAN")) {
      setVegan(true);
    }

    if (dietaryArray.includes("FAT FREE")) {
      setFatFree(true);
    }

    if (dietaryArray.includes("SUGAR FREE")) {
      setSugarFree(true);
    }

    if (dietaryArray.includes("KOSHER")) {
      setKosher(true);
    }
    if (dietaryArray.includes("GLUTEN FREE")) {
      setGlutenFree(true);
    }
  };

  const handleSubmit = () => {
    const body = {
      category,
      subCategory,
      subSubCategory,
      brand,
      imageURL,
      productName,
      amountLeft,
      price,
      weight,
      showOnSite,
      date,
      description,
      description2,
      ingredients,
      subDescription1,
      subDescription2,
      subDescription3,
      subDescription4,
      subDescription5,
      subDescription6,
      subDescription7,
      subDescription8,
      subDescription9,
      subDescription10,
      subDescription11,
      subDescription12,
      subDescription13,
      subDescription14,
      subDescription15,
      halal,
      vegetarian,
      kosher,
      vegan,
      fatFree,
      sugarFree,
      glutenFree,
      newIn: newProdcut,
      showOnSearch: true,
    };

    const checkLoggedIn = async () => {
      const tokenRes = await Axios.post(
        `${process.env.REACT_APP_URL}/product/addProduct`,
        body,
        {
          headers: { "x-auth-token": userData.token },
        }
      );
    };

    checkLoggedIn();

    window.location.reload();
  };

  const handleNewProduct = (e) => {
    console.log(e.target.value);
    if (e.target.value == "yes") {
      setNewProduct(true);
    } else {
      setNewProduct(false);
    }
  };

  const internationalLogic = (
    <div>
      <div>
        <label>PRODUCT NAME: </label>
        <textarea
          placeholder="Enter product name here ...."
          name="product-name"
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <label>IMAGE URL: </label>
        <textarea
          placeholder="Enter image url here...."
          name="imageURL"
          onChange={(e) => {
            setImageURL(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <label>Weight(g): </label>
        <textarea
          placeholder="Enterwight in grams here...."
          name="weight"
          onChange={(e) => {
            setWeight(parseInt(e.target.value));
          }}
        ></textarea>
      </div>
      <div>
        <label>Price(£): </label>
        <textarea
          placeholder="Do not include the pound symbol when typing price e.g. 1.50 ...."
          name="price"
          onChange={(e) => {
            let price = e.target.value;
            price = +parseFloat(price).toFixed(2);

            setPrice(price);
            // setPrice(parseFloat(e.target.value).toFixed(2));
          }}
        ></textarea>
      </div>
      <div>
        <label>DESCRIPTION 1:</label>
        <textarea
          placeholder="Enter description here..."
          name="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <label>DESCRIPTION 2:</label>
        <textarea
          placeholder="Leave blank if no description..."
          name="description"
          onChange={(e) => {
            setDescription2(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <label>Sub Description 1:</label>
        <textarea
          placeholder="Leave blank if no Sub Description..."
          name="Sub Description"
          onChange={(e) => {
            setSubDescription1(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <label>Sub Description 2:</label>
        <textarea
          placeholder="Leave blank if no Sub Description..."
          name="description"
          onChange={(e) => {
            setSubDescription2(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <label>Sub Description 3:</label>
        <textarea
          placeholder="Leave blank if no Sub Description..."
          name="Sub Description"
          onChange={(e) => {
            setSubDescription3(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <label>Sub Description 4:</label>
        <textarea
          placeholder="Leave blank if no Sub Description..."
          name="Sub Description"
          onChange={(e) => {
            setSubDescription4(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <label>Sub Description 5:</label>
        <textarea
          placeholder="Leave blank if no Sub Description..."
          name="Sub Description"
          onChange={(e) => {
            setSubDescription5(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <label>Sub Description 6:</label>
        <textarea
          placeholder="Leave blank if no Sub Description..."
          name="Sub Description"
          onChange={(e) => {
            setSubDescription6(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <label>Sub Description 7:</label>
        <textarea
          placeholder="Leave blank if no Sub Description..."
          name="Sub Description"
          onChange={(e) => {
            setSubDescription7(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <label>Sub Description 8:</label>
        <textarea
          placeholder="Leave blank if no Sub Description..."
          name="Sub Description"
          onChange={(e) => {
            setSubDescription8(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <label>Sub Description 9:</label>
        <textarea
          placeholder="Leave blank if no Sub Description..."
          name="Sub Description"
          onChange={(e) => {
            setSubDescription9(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <label>Sub Description 10:</label>
        <textarea
          placeholder="Leave blank if no Sub Description..."
          name="Sub Description"
          onChange={(e) => {
            setSubDescription10(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <label>Sub Description 11:</label>
        <textarea
          placeholder="Leave blank if no Sub Description..."
          name="Sub Description"
          onChange={(e) => {
            setSubDescription11(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <label>Sub Description 12:</label>
        <textarea
          placeholder="Leave blank if no Sub Description..."
          name="Sub Description"
          onChange={(e) => {
            setSubDescription12(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <label>Sub Description 13:</label>
        <textarea
          placeholder="Leave blank if no Sub Description..."
          name="Sub Description"
          onChange={(e) => {
            setSubDescription13(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <label>Sub Description 14:</label>
        <textarea
          placeholder="Leave blank if no Sub Description..."
          name="Sub Description"
          onChange={(e) => {
            setSubDescription14(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <label>Sub Description 15:</label>
        <textarea
          placeholder="Leave blank if no Sub Description..."
          name="Sub Description"
          onChange={(e) => {
            setSubDescription15(e.target.value);
          }}
        ></textarea>
      </div>

      <div>
        <label>Ingredients:</label>
        <textarea
          placeholder="Leave blank if no ingredients..."
          name="ingredients"
          onChange={(e) => {
            if (e.target.value.length > 0) {
              setIngredients(e.target.value);
            } else {
              setIngredients(undefined);
            }
          }}
        ></textarea>
      </div>

      <div>
        <ul className="sub-sub-category-links sidepanel-option international-list fixed-height">
          <h4>Category:</h4>
          <form
            className="checkout-delivery-options-form"
            onChange={(e) => {
              setSubSubCategory(e.target.value);
            }}
          >
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
            <label>
              <input type="radio" value="Bubble Gum" name="radio-button" />
              Bubble Gum
            </label>
            <label>
              <input type="radio" value="Chocolate" name="radio-button" />
              Chocolate
            </label>
            <label>
              <input type="radio" value="Fun Candy" name="radio-button" />
              Fun Candy
            </label>
            <label>
              <input type="radio" value="Hard Candy" name="radio-button" />
              Hard Candy
            </label>
            <label>
              <input type="radio" value="Soft Candy" name="radio-button" />
              Soft Candy
            </label>
            <label>
              <input type="radio" value="Jellybeans" name="radio-button" />
              Jellybeans
            </label>
            <label>
              <input type="radio" value="Liquorice" name="radio-button" />
              Liquorice
            </label>
            <label>
              <input type="radio" value="Lollipops" name="radio-button" />
              Lollipops
            </label>
            <label>
              <input type="radio" value="Novelty Candy" name="radio-button" />
              Novelty Candy
            </label>
            <label>
              <input type="radio" value="Powder Sherbet" name="radio-button" />
              Powder Sherbet
            </label>
            <label>
              <input type="radio" value="Toffee" name="radio-button" />
              Toffee
            </label>
            <label>
              <input type="radio" value="Hard Candy" name="radio-button" />
              Hard Candy
            </label>
            <label>
              <input type="radio" value="Soft Candy" name="radio-button" />
              Soft Candy
            </label>
            <label>
              <input type="radio" value="Chocolate" name="radio-button" />
              Chocolate
            </label>
            <label>
              <input type="radio" value="Sour Candy" name="radio-button" />
              Sour Candy
            </label>
            <label>
              <input type="radio" value="Chewy Candy" name="radio-button" />
              Chewy Candy
            </label>
            <label>
              <input
                type="radio"
                value="Hard Boiled Candy"
                name="radio-button"
              />
              Hard Boiled Candy
            </label>
            <label>
              <input type="radio" value="Soft Candy" name="radio-button" />
              Soft Candy
            </label>
            <label>
              <input type="radio" value="Licourice" name="radio-button" />
              Licourice
            </label>
            <label>
              <input
                type="radio"
                value="Powder And Sherbets"
                name="radio-button"
              />
              Powder And Sherbets
            </label>
            <label>
              <input type="radio" value="Toffee" name="radio-button" />
              Toffee
            </label>
            <label>
              <input type="radio" value="Chocolate" name="radio-button" />
              Chocolate
            </label>
          </form>
        </ul>
      </div>

      {/* add handler for bramd */}
      <div>
        <ul className="brand-list">
          <form
            className="checkout-delivery-options-form sidepanel-option fixed-height"
            onChange={(e) => setBrand(e.target.value)}
          >
            <h4>SORT BY Brand: </h4>

            <label>
              <input type="radio" value="Jolly Rancher" name="radio-button" />
              Jolly Rancher
            </label>
            <label>
              <input type="radio" value="Calypso" name="radio-button" />
              Calypso
            </label>
            <label>
              <input type="radio" value="Kool-Aid" name="radio-button" />
              Kool-Aid
            </label>
            <label>
              <input type="radio" value="Twix" name="radio-button" />
              Twix
            </label>
            <label>
              <input type="radio" value="M-And-Ms" name="radio-button" />
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
              <input type="radio" value="Reeses" name="radio-button" />
              Reese's
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
              <input type="radio" value="CAndC" name="radio-button" />
              C&C
            </label>
            <label>
              <input type="radio" value="SweedishFish" name="radio-button" />
              SwedishFish
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
              <input type="radio" value="Mike And Ike" name="radio-button" />
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
      </div>
      <div>
        <ul className="dietary-links">
          <h4>DIETARY:</h4>
          <form
            className="checkout-delivery-options-form"
            onChange={handleDietary}
          >
            <label>
              <input type="radio" value="HALAL" />
              HALAL
            </label>
            <label>
              <input type="radio" value="VEGETARIAN" />
              VEGETARIAN
            </label>
            <label>
              <input type="radio" value="VEGAN" />
              VEGAN
            </label>
            <label>
              <input type="radio" value="KOSHER" />
              KOSHER
            </label>
            <label>
              <input type="radio" value="SUGAR FREE" />
              SUGAR FREE
            </label>
            <label>
              <input type="radio" value="FAT FREE" />
              FAT FREE
            </label>
            <label>
              <input type="radio" value="GLUTEN FREE" />
              GLUTEN FREE
            </label>
          </form>
        </ul>
      </div>
      <div onClick={handleSubmit}>
        <button className="admin-button sidepanel-option">SUBMIT</button>
      </div>
    </div>
  );

  return (
    <div className="admin-page">
      ADD PRODUCTS:
      <div>
        <ul className="">
          <form className="" onChange={handleRadioButton1}>
            <label>
              <input type="radio" value="international" name="radio-button" />
              international
            </label>
            <label>
              <input
                type="radio"
                value="sweets and candy"
                name="radio-button"
              />
              sweets any candy
            </label>
            <label>
              <input type="radio" value="pick and mix" name="radio-button" />
              pick and mix
            </label>
            <label>
              <input type="radio" value="traditional" name="radio-button" />
              traditional
            </label>
            <label>
              <input type="radio" value="clearance" name="radio-button" />
              clearance
            </label>
            <label>
              <input
                type="radio"
                value="gifts and hampers"
                name="radio-button"
              />
              gifts and hampers
            </label>
            <label>
              <input type="radio" value="wholesale" name="radio-button" />
              wholesale
            </label>
          </form>
        </ul>
      </div>
      <div>
        <h4>New Product?</h4>
        <form onChange={handleNewProduct}>
          <label>
            <input type="radio" value="yes" name="radio-button" />
            YES
          </label>
          <label>
            <input type="radio" value="no" name="radio-button" />
            NO
          </label>
        </form>
      </div>
      <div>{internationalLogic}</div>
    </div>
  );
};
