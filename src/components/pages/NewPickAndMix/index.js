import React, { useEffect, useState, useContext } from "react";
// import pouch from "../../../img/sweets-mix.jpg";
import pouch from "../../../img/sweets-mix2.png";
import Axios from "axios";
import BasketContext from "../../../context/BasketContext";
import holdOn from "react-hold-on";
import { Button, makeStyles } from "@material-ui/core";
import { useAlert } from "react-alert";
import { Helmet } from "react-helmet";

import { ReactComponent as CloseSVG } from "../../../icons/close.svg";
import { ReactComponent as InfoSVG } from "../../../icons/info.svg";

//dietary
import halalLogo from "../../../img/dietary/halal-new.png";
import glutenFreeLogo from "../../../img/dietary/gluten-free-new.png";
import kosherLogo from "../../../img/dietary/kosher-new.png";
import veganLogo from "../../../img/dietary/vegan-new.png";
import vegetarianLogo from "../../../img/dietary/vegetarian-new.png";
import sugarFreelogo from "../../../img/dietary/sugar-free.png";

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
    let productName = e.currentTarget.parentNode.querySelector(
      ".pick-and-mix-product-title"
    ).childNodes[0].data;

    // increment the amount each click

    ++e.currentTarget.parentNode.querySelector(".p-a-m-amount").childNodes[0]
      .data;

    let newAmount = e.currentTarget.parentNode.querySelector(".p-a-m-amount")
      .childNodes[0].data;

    e.currentTarget.parentNode.querySelector(".p-a-m-amount").style.opacity = 1;
    e.currentTarget.parentNode.querySelector(
      ".p-a-m-remove-button > button"
    ).style.opacity = 1;

    // if (e.currentTarget.classList.contains("p-m-selected")) {
    //   e.currentTarget.classList.remove("p-m-selected");
    // } else {
    //   e.currentTarget.classList.add("p-m-selected");
    //   setProductsSelected(++productsSelected);
    // }

    e.currentTarget.parentNode.classList.add("p-m-selected");
    setProductsSelected(++productsSelected);
  };

  const handleSubmit = () => {
    let allSelected = document.querySelectorAll(".p-m-selected");

    // let array = [...allSelected];

    let array = [];

    for (let i = 0; i < allSelected.length; i++) {
      let productAmount = parseInt(
        allSelected[i].querySelector(".p-a-m-amount").childNodes[0].data
      );

      if (productAmount > 1) {
        for (let x = 0; x < productAmount; x++) {
          array.push(allSelected[i]);
        }
      } else {
        array.push(allSelected[i]);
      }
    }

    let sub = `${array.map(
      (x) => x.querySelector(".pick-and-mix-product-title").childNodes[0].data
    )},`;

    let UUID = `${array.map(
      (x) => x.querySelector(".pick-and-mix-product-title").childNodes[0].data
    )}`;

    if (array.length >= 4 && array.length <= 20) {
      incrementCounter();

      let finalAmount = [...shoppingCart];

      let duplicates = false;

      // not finished duplicate handling

      for (let i = 0; i < finalAmount.length; i++) {
        if (finalAmount[i].UUID === UUID) {
          // ++finalAmount[i].amount;
          console.log("there are duplicates");
          duplicates = true;
        }
      }

      if (duplicates) {
        console.log("handling duplicates");
        for (let i = 0; i < finalAmount.length; i++) {
          if (finalAmount[i].UUID === UUID) {
            ++finalAmount[i].amount;
          }
        }

        setShoppingCart([...finalAmount]);

        let finalArr = [...finalAmount];

        localStorage.setItem("basket", JSON.stringify(finalArr));
      } else {
        console.log("there are no duplciates");
        setShoppingCart([
          ...finalAmount,
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
          ...finalAmount,
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
      }

      // console.log(x.UUID);
      // console.log(UUID);
      // console.log("handling duplicates");

      //   for (let i = 0; i < finalAmount.length; i++) {
      //     if (finalAmount[i].UUID === UUID) {
      //       ++finalAmount[i].amount;
      //     }
      //   }
      // }

      //remove opacity and class
      for (let i = 0; i < allSelected.length; i++) {
        allSelected[i].classList.remove("p-m-selected");

        // set amounts back to 0
        allSelected[i].querySelector(".p-a-m-amount").childNodes[0].data = 0;

        // set opacity back to 0
        allSelected[i].querySelector(".p-a-m-amount").style.opacity = 0;
        allSelected[i].querySelector(
          ".p-a-m-remove-button > button"
        ).style.opacity = 0;
      }

      alert.success("ADDED TO BASKET");
    } else {
      let popUpMessage = document.querySelector(".pick-and-mix-message");

      popUpMessage.style.opacity = 1;
    }
  };

  const handleModalClose = (e) => {
    console.log("closing modal");

    let modal = document.querySelectorAll("#modal");

    for (let i = 0; i < modal.length; i++) {
      modal[i].style.display = "none";
    }

    // modal.style.display = "none";

    // clsoe all modals
  };

  const handleModalOpen = (e) => {
    console.log(
      (e.currentTarget.parentNode.querySelector("#modal").style.display =
        "block")
    );

    // let modalName = e.currentTarget.parentNode.querySelector(
    //   ".pick-and-mix-product-title"
    // ).childNodes[0].data;

    // let modalClass = modalName + "-modal";
    // let modal = document.getElementsByClassName(modalClass);

    // modal.style.display = "block";
  };

  const removeProduct = (e) => {
    console.log("removing");
    if (e.currentTarget.parentNode.classList.contains("p-m-selected")) {
      e.currentTarget.parentNode.classList.remove("p-m-selected");
      // change amount to 0 and change opacity for both to 0
    }

    e.currentTarget.parentNode.querySelector(".p-a-m-amount").style.opacity = 0;
    e.currentTarget.parentNode.querySelector(
      ".p-a-m-amount"
    ).childNodes[0].data = 0;
    e.currentTarget.parentNode.querySelector(
      ".p-a-m-remove-button > button"
    ).style.opacity = 0;
  };

  const options = {
    theme: "sk-folding-cube",
    message: "Loading... ",
    backgroundColor: "#1847B1",
    textColor: "white",
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
          We are pleased to present our 'Create Your Own' pick and mix station!
          Select up to a Maximum 20 choices per bag with a minimum of 4 from our
          selection of 100+ for your sweet bag.
        </p>
        <br />
        <p>
          All sweets are preset to 50g for 50p. Enjoy the most delicious,
          softest and freshest sweets chosen by yourself and our team of sweet
          pickers will put togather your combination of sweets!
        </p>
        <br />
        <p>
          *Please note that some sweets weigh more than others so it may differ
          in quantity but we will aim to get this as close as possible Click the
          “i” icon to check the ingredients and dietary information for each
          sweet
        </p>
        <br />
        <p>What are you waiting for? Start picking!</p>
        <br />

        <h2 className="custom-styling">Select Your Fillings: </h2>
        <div className="pick-and-mix-product-container">
          {product
            ? (holdOn.close(),
              product.map((product) => (
                <div
                  className={`pick-and-mix-product a-${product.productName}`}
                >
                  <div className="info-button" onClick={handleModalOpen}>
                    <button>
                      <InfoSVG />
                    </button>
                  </div>

                  <div onClick={removeProduct} className="p-a-m-remove-button">
                    <button>
                      <CloseSVG className="p-a-m-deselect-svg" />
                    </button>
                  </div>

                  <div id="modal" className={`${product.productName}-modal`}>
                    <button className="modal-close" onClick={handleModalClose}>
                      <CloseSVG />
                    </button>
                    <h2 className="p-a-m--modal-title">
                      {product.productName}
                    </h2>

                    <div className="p-a-m-modal-sub-description-image-container">
                      <img src={product.imageURL} className="p-a-m-image" />
                      <ul className="modal-list">
                        {product.subDescription1 ? (
                          <li className="hvr-grow">
                            🍭
                            {product.subDescription1}
                          </li>
                        ) : (
                          <></>
                        )}
                        {product.subDescription2 ? (
                          <li className="hvr-grow">
                            🍭
                            {product.subDescription2}
                          </li>
                        ) : (
                          <></>
                        )}
                        {product.subDescription3 ? (
                          <li className="hvr-grow">
                            🍭
                            {product.subDescription3}
                          </li>
                        ) : (
                          <></>
                        )}
                        {product.subDescription4 ? (
                          <li className="hvr-grow">
                            🍭
                            {product.subDescription4}
                          </li>
                        ) : (
                          <></>
                        )}
                        {product.subDescription5 ? (
                          <li className="hvr-grow">
                            🍭
                            {product.subDescription5}
                          </li>
                        ) : (
                          <></>
                        )}
                        {product.subDescription6 ? (
                          <li className="hvr-grow">
                            🍭
                            {product.subDescription6}
                          </li>
                        ) : (
                          <></>
                        )}
                      </ul>
                    </div>
                    <p className="modal-product-ingredients">
                      {product.ingredients}
                    </p>
                    <div className="modal-dietary-container">
                      {product.halal ? (
                        <div className="dietary">
                          <img
                            src={halalLogo}
                            className="dietary-img"
                            alt="halal"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                      {product.vegetarian ? (
                        <div className="dietary">
                          <img
                            src={vegetarianLogo}
                            className="dietary-img"
                            alt="vegetarian"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                      {product.kosher ? (
                        <div className="dietary">
                          <img
                            src={kosherLogo}
                            className="dietary-img"
                            alt="kosher"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                      {product.vegan ? (
                        <div className="dietary">
                          <img
                            src={veganLogo}
                            className="dietary-img"
                            alt="vegan"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                      {product.fatFree ? (
                        <div className="dietary">true</div>
                      ) : (
                        <></>
                      )}
                      {product.sugarFree ? (
                        <div className="dietary">
                          <img
                            src={sugarFreelogo}
                            className="dietary-img"
                            alt="sugar free"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                      {product.glutenFree ? (
                        <div className="dietary">
                          <img
                            src={glutenFreeLogo}
                            className="dietary-img"
                            alt="gluten free"
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>

                  <img
                    src={product.imageURL}
                    className="pick-and-mix-image"
                    onClick={handleProductSelect}
                  />
                  <div className="amount-title-container">
                    <h4 className="p-a-m-amount">
                      0
                      <span>
                        <CloseSVG />
                      </span>
                    </h4>
                    <h5
                      className="pick-and-mix-product-title"
                      onClick={handleProductSelect}
                    >
                      {product.productName}
                    </h5>
                  </div>

                  <h5 className="p-m-price">{product.price}</h5>
                </div>
              )))
            : holdOn.open(options)}
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
