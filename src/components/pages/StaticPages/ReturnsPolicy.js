import React from "react";
import { Helmet } from "react-helmet";

export const ReturnsPolicy = () => {
  return (
    <div className="static-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Candy Kabin - PRODUCT RETURNS</title>
        <meta
          name="description"
          content="You may return unopened items within 7 days of delivery ... contact us directly on +44 7857 563943"
        />
        <meta
          name="keywords"
          content="Candy Kabin, Rochdale, Delivery information, Candy, Sweets, American, Chocolate, International, Traditional, Pick and Mix, Jolly Rancher, Calypso, M&M's, Sour Patch, Fanta, Nestle, Hershey's, Twix, Kool-Aid"
        />
      </Helmet>
      <div className="static-page-title-container">
        <h1>Product Returns</h1>
      </div>
      <div className="static-page-info-container">
        <br />
        <br />
        <p>
          Candy Kabin encourage all customers to contact them directly regarding
          any orders set for a return.
        </p>
        <br />
        <p>
          You may return unopened items within 7 days of delivery for a full
          refund. We'll also pay the return shipping costs if the return is a
          result of our error (you received an incorrect or damaged item, etc.).
          Please contact us first before returning any item so that we can issue
          you a returns number and arrange collection.
        </p>
        <br />
        <p>
          You should expect to receive your refund within 3 working days once we
          have received your items back with us
        </p>
        <br />
        <p>
          Should you have any questions regarding an order please contact us
          directly on +44 7857 563943.
        </p>

        <br />
      </div>
    </div>
  );
};
