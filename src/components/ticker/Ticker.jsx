import React, { useState } from "react";

import Ticker from "react-ticker";
import PageVisibility from "react-page-visibility";

export const TickerBanner = () => {
  const [pageIsVisible, setPageIsVisible] = useState(true);

  const handleVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible);
  };

  return (
    <div className="ticker-container">
      <PageVisibility onChange={handleVisibilityChange}>
        {pageIsVisible && (
          <Ticker>
            {({ index }) => (
              <>
                <h3 style={{ color: "#ff1694", fontWeight: 400 }}>
                  New products being added every day! Check out our different
                  selections! Ranging from International, Sweets & Candy, Pick &
                  Mix and Much much more!...
                </h3>
                <img src="www.my-image-source.com/" alt="" />
              </>
            )}
          </Ticker>
        )}
      </PageVisibility>
    </div>
  );
};
