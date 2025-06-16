import React from 'react';

const CategoryCard = ({ icon, name }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center cursor-pointer border border-gray-100">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mx-auto mb-4">
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="font-bold text-gray-800">{name}</h3>
    </div>
  );
};

export default CategoryCard;