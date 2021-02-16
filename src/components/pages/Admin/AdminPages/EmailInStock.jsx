import React, { useState } from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { Input } from "@material-ui/core";
import Axios from "axios";
export const EmailInStock = () => {
  const [inputs, setInputs] = useState();

  const methods = useForm();
  let token = localStorage.getItem("auth-token");

  const emailSubmit = (data) => {
    console.log(data);

    let returnedData = data.stock;

    let cleanedData = returnedData.split(",").map((value) => value.trim());

    let json = JSON.stringify(cleanedData);
    console.log(token);

    const checkLoggedIn = async () => {
      const tokenRes = await Axios.post(
        `${process.env.REACT_APP_URL}/stock/updateInStock`,
        { stock: json },
        {
          headers: { "x-auth-token": token },
        }
      );
    };

    checkLoggedIn();

    const sendData =
      // let newArr = cleanedData.map((value) => value.trim());
      console.log(json);
  };

  return (
    <div className="email-container">
      <br />
      <form onSubmit={methods.handleSubmit(emailSubmit)}>
        <label>Seperate items with comma e.g. apple, orange</label>
        <Controller
          as={<textarea />}
          control={methods.control}
          placeholder="fill here"
          fullWidth
          name={"stock"}
          defaultValue=""
          required
        />

        <button className="sidepanel-option">submit</button>
      </form>
    </div>
  );
};
