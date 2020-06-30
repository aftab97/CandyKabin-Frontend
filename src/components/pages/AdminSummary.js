import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";

export default function AdminSummary() {
  const { userData } = useContext(UserContext);

  const checkAdmin = async (e) => {
    e.preventDefault();
    try {
      let token = localStorage.getItem("auth-token");
      const tokenRes = await Axios.post(
        `${process.env.REACT_APP_URL}/users/isAdmin`,
        null,
        {
          headers: { "x-auth-token": token },
        }
      );

      console.log(tokenRes.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="page">
      {userData.user ? (
        <div>
          <h1>Welcome {userData.user.displayName}</h1>
          <button onClick={checkAdmin}>Click me</button>
        </div>
      ) : (
        <>
          <h2>You are not logged in</h2>
          <Link to="/adminLogin">Admin Log In</Link>
        </>
      )}
    </div>
  );
}
