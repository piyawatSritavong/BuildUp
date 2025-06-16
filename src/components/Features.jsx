import React from 'react';
import { LightBulbIcon, VideoCameraIcon, WifiIcon } from '@heroicons/react/24/solid';

const features = [
  { name: 'เดินไฟ', icon: LightBulbIcon },
  { name: 'ติดกล้อง', icon: VideoCameraIcon },
  { name: 'เดิน Wi-Fi', icon: WifiIcon },
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-8 sm:space-x-16">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center">
              <div className="bg-blue-100 rounded-full p-4">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <p className="mt-2 font-semibold text-gray-700">{feature.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;