import React from 'react';
import { HeartIcon, BookmarkIcon } from '@heroicons/react/24/outline'; // ต้องติดตั้ง heroicons: npm install @heroicons/react

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={service.image} alt={service.title} />
        {service.discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            ลด {service.discount}%
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{service.description}</p>
        <p className="text-xl font-bold text-blue-600 mt-3">{service.price.startsWith('฿') ? '' : 'เริ่มต้น '}฿{service.price.replace('฿','')}</p>
        <div className="flex justify-between items-center mt-4 text-sm text-gray-700">
          <button className="flex items-center gap-1 hover:text-pink-500">
            <HeartIcon className="h-5 w-5" />
            <span>ถูกใจ</span>
          </button>
          <button className="flex items-center gap-1 hover:text-blue-600">
            <BookmarkIcon className="h-5 w-5" />
            <span>บันทึก</span>
          </button>
          <a href="#" className="bg-blue-500 text-white px-3 py-1.5 rounded-md hover:bg-blue-600 font-semibold">
            สอบถาม/จ้าง
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;