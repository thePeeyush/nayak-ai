import React from 'react';
import './ConsumerRights.css';

const consumerRightsData = [
  {
    title: 'Right to Safety',
    content:
      'Consumers have the right to be protected against products, production processes, and services that may be hazardous to health or life.',
  },
  {
    title: 'Right to Information',
    content:
      'Consumers have the right to be informed about the quality, quantity, and price of goods or services so they can make informed choices.',
  },
  {
    title: 'Right to Choose',
    content:
      'Consumers have the right to select from a variety of products and services at competitive prices with an assurance of quality.',
  },
  {
    title: 'Right to Redressal',
    content:
      'Consumers have the right to seek compensation or redressal for any unfair trade practices or exploitation.',
  },
  {
    title: 'Right to Consumer Education',
    content:
      'Consumers have the right to acquire knowledge and skills to make informed and confident choices.',
  },
  {
    title: 'Right to a Healthy Environment',
    content:
      'Consumers have the right to live and work in an environment that does not threaten the well-being of present and future generations.',
  },
];

const ConsumerRights = () => {
  return (
    <div className="consumer-rights-container">
      {consumerRightsData.map((right, index) => (
        <div key={index} className="consumer-right-card">
          <h2 className='font-bold'>{right.title}</h2> {/* Change text color to white */}
          <p className='text-2xl'>{right.content}</p> {/* Change text color to white */}
        </div>
      ))}
    </div>
  );
};

export default ConsumerRights;
