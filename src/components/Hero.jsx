import React from 'react';

const Hero = () => {
  return (
    // เปลี่ยน padding ให้เหมาะกับดีไซน์ใหม่
    <section className="bg-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* ใช้ Grid Layout สำหรับจอใหญ่ (lg) และเป็น 1 คอลัมน์สำหรับจอเล็ก */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* ----- คอลัมน์ซ้าย: เนื้อหา ----- */}
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              หาช่างที่ใช่ <br className="hidden sm:block" />
              <span className="text-blue-600">ง่ายในไม่กี่คลิก</span>
            </h1>
            
            {/* ปรับแก้สไตล์ของ Tabs */}
            <div className="mt-8 flex border-b border-gray-200">
                <button className="flex-1 text-blue-600 border-b-2 border-blue-600 py-3 font-semibold text-center">ค้นหาช่าง</button>
                <button className="flex-1 text-gray-500 py-3 font-semibold text-center hover:bg-gray-100">หมวดงาน</button>
                <button className="flex-1 text-gray-500 py-3 font-semibold text-center hover:bg-gray-100">จังหวัด</button>
            </div>

            <div className="mt-6 text-gray-700 space-y-3">
              <p className="flex items-center"><span className="text-green-500 mr-3">✓</span> แมชช่างง่ายเป็นปัจเจก (ตรวจงวดได้ ตรวจหน้าไซ้ได้)</p>
              <p className="flex items-center"><span className="text-green-500 mr-3">✓</span> Monitoring Checklist งานแต่ละขั้น</p>
              <p className="flex items-center"><span className="text-green-500 mr-3">✓</span> แชทสอบถามคิวใจ ไปถึงงบรอ</p>
              <p className="flex items-center"><span className="text-green-500 mr-3">✓</span> ทําราคากลางจากพื้นที่ทางไลน์</p>
            </div>
          </div>

          {/* ----- คอลัมน์ขวา: Mockup โทรศัพท์ ----- */}
          <div className="hidden lg:flex justify-center items-center">
            {/* ส่วนนี้คือการสร้าง Phone Mockup ทั้งหมด */}
            <div className="relative transform rotate-3">
                {/* กรอบโทรศัพท์ */}
                <div className="w-[300px] h-[600px] bg-gray-800 rounded-[40px] shadow-2xl p-4">
                    {/* หน้าจอ */}
                    <div className="w-full h-full bg-white rounded-[25px] p-2 flex flex-col">
                        {/* Notch หรือรอยบาก */}
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-gray-800 rounded-b-lg"></div>
                        
                        {/* เนื้อหาบนหน้าจอ */}
                        <div className="mt-6 flex-grow flex flex-col bg-gray-50 rounded-xl p-4">
                            <h2 className="font-bold text-gray-700">นัดช่างง่าย</h2>
                            <div className="my-4">
                                <img 
                                    src="https://images.pexels.com/photos/8459468/pexels-photo-8459468.jpeg" 
                                    alt="Contractor" 
                                    className="w-full h-32 object-cover rounded-lg"
                                />
                            </div>
                            <h3 className="font-semibold text-gray-800">ประวัติผลงาน</h3>
                            <div className="space-y-3 mt-3 text-sm">
                                <p className="text-gray-500">I. ตรวจสอบและเสนอราคา</p>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '100%'}}></div>
                                </div>
                                <p className="text-gray-500">II. ดำเนินงาน</p>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '40%'}}></div>
                                </div>
                            </div>

                            <button className="w-full mt-auto bg-blue-600 text-white py-3 rounded-lg font-bold">
                                ค้นหา
                            </button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;