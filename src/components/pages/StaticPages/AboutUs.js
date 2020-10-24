import React from "react";
import { Helmet } from "react-helmet";

export const AboutUs = () => {
  return (
    <div className="static-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Candy Kabin - ABOUT US</title>
        <meta
          name="description"
          content="New sweet shop Candy Kabin and best confectionary from the US & UK alike - Rochdale Online"
        />
        <meta
          name="keywords"
          content="Candy Kabin, Rochdale, About Us, Candy, Sweets, American, Chocolate, International, Traditional, Pick and Mix"
        />
      </Helmet>
      <div className="static-page-title-container">
        <h1>About Us</h1>
      </div>
      <div className="static-page-info-container">
        <br />
        <br />
        <p>
          Here at CandyKabin We want to bring the best confectionary from the US
          & UK alike all under one roof, as well as confectionary and other
          sweet products from around the world.
        </p>
        <br />
        <p>
          We started out in February 2019, opening our First store in the heart
          of Rochdale, ever since we have been expanding our growing ranges of
          American, European and British Confectionary, Drinks, Crisps, Baked
          goods and more…
        </p>
        <br />
        <p>
          Whether your young or old, CandyKabin caters for everyone, From having
          the latest & most trendiest Foreign products all the way to the proper
          old-school traditional sweets we have pretty much everything a
          candy-lover could want.
        </p>
        <br />
        <p>
          “Who can take a sunrise, sprinkle it with dew? New sweet shop Candy
          Kabin can.” <span style={{ fontWeight: 600 }}>-Rochdale Online</span>
        </p>
        <br />
        <p>
          “We,ve not seen anything much like this anywhere else with all kinds
          of sweets and confectionary all under one-roof, CandyKabin is a
          culmination of several ideas brought together.”{" "}
          <span style={{ fontWeight: 600 }}>- Rumaan Saeed (Owner)</span>
        </p>

        <br />
        <h4>Enquiries</h4>
        <br />
        <p>Email: enquiries@candykabin.co.uk </p>
        <br />
        <p>Telephone: +44 7857 563943</p>
        <br />
      </div>
    </div>
  );
};
