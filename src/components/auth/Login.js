import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import BasketContext from "../../context/BasketContext";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const { setShoppingCart } = useContext(BasketContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(
        `${process.env.REACT_APP_URL}/users/login`,
        loginUser
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
        email: loginRes.data.email,
      });

      console.log(loginRes.data.user.cart);

      if (loginRes.data.user.cart) {
        localStorage.setItem("basket", JSON.stringify(loginRes.data.user.cart));

        setShoppingCart(loginRes.data.user.cart);
      }

      localStorage.setItem("auth-token", loginRes.data.token);

      history.push("/");
      console.log(loginRes);
    } catch (err) {
      console.log(err);
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
  return (
    <div className="page">
      <h2>Log in</h2>
      <br />
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
      <h5>Register</h5>
      <h5>Forgot Password</h5>
    </div>
  );
}
