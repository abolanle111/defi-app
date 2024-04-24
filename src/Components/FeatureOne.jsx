import React from "react";
import TokenCard from "./TokenCard";

const FeatureOne = () => {
  const tokens = ["0xdao", "01coin"];
  return (
    <div className="feature-content">
      <div className="swap-token">
        <div className="tokens">
          {tokens.map((token, index) => {
            return <TokenCard id={token} />;
          })}
        </div>
        <div className="f-btn">
          <button className="primary">swap</button>
        </div>
      </div>
      <div className="feature-description">
        <div className="feature-description-title">
          <h1>
            <span className="highlight">Swap</span>Any Token, Any Chain
          </h1>
        </div>
        <p className="feature-paragraph">
          Lorem&#39; ipsum dolor, sit amet consectetur adipisicing elit. Quia quam
          neque exercitationem saepe sunt nulla labore repellendus quo
          laboriosam, voluptas itaque quis possimus nesciunt voluptatibus iure,
          ad dolore corporis natus dignissimos. Voluptas doloribus ut voluptate
          ullam.
        </p>
        <div className="f-btn">
          <button className="secondary">
            <span>Swap Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureOne;
