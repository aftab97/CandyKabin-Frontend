import React, { useEffect, useState, useContext } from "react";
import pouch from "../../../img/sweets-mix.jpg";
import Axios from "axios";
import BasketContext from "../../../context/BasketContext";

import { Button, makeStyles } from "@material-ui/core";
import { useAlert } from "react-alert";
import { Helmet } from "react-helmet";

const useStlyes = makeStyles((theme) => ({
  button: {
    width: 200,
    backgroundColor: "#e57098",
    color: "white",
  },
}));

export const NewPickAndMix = () => {
  const [product, setProduct] = useState(undefined);
  const alert = useAlert();

  const classes = useStlyes();

  let [productsSelected, setProductsSelected] = useState(0);

  const { shoppingCart, setShoppingCart, count, incrementCounter } = useContext(
    BasketContext
  );

  useEffect(() => {
    //   grab pick and mix data

    const grabData = async () => {
      const fetchedProduct = await Axios.get(
        `${process.env.REACT_APP_URL}/product/products?subCategory=Pick%20And%20Mix&subSubCategory=NONE&date=-1&dietary=NONE`
        // handle the & so it changes to the URL format
      );

      setProduct(fetchedProduct.data);
    };

    grabData();
  }, []);

  const handleProductSelect = (e) => {
    let productName = e.currentTarget.querySelector(
      ".pick-and-mix-product-title"
    ).childNodes[0].data;

    if (e.currentTarget.classList.contains("p-m-selected")) {
      e.currentTarget.classList.remove("p-m-selected");
    } else {
      e.currentTarget.classList.add("p-m-selected");
      setProductsSelected(++productsSelected);
    }
  };

  const handleSubmit = () => {
    let allSelected = document.querySelectorAll(".p-m-selected");

    let array = [...allSelected];

    let sub = `${array.map(
      (x) => x.querySelector(".pick-and-mix-product-title").childNodes[0].data
    )},`;

    let UUID = `${array.map(
      (x) => x.querySelector(".pick-and-mix-product-title").childNodes[0].data
    )}`;

    if (array.length >= 4 && array.length <= 20) {
      incrementCounter();

      setShoppingCart([
        ...shoppingCart,
        {
          amount: 1,
          id: "",
          imageSrc:
            "https://cdn.shopify.com/s/files/1/0357/7944/4871/products/03-SWEET-STORE1774-Web-2000_445x445.jpg?v=1587211768",
          productName: "Pick And Mix Bag",
          subName: sub,
          UUID,
          price: 0.5 * array.length,
          weight: array.length * 50,
          orderNo: count,
        },
      ]);

      let finalArr = [
        ...shoppingCart,
        {
          amount: 1,
          id: "",
          imageSrc:
            "https://cdn.shopify.com/s/files/1/0357/7944/4871/products/03-SWEET-STORE1774-Web-2000_445x445.jpg?v=1587211768",
          productName: "Pick And Mix Bag",
          subName: sub,
          UUID,
          price: 0.5 * array.length,
          weight: array.length * 50,
          orderNo: count,
        },
      ];

      localStorage.setItem("basket", JSON.stringify(finalArr));

      //remove opacity and class
      for (let i = 0; i < allSelected.length; i++) {
        allSelected[i].classList.remove("p-m-selected");
      }

      alert.success("ADDED TO BASKET");
    } else {
      let popUpMessage = document.querySelector(".pick-and-mix-message");

      popUpMessage.style.opacity = 1;
    }
  };

  return (
    <div className="pick-and-mix-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Candy Kabin - Pick & Mix</title>
        <meta
          name="description"
          content="Want to create your own Pick And Mix Bag? Comes in a resealable food grade kraft paper stand up pouch filled with all your favourite sweets."
        />
        <meta
          name="keywords"
          content="Candy Kabin, Rochdale, Delivery information, Candy, Sweets, American, Chocolate, International, Traditional, Pick and Mix, Jolly Rancher, Calypso, M&M's, Sour Patch, Fanta, Nestle, Hershey's, Twix, Kool-Aid"
        />
      </Helmet>
      <div className="product-image-container">
        <img src={pouch} />
      </div>
      <div className="product-detail-container">
        <h2 className="custom-styling">Create Your Own Pick & Mix</h2>
        <br />
        <p>
          We are pleased to present our 'Create Your Own' pick and mix sweet
          pouch that comes in a resealable food grade kraft paper stand up pouch
          and contains approximately 250g of the most delicious, freshest sweets
          chosen by yourself!
        </p>
        <br />
        <p>
          Please note that some sweets weigh more than others so it may weigh
          slightly under or over 250g depending on your choices but we will aim
          to get this as close as possible.
        </p>
        <br />
        <p>
          So how does the whole thing work? We've made it as simple as possible
          as well as being great fun to build your own pouch!
        </p>
        <br />
        <p>
          Select up to 20 choices of sweets with a minimum of 4 from our
          selection of 80+ for your pouch and our team of sweet pickers will do
          the hard work spreading the fill of your pouch as evenly as possible.
        </p>
        <br />

        <h2 className="custom-styling">Select Your Fillings: </h2>
        <div className="pick-and-mix-product-container">
          {product ? (
            product.map((product) => (
              <div
                className={`pick-and-mix-product a-${product.productName}`}
                onClick={handleProductSelect}
              >
                <img src={product.imageURL} className="pick-and-mix-image" />
                <h5 className="pick-and-mix-product-title">
                  {product.productName}
                </h5>
                <h5 className="p-m-price">{product.price}</h5>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
        <div className="pick-and-mix-button-container">
          <Button className={classes.button} onClick={handleSubmit}>
            ADD TO BASKET
          </Button>

          <h5 className="pick-and-mix-message">
            Please select 4 to 20 sweets per bag
          </h5>
        </div>
      </div>
    </div>
  );
};
