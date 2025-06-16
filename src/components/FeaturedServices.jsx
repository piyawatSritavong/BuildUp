import React from 'react';
import ServiceCard from './ServiceCard';

const mockServices = [
  {
    id: 1,
    title: 'SK Electric',
    description: 'บริการติดตั้งระบบไฟฟ้าในอาคาร',
    price: '1,200',
    image: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    discount: null,
  },
  {
    id: 2,
    title: 'Vong Electric',
    description: 'เดินสายไฟฟ้าภายในบ้านโดยมืออาชีพ',
    price: '900',
    image: 'https://images.pexels.com/photos/8005396/pexels-photo-8005396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    discount: null,
  },
  {
    id: 3,
    title: 'ช่างสับชัย',
    description: 'รับติดตั้งไฟฟ้าทุกประเภท',
    price: '500',
    image: 'https://images.pexels.com/photos/1078879/pexels-photo-1078879.jpeg',
    discount: null,
  },
  {
    id: 4,
    title: 'Chai Engineering',
    description: 'บริการติดตั้งระบบ Wi-Fi พร้อมเซ็ตอัพ',
    price: '1,350',
    image: 'https://images.pexels.com/photos/5653734/pexels-photo-5653734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    discount: '10',
  },
];

const FeaturedServices = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">ช่างไฟฟ้าและบริการแนะนำ</h2>
        <div className="flex justify-center space-x-2 mb-10">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">หมวดหมู่ทั้งหมด</button>
            <button className="bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100">เดินระบบไฟ</button>
            <button className="bg-white border border-gray-300 text-gray-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100">ติดตั้งอินเวอร์เตอร์</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockServices.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;