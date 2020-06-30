import React, { useEffect } from "react";

export const Dietary = ({ match }) => {
  useEffect(() => {
    console.log(match);
  }, []);
  return <div className="shop">DIETARY</div>;
};
