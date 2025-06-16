import React from 'react';

const ArtisanProfileCard = ({ image, name, rating, specialty }) => {
  return (
    <div className="flex-shrink-0 w-64 bg-white rounded-xl shadow-lg overflow-hidden m-2">
      <img className="h-40 w-full object-cover" src={image} alt={name} />
      <div className="p-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm text-gray-500">{specialty}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">{'★'.repeat(rating)}</span>
          <span className="text-gray-400">{'★'.repeat(5 - rating)}</span>
        </div>
        <button className="w-full mt-4 bg-blue-100 text-blue-700 font-semibold py-2 rounded-lg hover:bg-blue-200 transition-colors">
          ดูโปรไฟล์
        </button>
      </div>
    </div>
  );
};

export default ArtisanProfileCard;