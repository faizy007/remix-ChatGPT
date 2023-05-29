import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="w-full p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* <img src={data.image} alt={data.title} className="w-full h-40 object-cover object-center rounded-t-lg" /> */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2 truncate">{data?.message}</h2>
          <p className="text-gray-700 truncate">{data?.result}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;