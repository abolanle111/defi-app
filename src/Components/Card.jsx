import React from "react";

export const Card = ({ title, imgUrl, children }) => {
  return (
    <div className="card-content">
      {imgUrl && <img src={imgUrl} alt="feature-icon" />}
      {title && <h1 className="features-list-title">{title}</h1>}
      {children}
    </div>
  );
};

// export default Card;
