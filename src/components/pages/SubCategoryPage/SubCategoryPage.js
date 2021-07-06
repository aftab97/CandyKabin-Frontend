import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import holdOn from "react-hold-on";
import BasketContext from "../../../context/BasketContext";
import { useHistory } from "react-router-dom";
import Emoji from "react-emoji-render";
import { useAlert } from "react-alert";
import { Helmet } from "react-helmet";
import { ReactComponent as DiagonalLine } from "../../../icons/diagonal-line.svg";
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  title: {
    color: "#ff1694",
  },
}));

export const SubCategoryPage = (params) => {
  const classes = useStyles();
  //set NONE to dietarty by default
  useEffect(() => {
    let radiobtn = document.getElementById("default-checked-option");
    radiobtn.checked = true;
  }, []);

  const [products, setProducts] = useState();
  const { shoppingCart, setShoppingCart, count, incrementCounter } =
    useContext(BasketContext);

  let [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);

  const pageNumbers = [];
  let currentProducts = [];

  const history = useHistory();

  const alert = useAlert();

  useEffect(() => {
    //if not subsub category or brand

    console.log(params);

    if (params.subCategory === "New In") {
      const grabData = async () => {
        const fetchedData = await Axios.get(
          `${process.env.REACT_APP_URL}/product/newIn?subCategory=${params.subCategory}&date=${params.sortByDate}&dietary=${params.dietary}`
        );
        fetchedData.data.sort((a, b) => b.showOnSite - a.showOnSite);
        setProducts(fetchedData.data);
      };

      grabData();
    } else if (!params.subSubCategory) {
      const grabData = async () => {
        const fetchedData = await Axios.get(
          `${process.env.REACT_APP_URL}/product/products?subCategory=${params.subCategory}&date=${params.sortByDate}&dietary=${params.dietary}`
        );

        fetchedData.data.sort((a, b) => b.showOnSite - a.showOnSite);
        setProducts(fetchedData.data);
      };

      grabData();
    } else {
      if (params.brand !== "NA") {
        const grabData = async () => {
          const fetchedData = await Axios.get(
            `${process.env.REACT_APP_URL}/product/products?subCategory=${params.subCategory}&subSubCategory=${params.subSubCategory}&brand=${params.brand}&date=${params.sortByDate}&dietary=${params.dietary}`
          );

          fetchedData.data.sort((a, b) => b.showOnSite - a.showOnSite);
          setProducts(fetchedData.data);
        };

        grabData();
      } else {
        const grabData = async () => {
          const fetchedData = await Axios.get(
            `${process.env.REACT_APP_URL}/product/products?subCategory=${params.subCategory}&subSubCategory=${params.subSubCategory}&date=${params.sortByDate}&dietary=${params.dietary}`
          );

          fetchedData.data.sort((a, b) => b.showOnSite - a.showOnSite);
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
      } else if (params.subCategory === "Wholesale") {
        international.style.display = "none";
        sweetsAndCandy.style.display = "none";
        pickAndMix.style.display = "none";
        traditional.style.display = "none";

        internationalMobile.style.display = "none";
        sweetsAndCandyMobile.style.display = "none";
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

    let discount =
      e.currentTarget.parentNode.querySelector(".product-discount");

    if (discount !== null) {
      console.log("discount exists");
      data = parseFloat(
        e.currentTarget.parentNode.querySelector(".product-discount")
          .childNodes[1].data
      );
    }

    let parsedInt = parseFloat(data);

    let pickedAmount = parseInt(
      e.currentTarget.parentNode.querySelector(".amount").childNodes[0].data
    );

    let nonParsedWeight =
      e.currentTarget.parentNode.querySelector(".product-weight").childNodes[0]
        .data;

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
          UUID: "",
          subName: "",
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
          UUID: "",
          subName: "",
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
                UUID: b.UUID,
                subName: b.subName,
              })
            : ((a[i].amount += b.amount), (a[i].totalCost += b.totalCost)),
          a
        );
      }, []);

      setShoppingCart(arr2); //this was prev finalshoppingcart
      localStorage.setItem("basket", JSON.stringify(arr2));

      alert.success("ADDED TO BASKET");
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
    // let pageNumber2 = document.querySelectorAll("#page-number-2");
    // pageNumber2[0].style.display = "block";
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
          {data.showOnSite ? (
            <></>
          ) : (
            <>
              <div className="not-available">
                <h2 className="not-available-message">OUT OF STOCK</h2>
              </div>
            </>
          )}
          <img
            src={data.imageURL}
            onClick={handleImageRedirect}
            alt={data.productName}
          />
          <h2 onClick={handleRedirect} className="product-title">
            {data.productName}
          </h2>

          {data.discountPrice ? (
            <h3 className="product-price">
              £{(data.price / 100).toFixed(2)}
              <div className="discount"></div>
            </h3>
          ) : (
            <>
              <h3 className="product-price">
                £{(data.price / 100).toFixed(2)}
              </h3>
            </>
          )}

          {data.discountPrice ? (
            <div className="now-discount-container">
              <h5 className="now-tag">Now</h5>

              <h3 className="product-discount">
                £{(data.discountPrice / 100).toFixed(2)}
              </h3>
            </div>
          ) : (
            <></>
          )}

          <div className="quantity">
            <button className="product-page-button" onClick={increment}>
              +
            </button>
            <h4 className="amount">1</h4>

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

  const handlePageChange2 = (e) => {
    if (e.currentTarget.childNodes[0].data === "<") {
      if (currentPage !== 1) {
        setCurrentPage(--currentPage);
      }
    } else if (e.currentTarget.childNodes[0].data === "<<") {
      setCurrentPage(1);
    } else if (e.currentTarget.childNodes[0].data === ">>") {
      console.log("last page");
      setCurrentPage(pageNumbers.slice(-1)[0]);
    } else if (e.currentTarget.childNodes[0].data === ">") {
      if (currentPage !== pageNumbers.slice(-1)[0]) {
        setCurrentPage(++currentPage);
      }
    } else {
      setCurrentPage(parseInt(e.currentTarget.childNodes[0].data));
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="products-component-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Candy Kabin - {params.subCategory}</title>
        <meta
          name="description"
          content="products from Candy Kabin ranging from different types of candy to chocolates"
        />
        <meta
          name="keywords"
          content="Candy Kabin, Rochdale, Delivery information, Candy, Sweets, American, Chocolate, International, Traditional, Pick and Mix, Jolly Rancher, Calypso, M&M's, Sour Patch, Fanta, Nestle, Hershey's, Twix, Kool-Aid"
        />
      </Helmet>
      <div className="amount-per-page">
        {
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              id="demo-simple-select-outlined-label"
              className={classes.title}
            >
              Products Per Page
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={productsPerPage}
              onChange={(e) => {
                setProductsPerPage(e.target.value);
              }}
              label="Products Per Page: "
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
              <MenuItem value={40}>Fourty</MenuItem>
              <MenuItem value={50}>Fifty</MenuItem>
              <MenuItem value={100}>Hundred</MenuItem>
            </Select>
          </FormControl>
        }
      </div>

      <div className="products-container">{defaultData}</div>

      <div className="page-number-container">
        <button className="page-button first-page" onClick={handlePageChange2}>
          &lt;&lt;
        </button>

        <button className="page-button" onClick={handlePageChange2}>
          &lt;
        </button>

        {pageNumbers.includes(currentPage - 2) ? (
          <button className="page-button" onClick={handlePageChange2}>
            {currentPage - 2}
          </button>
        ) : (
          <></>
        )}

        {pageNumbers.includes(currentPage - 1) ? (
          <button className="page-button" onClick={handlePageChange2}>
            {currentPage - 1}
          </button>
        ) : (
          <></>
        )}

        <button
          className="page-button page-button-selected-page"
          onClick={handlePageChange2}
        >
          {currentPage}
        </button>
        {pageNumbers.includes(currentPage + 1) ? (
          <button className="page-button" onClick={handlePageChange2}>
            {currentPage + 1}
          </button>
        ) : (
          <></>
        )}

        {pageNumbers.includes(currentPage + 2) ? (
          <button className="page-button" onClick={handlePageChange2}>
            {currentPage + 2}
          </button>
        ) : (
          <></>
        )}

        <h2>.....</h2>
        <button className="page-button" onClick={handlePageChange2}>
          {pageNumbers.slice(-1)[0]}
        </button>
        <button className="page-button" onClick={handlePageChange2}>
          >
        </button>
        <button className="page-button last-page" onClick={handlePageChange2}>
          >>
        </button>
      </div>
    </div>
  );
};
