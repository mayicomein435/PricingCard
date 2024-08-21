import React from 'react';
import '../PricingTable.css';


const PricingCard = ({ planName, price, features, buttonText }) => {
  return (
    <div className="pricing-card">
      <h3>{planName}</h3>
      <p className="price">{price}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className={feature.available ? 'available' : 'unavailable'}>
            {feature.text}
          </li>
        ))}
      </ul>
      <button className="btn">{buttonText}</button>
    </div>
  );
};

export default PricingCard;
