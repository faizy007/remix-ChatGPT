import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="card">
      <img src={data.image} alt={data.title} />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
};

export default Card;