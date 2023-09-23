import React from 'react';
import './FundamentalRights.css';

const fundamentalRightsData = [
  {
    title: 'Right to Equality',
    content:
      'Article 14 to 18 of the Indian Constitution guarantees the right to equality, which includes equality before law, prohibition of discrimination on grounds of religion, race, caste, sex, or place of birth, and equality of opportunity in matters of public employment.',
  },
  {
    title: 'Right to Freedom',
    content:
      'Article 19 to 22 of the Indian Constitution provides the right to freedom, which includes freedom of speech and expression, freedom to assemble peaceably and without arms, freedom to form associations or unions, and more.',
  },
  {
    title: 'Right Against Exploitation',
    content:
      'Article 23 and 24 of the Indian Constitution prohibits trafficking in human beings and forced labor. It also prohibits employment of children in factories, mines, and other hazardous employment.',
  },
  {
    title: 'Right to Freedom of Religion',
    content:
      'Article 25 to 28 of the Indian Constitution provides the right to freedom of religion, including the freedom to profess, practice, and propagate religion, and the freedom to manage religious affairs.',
  },
  {
    title: 'Cultural and Educational Rights',
    content:
      'Article 29 and 30 of the Indian Constitution protects the cultural and educational rights of minorities, including the right to establish and administer educational institutions of their choice.',
  },
  {
    title: 'Right to Constitutional Remedies',
    content:
      'Article 32 of the Indian Constitution gives the right to constitutional remedies, which allows individuals to move the Supreme Court for the enforcement of fundamental rights.',
  },
];

const FundamentalRights = () => {
  return (
    <div className="fundamental-rights-container">
      {fundamentalRightsData.map((right, index) => (
        <div key={index} className="fundamental-right-card">
          <h2 className='font-bold'>{right.title}</h2>
          <p className='text-2xl'>{right.content}</p>
        </div>
      ))}
    </div>
  );
};

export default FundamentalRights;
