import React from "react";
import { Helmet } from "react-helmet";
export const CustomerServices = () => {
  return (
    <div className="static-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Candy Kabin - CUSTOMER SERVICES</title>
        <meta
          name="description"
          content="At Candy Kabin we go to great lengths to ensure your shopping experience is as easy and secure as possible"
        />
        <meta
          name="keywords"
          content="Candy Kabin, Rochdale, Delivery information, Candy, Sweets, American, Chocolate, International, Traditional, Pick and Mix, Jolly Rancher, Calypso, M&M's, Sour Patch, Fanta, Nestle, Hershey's, Twix, Kool-Aid"
        />
      </Helmet>
      <div className="static-page-title-container">
        <h1>CUSTOMER SERVICES</h1>
      </div>
      <div className="static-page-info-container">
        <br />
        <h4>Help & Support</h4>
        <br />
        <p>
          Our customer services team are able to help with any and all
          enquiries. Should you need any help ordering a product, wish to check
          availability, have questions regarding allergens or anything that
          relates to our products please feel free to contact our team directly
          on 01706 632402.
        </p>
        <br />
        <h4>I'm new, how do I order?</h4>
        <br />
        <p>
          At Candy Kabin we go to great lengths to ensure your shopping
          experience is as easy and secure as possible. You can use the
          drop-down navigation across the top of the menu on the side to
          navigate through our sections. You can also filter our products by,
          colour, flavour, theme or brand.
          <br />
          <br />
          If you want to add an item to your cart, click the 'BUY ITEM' buttons,
          then either of the 'YES' buttons on the pop-up.
          <br />
          <br />
          Once you have finished shopping simply go to the checkout, you can
          either choose to register which will enable you to move through the
          checkout process faster, shop multiple delivery addresses, view and
          track your orders or checkout as a guest.
          <br />
          <br />
          You can then choose the method of shipping you would like and continue
          to payment. If you are happy with the order, confirm the payment and
          the item(s) will be dispatched to you.
        </p>
        <br />
        <h4>Payment, Pricing & Promotions</h4>
        <br />
        <p>
          Security is probably one of the most significant concerns for both
          Candy Kabin and our customers during an online transaction. In
          reality, an online transaction is probably more secure than a card
          transaction in a shop or conducted over the telephone or by fax, as
          the information transmitted online is highly encrypted using
          complicated logarithm combinations.
        </p>
        <br />
      </div>
    </div>
  );
};
