import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import EmailNotice from "../misc/EmailNotice";

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const [error, setError] = useState();

  const [emailSent, setEmailSent] = useState(false);
  const [emailResponse, setEmalResponse] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    // setEmailSent(true);

    try {
      const newUser = { email, password, passwordCheck, displayName };
      const registerResponse = await Axios.post(
        `${process.env.REACT_APP_URL}/users/register`,
        newUser
      );

      setEmailSent(true);
      setEmalResponse(registerResponse.msg);

      // const loginRes = await Axios.post("/users/login", {
      //   email,
      //   password,
      // });
      // setUserData({
      //   token: loginRes.data.token,
      //   user: loginRes.data.user,
      // });
      // localStorage.setItem("auth-token", loginRes.data.token);
      // history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }

    console.log(emailResponse);
  };

  return (
    <div className="page">
      <h2>Register</h2>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      {emailSent && <div>Email has been sent</div>}
      <form className="form" onSubmit={submit}>
        <label htmlFor="register-email">Email</label>
        <input
          id="register-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="register-password">Password</label>
        <input
          id="register-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Verify password"
          onChange={(e) => setPasswordCheck(e.target.value)}
        />

        <label htmlFor="register-display-name">Display name</label>
        <input
          id="register-display-name"
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
        />

        <input type="submit" value="Register" />
      </form>
    </div>
  );
}
