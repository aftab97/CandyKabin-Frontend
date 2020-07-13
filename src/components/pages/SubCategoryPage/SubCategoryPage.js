import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import holdOn from "react-hold-on";
import BasketContext from "../../../context/BasketContext";
import { useHistory } from "react-router-dom";
import Emoji from "react-emoji-render";

export const SubCategoryPage = (params) => {
  //set NONE to dietarty by default
  useEffect(() => {
    let radiobtn = document.getElementById("default-checked-option");
    radiobtn.checked = true;
  }, []);

  // useEffect(() => {
  //   let listAmount = document.querySelectorAll(".shop-links > li").length;

  //   for (let i = 1; i < listAmount + 1; i++) {
  //     let listLink = document.querySelector(`.shop-links > li:nth-child(${i})`);

  //     if (listLink.classList.contains("emoji-list")) {
  //       listLink.classList.remove("emoji-list");
  //     }
  //   }

  //   let subCategory = params.subCategory.toLowerCase();

  //   if (params.subCategory.includes(" ")) {
  //     subCategory = subCategory.replace(" ", "-");
  //   }
  //   let link = document.querySelector(`.${subCategory}-link`);
  //   link.classList.add("emoji-list");
  // }, []);
  const [products, setProducts] = useState();
  const { shoppingCart, setShoppingCart, count, incrementCounter } = useContext(
    BasketContext
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);

  const pageNumbers = [];
  let currentProducts = [];

  const history = useHistory();

  useEffect(() => {
    //if not subsub category or brand
    if (!params.subSubCategory) {
      const grabData = async () => {
        const fetchedData = await Axios.get(
          `${process.env.REACT_APP_URL}/product/products?subCategory=${params.subCategory}&date=${params.sortByDate}&dietary=${params.dietary}`
        );

        setProducts(fetchedData.data);
      };

      grabData();
    } else {
      if (params.brand !== "NA") {
        const grabData = async () => {
          const fetchedData = await Axios.get(
            `${process.env.REACT_APP_URL}/product/products?subCategory=${params.subCategory}&subSubCategory=${params.subSubCategory}&brand=${params.brand}&date=${params.sortByDate}&dietary=${params.dietary}`
          );

          setProducts(fetchedData.data);
        };

        grabData();
      } else {
        const grabData = async () => {
          const fetchedData = await Axios.get(
            `${process.env.REACT_APP_URL}/product/products?subCategory=${params.subCategory}&subSubCategory=${params.subSubCategory}&date=${params.sortByDate}&dietary=${params.dietary}`
          );

          setProducts(fetchedData.data);
        };
        grabData();
      }
    }
  }, [params.subSubCategory, params.brand, params.dietary, params.sortByDate]);

  useEffect(() => {
    let brand = document.querySelector(".brand-list");
    let brandMobile = document.querySelector(".brand-list-mobile");
    if (params.subCategory !== "International") {
      if (brand !== null) {
        brand.style.display = "none";
        brandMobile.style.display = "none";
      }
    } else {
      if (brand !== null) {
        brand.style.display = "block";
        brandMobile.style.display = "block";
      }
    }
  }, [params.subCategory]);

  useEffect(() => {
    if (params.subSubCategory) {
      let international = document.querySelector(
        ".sub-sub-category-links.sidepanel-option.international-list"
      );
      let sweetsAndCandy = document.querySelector(".sweets-and-candy-list");
      let pickAndMix = document.querySelector(".pick-and-mix-list");
      let traditional = document.querySelector(".traditional-list");

      let internationalMobile = document.querySelector(".international-mobile");
      let sweetsAndCandyMobile = document.querySelector(
        ".sweets-and-candy-mobile"
      );
      let pickAndMixMobile = document.querySelector(".pick-and-mix-mobile");
      let traditionalMobile = document.querySelector(".traditional-mobile");

      if (params.subCategory === "International") {
        international.style.display = "block";
        sweetsAndCandy.style.display = "none";
        pickAndMix.style.display = "none";
        traditional.style.display = "none";

        internationalMobile.style.display = "block";
        sweetsAndCandyMobile.style.display = "none";
        pickAndMixMobile.style.display = "none";
        traditionalMobile.style.display = "none";
      } else if (params.subCategory === "Sweets And Candy") {
        international.style.display = "none";
        sweetsAndCandy.style.display = "block";
        pickAndMix.style.display = "none";
        traditional.style.display = "none";

        internationalMobile.style.display = "none";
        sweetsAndCandyMobile.style.display = "block";
        pickAndMixMobile.style.display = "none";
        traditionalMobile.style.display = "none";
      } else if (params.subCategory === "Pick And Mix") {
        international.style.display = "none";
        sweetsAndCandy.style.display = "none";
        pickAndMix.style.display = "block";
        traditional.style.display = "none";

        internationalMobile.style.display = "none";
        sweetsAndCandyMobile.style.display = "none";
        pickAndMixMobile.style.display = "block";
        traditionalMobile.style.display = "none";
      } else if (params.subCategory === "Traditional") {
        international.style.display = "none";
        sweetsAndCandy.style.display = "none";
        pickAndMix.style.display = "none";
        traditional.style.display = "block";

        internationalMobile.style.display = "none";
        sweetsAndCandyMobile.style.display = "none";
        pickAndMixMobile.style.display = "none";
        traditionalMobile.style.display = "block";
      } else {
        international.style.display = "none";
        sweetsAndCandy.style.display = "none";
        pickAndMix.style.display = "none";
        traditional.style.display = "none";

        internationalMobile.style.display = "none";
        sweetsAndCandyMobile.style.display = "none";
        pickAndMixMobile.style.display = "none";
        traditionalMobile.style.display = "none";
      }
    }
  }, [params.subCategory]);

  const handleClick = (e) => {
    let productName = e.currentTarget.querySelector("span").className;

    let idRaw = e.target.className.split(" ");
    let id = idRaw[0];

    let data = parseFloat(
      e.currentTarget.parentNode.querySelector(".product-price").childNodes[1]
        .data
    );

    let parsedInt = parseFloat(data);

    let pickedAmount = parseInt(
      e.currentTarget.parentNode.querySelector(".amount").childNodes[0].data
    );

    let nonParsedWeight = e.currentTarget.parentNode.querySelector(
      ".product-weight"
    ).childNodes[0].data;

    let weight = parseInt(nonParsedWeight);

    let image = e.currentTarget.parentNode.querySelector("img");

    let totalCost = pickedAmount * data;

    if (pickedAmount > 0) {
      incrementCounter();
      setShoppingCart([
        ...shoppingCart,
        {
          id,
          productName,
          amount: pickedAmount,
          price: data,
          weight,
          orderNo: count,
          imageSrc: image.src,
          totalCost,
        },
      ]);

      let finalAmount = [
        ...shoppingCart,
        {
          id,
          productName,
          amount: pickedAmount,
          price: data,
          weight,
          orderNo: count,
          imageSrc: image.src,
          totalCost,
        },
      ];

      console.log(finalAmount);

      var arr2 = finalAmount.reduce((a, b) => {
        var i = a.findIndex((x) => x.productName === b.productName);
        return (
          i === -1
            ? a.push({
                id: b.id,
                productName: b.productName,
                amount: b.amount,
                price: b.price,
                weight: b.weight,
                orderNo: b.orderNo,
                imageSrc: b.imageSrc,
                totalCost: b.totalCost,
              })
            : ((a[i].amount += b.amount), (a[i].totalCost += b.totalCost)),
          a
        );
      }, []);

      setShoppingCart(arr2); //this was prev finalshoppingcart
      localStorage.setItem("basket", JSON.stringify(arr2));
    }
  };

  const increment = (e) => {
    ++e.currentTarget.parentNode.querySelector("h4").childNodes[0].data;
  };

  const decrement = (e) => {
    if (e.currentTarget.parentNode.querySelector("h4").childNodes[0].data > 0) {
      --e.currentTarget.parentNode.querySelector("h4").childNodes[0].data;
    }
  };

  const loadPages = async () => {
    for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
      pageNumbers.push(i);
    }

    const indexOfLastTodo = currentPage * productsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - productsPerPage;
    currentProducts = products.slice(indexOfFirstTodo, indexOfLastTodo);

    await defaultStyling();
  };

  const defaultStyling = () => {
    let pageNumber1 = document.querySelector(
      ".pages-container > button:nth-child(1)"
    );
    console.log(pageNumber1);
  };

  const handlePageChange = (e) => {
    setCurrentPage(e.currentTarget.childNodes[0].data);

    let amountOfPages = e.currentTarget.parentNode.childNodes.length;

    console.log(amountOfPages);

    for (let i = 1; i < amountOfPages + 1; i++) {
      let pages = document.querySelector(
        `div.pages-container > button:nth-child(${i})`
      );
      if (pages.classList.contains("page-button-selected-page")) {
        pages.classList.remove("page-button-selected-page");
      }
    }
    e.currentTarget.className += " page-button-selected-page";

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleRedirect = (e) => {
    console.log(e.currentTarget.childNodes[0].data);

    history.push(
      "/products/" + e.currentTarget.childNodes[0].data.replace(/&/g, "%26")
    );
  };

  const handleImageRedirect = (e) => {
    history.push(
      "/products/" +
        e.currentTarget.parentNode
          .querySelector(".product-title")
          .childNodes[0].data.replace(/&/g, "%26")
    );
  };

  const options = {
    theme: "sk-folding-cube",
    message: "Loading... ",
    backgroundColor: "#1847B1",
    textColor: "white",
  };

  const handleTimeOut = () => {
    holdOn.open(options);
  };

  const defaultData = products
    ? (loadPages(),
      holdOn.close(),
      currentProducts.map((data, index) => (
        <div
          className={`product hvr-grow2`}
          index={data.productName}
          key={index}
        >
          <img src={data.imageURL} onClick={handleImageRedirect} />
          <h2 onClick={handleRedirect} className="product-title">
            {data.productName}
          </h2>
          <h3 className="product-price">£{(data.price / 100).toFixed(2)}</h3>
          <div className="quantity">
            <button className="product-page-button" onClick={increment}>
              +
            </button>
            <h4 className="amount">0</h4>

            <button className="product-page-button" onClick={decrement}>
              -
            </button>
          </div>
          <button
            className={`${data._id} product-basket-button`}
            onClick={handleClick}
          >
            <span className={data.productName} />
            Add To Basket
          </button>
          <div className="product-weight">{data.weight}</div>
        </div>
      )))
    : handleTimeOut();
  return (
    <div className="products-component-container">
      <div className="products-container">{defaultData}</div>
      <div className="pages-container">
        {pageNumbers.map((page) =>
          page === 1 ? (
            <button
              className="page-button page-button-selected-page"
              index={page}
              onClick={handlePageChange}
            >
              {page}
            </button>
          ) : (
            <button
              className="page-button"
              index={page}
              onClick={handlePageChange}
            >
              {page}
            </button>
          )
        )}
      </div>
    </div>
  );
};
