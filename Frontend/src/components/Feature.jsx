import React from "react";

const Feature = ({ img, imgAlt, title, content }) => {
  return (
    <div className="feature-item">
      <img src={img} alt={imgAlt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Feature;
