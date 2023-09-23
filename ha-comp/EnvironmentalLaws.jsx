import React from 'react';
import './EnvironmentalLaws.css';

const environmentalLawsData = [
  {
    title: 'Air Quality Regulation',
    content:
      'Environmental laws regulate air quality standards to reduce air pollution and protect public health.',
  },
  {
    title: 'Water Pollution Control',
    content:
      'Laws address the prevention and control of water pollution to safeguard water bodies and aquatic ecosystems.',
  },
  {
    title: 'Waste Management',
    content:
      'Environmental laws govern the proper disposal and management of hazardous and non-hazardous waste materials.',
  },
  {
    title: 'Conservation of Wildlife',
    content:
      'Laws protect wildlife and their habitats, including endangered species, to prevent their extinction.',
  },
  {
    title: 'Forest Conservation',
    content:
      'Legal provisions aim to conserve forests, prevent deforestation, and promote afforestation and reforestation.',
  },
  {
    title: 'Environmental Impact Assessment',
    content:
      'Laws require assessing the environmental impact of large projects before they are approved to minimize adverse effects.',
  },
];

const EnvironmentalLaws = () => {
  return (
    <div className="environmental-laws-container">
      {environmentalLawsData.map((law, index) => (
        <div key={index} className="environmental-laws-card">
          <h2 className='font-bold'>{law.title}</h2> {/* Change text color to white */}
          <p className='text-2xl'>{law.content}</p> {/* Change text color to white */}
        </div>
      ))}
    </div>
  );
};

export default EnvironmentalLaws;
