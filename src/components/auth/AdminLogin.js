import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import BasketContext from "../../context/BasketContext";

export default function AdminLogin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const { setShoppingCart, setFinalShoppingCart } = useContext(BasketContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(
        `${process.env.REACT_APP_URL}/users/adminLogin`,
        loginUser
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      //TODO: on logout update basket to db
      if (loginRes.data.user.cart) {
        setShoppingCart(loginRes.data.user.cart);
      }
      localStorage.setItem("auth-token", loginRes.data.token);

      history.push("/adminSummary");
      console.log(loginRes);
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
  return (
    <div className="page">
      <h2>Admin Log in</h2>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form className="form" onSubmit={submit}>
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Log in" />
      </form>
    </div>
  );
}
