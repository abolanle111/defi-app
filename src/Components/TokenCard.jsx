import React, { useState, useEffect } from "react";

const TokenCard = ({ id }) => {
  const [tokenData, setTokenData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //   const options = {
  //     method: 'GET',
  //     headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-8UWjHwjQa1aQMqVpQUcUJifH'}

  //  };

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTokenData(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <div className="token-content">
      {tokenData && (
        <div className="token-info">
          <img src={tokenData.image.small} alt="" className="token-logo" />
          <div className="token-title-content">
            <span className="token-title">{tokenData.name}</span>
            <span className="token-long">{tokenData.asset_platform_id}</span>
          </div>
        </div>
      )}
      <div className="token-amount">
        <div className="amount">5</div>
        <div className="amount-long">
          <div className="price">
            {tokenData.market_data.current_price.usd}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
