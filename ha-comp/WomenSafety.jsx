import React from 'react';
import './WomenSafety.css';

const womenSafetyData = [
  {
    title: 'Right to Personal Security',
    content:
      'Women have the right to personal security and protection against any form of violence or harassment, whether at home or in public places.',
  },
  {
    title: 'Right to Dignity',
    content:
      'Women have the right to live with dignity and be free from any form of humiliation or degrading treatment.',
  },
  {
    title: 'Right to Equality',
    content:
      'Women have the right to be treated as equal citizens and not be discriminated against based on their gender.',
  },
  {
    title: 'Right to Legal Redressal',
    content:
      'Women have the right to seek legal redressal and protection from the law against any form of violence, abuse, or discrimination.',
  },
  {
    title: 'Right to Education',
    content:
      'Women have the right to education and the opportunity to pursue their academic and professional aspirations.',
  },
  {
    title: 'Right to Work',
    content:
      'Women have the right to work and engage in economic activities without facing discrimination or harassment.',
  },
];

const WomenSafety = () => {
  return (
    <div className="women-safety-container">
      {womenSafetyData.map((right, index) => (
        <div key={index} className="women-safety-card">
          <h2 className='font-bold'>{right.title}</h2> {/* Change text color to white */}
          <p className="text-white">{right.content}</p> {/* Change text color to white */}
        </div>
      ))}
    </div>
  );
};

export default WomenSafety;
