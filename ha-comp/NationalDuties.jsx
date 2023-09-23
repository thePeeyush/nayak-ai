import React from 'react';
import './NationalDuties.css';

const nationalDutiesData = [
  {
    title: 'Duty to Uphold the Constitution',
    content:
      'Every citizen of India is expected to uphold and protect the integrity, sovereignty, and unity of the Indian Constitution.',
  },
  {
    title: 'Duty to Promote Harmony',
    content:
      'It is the duty of every citizen to promote harmony, tolerance, and the spirit of unity among the diverse communities of India.',
  },
  {
    title: 'Duty to Safeguard Public Property',
    content:
      'Citizens have a duty to protect public property, including heritage sites and government infrastructure, from damage and destruction.',
  },
  {
    title: 'Duty to Defend the Country',
    content:
      'It is the duty of citizens to defend India when called upon to do so, such as during times of war and national emergencies.',
  },
  {
    title: 'Duty to Contribute to Welfare',
    content:
      'Citizens have a duty to work towards the betterment of society by promoting social justice and the welfare of others.',
  },
  {
    title: 'Duty to Preserve the Environment',
    content:
      'Every citizen is expected to protect and improve the natural environment, including forests, lakes, rivers, and wildlife.',
  },
];

const NationalDuties = () => {
  return (
    <div className="national-duties-container">
      {nationalDutiesData.map((duty, index) => (
        <div key={index} className="national-duties-card">
          <h2 className='font-bold'>{duty.title}</h2> {/* Change text color to white */}
          <p className='text-2xl'>{duty.content}</p> {/* Change text color to white */}
        </div>
      ))}
    </div>
  );
};

export default NationalDuties;
