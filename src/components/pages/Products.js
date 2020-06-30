// import React, { useEffect, useState, useContext } from "react";
// import Axios from "axios";
// // import ProductContext from "../../context/BasketContext";
// import UserContext from "../../context/UserContext";
// import { Link, Switch, Route } from "react-router-dom";
// import { ProductPage } from "./ProductPage";

// export const Products = () => {
//   const [products, setProducts] = useState();

//   //   const { shoppingCart, setShoppingCart } = useContext(ProductContext);
//   const { userData } = useContext(UserContext);

//   useEffect(() => {
//     const checkLoggedIn = async () => {
//       //   let token = localStorage.getItem("auth-token");

//       if (!shoppingCart) {
//         const apiRes = await Axios.get(
//           "http://localhost:5000/product/products?limit=4&page=1&category=vegetable&date=-1"
//         );
//         setShoppingCart(apiRes.data);
//       }
//     };
//     checkLoggedIn();
//   }, [shoppingCart]);

//   const shoppingCartJSX = shoppingCart ? (
//     shoppingCart.map((data, index) => (
//       <li key={index}>
//         <Link to={`/products/${data.productName}`}>{data.productName}</Link>
//       </li>
//     ))
//   ) : (
//     <li>Loading...</li>
//   );

//   const ProductPage = ({ match }) => {
//     return <div>{match.params.id}</div>;
//   };

//   return (
//     <div>
//       <ul>{shoppingCartJSX}</ul>
//     </div>
//   );
// };

import React from "react";

export const Products = () => {
  return <div>Products Page</div>;
};
