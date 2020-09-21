import React from "react";
import { Helmet } from "react-helmet";

export const AllergyInformation = () => {
  return (
    <div className="static-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Candy Kabin - ALLERGY INFORMATION</title>
        <meta
          name="description"
          content="You can also see the ingredients on all of our product pages. Simply select the product that you require and scroll down to the 'Product Description' section."
        />
        <meta
          name="keywords"
          content="Candy Kabin, Rochdale, Delivery information, Candy, Sweets, American, Chocolate, International, Traditional, Pick and Mix, Jolly Rancher, Calypso, M&M's, Sour Patch, Fanta, Nestle, Hershey's, Twix, Kool-Aid"
        />
      </Helmet>
      <div className="static-page-title-container">
        <h1>INFORMATION ON ALLEGENS</h1>
      </div>
      <div className="static-page-info-container">
        <br />

        <br />
        <p>
          Our team at Candy Kabin do everything that we can to ensure that all
          of the information shown on all of the product pages contain a list of
          the most recent ingredients and allergen information.
        </p>
        <br />
        <p>
          Should you have any questions regarding the ingredients contained
          within our products please contact us directly where a member of our
          team will be able to assist you. All information on the products that
          we stock can also be found through a search online. <br />
          <br />
          To make a search online simply type the sweet name in question
          followed by 'ingredients' or 'allergy information'. This can often
          give you the info you require in a quick and timely manner.
          <br />
          <br />
          You can also see the ingredients on all of our product pages. Simply
          select the product that you require and scroll down to the 'Product
          Description' section.
          <br />
          <br />
          We ensure that all allergens are displayed in CAPS and / or bold
          fonts.
          <br />
          <br />
          Please note: We display the ingredients in the same way that they
          appear on the sweet packaging, box or bag.
          <br />
          <br />
          Candy Kabin work to the strictest of standards and ensure that all
          products are stored in accordance with the highest of hygiene levels.
          All surfaces and storage areas are cleaned regularly throughout the
          day.
          <br />
          <br />
          Please be aware that sweets containing nuts, sugar, soya, wheat and
          other allergens are picked and packed in the same place as those
          sweets that don't.
          <br />
          <br />
          Should you have any questions regarding allergens, more info on a
          product or brand please contact us directly on the below;
          <br />
          <br />
          <span style={{ fontWeight: 600 }}>
            Enquiries - Email: candykabin@gmail.com
          </span>
          <br />
          <br />
          <span style={{ fontWeight: 600 }}>Telephone: +44 7821 127312</span>
        </p>
        <br />
        <br />
      </div>
    </div>
  );
};
