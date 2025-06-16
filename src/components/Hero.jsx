import React from 'react';

const Hero = () => {
  return (
    <section className="bg-blue-50 py-12 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            หาช่างที่ใช่ <span className="text-blue-600">ง่ายในไม่กี่คลิก</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            แพลตฟอร์มรวมช่างและบริษัทรับเหมา พร้อมรีวิวและผลงานจริง ให้คุณเปรียบเทียบและตัดสินใจได้ง่ายขึ้น
          </p>
          <div className="mt-8 max-w-2xl mx-auto bg-white p-2 rounded-lg shadow-lg flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <button className="w-full sm:w-auto flex-1 bg-blue-600 text-white px-6 py-3 rounded-md font-semibold">ค้นหาช่าง</button>
            <button className="w-full sm:w-auto flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-md font-semibold">หมวดงาน</button>
            <button className="w-full sm:w-auto flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-md font-semibold">จังหวัด</button>
          </div>
          <div className="mt-6 text-left max-w-xl mx-auto text-gray-700 space-y-2">
              <p className="flex items-center"><span className="text-green-500 mr-2">✓</span> แมชช่างง่ายเป็นปัจเจก (ตรวจงวดได้ ตรวจหน้าไซ้ได้)</p>
              <p className="flex items-center"><span className="text-green-500 mr-2">✓</span> Monitoring Checklist งานแต่ละขั้น</p>
              <p className="flex items-center"><span className="text-green-500 mr-2">✓</span> แชทสอบถามคิวใจ ไปถึงงบรอ</p>
              <p className="flex items-center"><span className="text-green-500 mr-2">✓</span> ทําราคากลางจากพื้นที่ทางไลน์</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;