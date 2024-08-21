import React from 'react';
import PricingCard from './PricingCard';

const PricingTable = () => {
  const pricingPlans = [
    {
      planName: 'FREE',
      price: '$0/month',
      features: [
        { text: 'Single User', available: true },
        { text: '50GB Storage', available: true },
        { text: 'Unlimited Public Projects', available: true },
        { text: 'Community Access', available: true },
        { text: 'Unlimited Private Projects', available: false },
        { text: 'Dedicated Phone Support', available: false },
        { text: 'Free Subdomain', available: false },
        { text: 'Monthly Status Reports', available: false },
      ],
      buttonText: 'BUTTON',
    },
    {
      planName: 'PLUS',
      price: '$9/month',
      features: [
        { text: '5 Users', available: true },
        { text: '50GB Storage', available: true },
        { text: 'Unlimited Public Projects', available: true },
        { text: 'Community Access', available: true },
        { text: 'Unlimited Private Projects', available: true },
        { text: 'Dedicated Phone Support', available: true },
        { text: 'Free Subdomain', available: true },
        { text: 'Monthly Status Reports', available: false },
      ],
      buttonText: 'BUTTON',
    },
    {
      planName: 'PRO',
      price: '$49/month',
      features: [
        { text: 'Unlimited Users', available: true },
        { text: '50GB Storage', available: true },
        { text: 'Unlimited Public Projects', available: true },
        { text: 'Community Access', available: true },
        { text: 'Unlimited Private Projects', available: true },
        { text: 'Dedicated Phone Support', available: true },
        { text: 'Free Subdomain', available: true },
        { text: 'Monthly Status Reports', available: true },
      ],
      buttonText: 'BUTTON',
    },
  ];

  return (
    <div className="pricing-table">
      {pricingPlans.map((plan, index) => (
        <PricingCard 
          key={index}
          planName={plan.planName}
          price={plan.price}
          features={plan.features}
          buttonText={plan.buttonText}
        />
      ))}
    </div>
  );
};

export default PricingTable;
