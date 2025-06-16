// import React from 'react';

// const BecomeContractor = () => {
//     return (
//         <div className="bg-gray-100 py-12 px-4">
//             <div className="container mx-auto max-w-4xl">
//                 <div className="text-center mb-10">
//                     <h1 className="text-4xl font-extrabold text-gray-900">เข้าร่วมเครือข่ายช่างมืออาชีพ</h1>
//                     <p className="text-lg text-gray-600 mt-2">สร้างโปรไฟล์ของคุณ และเข้าถึงลูกค้าใหม่ๆ ได้ทันที</p>
//                 </div>

//                 <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
//                     <div className="flex items-center mb-8">
//                         {/* Step Indicator */}
//                         <div className="flex-1 text-center">
//                             <div className="w-10 h-10 mx-auto bg-blue-600 text-white rounded-full text-lg flex items-center justify-center">1</div>
//                             <p className="text-xs text-gray-800 mt-2 font-semibold">ข้อมูลส่วนตัว</p>
//                         </div>
//                         <div className="flex-1 border-t-2 border-gray-200"></div>
//                         <div className="flex-1 text-center">
//                             <div className="w-10 h-10 mx-auto bg-gray-300 text-gray-500 rounded-full text-lg flex items-center justify-center">2</div>
//                             <p className="text-xs text-gray-500 mt-2">ข้อมูลบริการ</p>
//                         </div>
//                          <div className="flex-1 border-t-2 border-gray-200"></div>
//                         <div className="flex-1 text-center">
//                             <div className="w-10 h-10 mx-auto bg-gray-300 text-gray-500 rounded-full text-lg flex items-center justify-center">3</div>
//                             <p className="text-xs text-gray-500 mt-2">ยืนยันตัวตน</p>
//                         </div>
//                     </div>

//                     <form className="space-y-8">
//                         <h2 className="text-2xl font-bold text-gray-800">ขั้นตอนที่ 1: ข้อมูลส่วนตัว</h2>
//                         <div className="grid md:grid-cols-2 gap-6">
//                             <div>
//                                 <label className="font-semibold text-gray-700 block mb-2">ชื่อ-นามสกุล *</label>
//                                 <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
//                             </div>
//                             <div>
//                                 <label className="font-semibold text-gray-700 block mb-2">ชื่อบริษัท (ถ้ามี)</label>
//                                 <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" />
//                             </div>
//                         </div>
//                         <div className="grid md:grid-cols-2 gap-6">
//                             <div>
//                                 <label className="font-semibold text-gray-700 block mb-2">อีเมล *</label>
//                                 <input type="email" className="w-full p-3 border border-gray-300 rounded-lg" />
//                             </div>
//                             <div>
//                                 <label className="font-semibold text-gray-700 block mb-2">เบอร์โทรศัพท์ *</label>
//                                 <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg" />
//                             </div>
//                         </div>
//                         <div>
//                             <label className="font-semibold text-gray-700 block mb-2">ที่อยู่ / พื้นที่ให้บริการหลัก</label>
//                             <textarea className="w-full p-3 border border-gray-300 rounded-lg" rows="3"></textarea>
//                         </div>

//                         <div className="pt-6 text-right">
//                             <button type="button" className="bg-blue-600 text-white font-bold text-lg py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
//                                 ดำเนินการต่อ
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BecomeContractor;

import React from 'react';

const BecomeContractor = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-2">ร่วมเป็นพาร์ทเนอร์กับเรา</h1>
        <p className="text-center text-gray-600 mb-8">กรอกข้อมูลเพื่อสมัครเป็นช่าง/ผู้รับเหมา และเริ่มรับงานใหม่ๆ</p>
        
        <form className="bg-gray-50 p-8 rounded-lg shadow-lg space-y-6">
          <h2 className="text-2xl font-bold border-b pb-4">ข้อมูลส่วนตัว / บริษัท</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="font-semibold text-gray-700 block mb-1">ชื่อ-นามสกุล / ชื่อบริษัท</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg"/>
            </div>
            <div>
              <label className="font-semibold text-gray-700 block mb-1">เบอร์โทรศัพท์</label>
              <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg"/>
            </div>
          </div>
          <div>
            <label className="font-semibold text-gray-700 block mb-1">อีเมล</label>
            <input type="email" className="w-full p-3 border border-gray-300 rounded-lg"/>
          </div>
          <div>
            <label className="font-semibold text-gray-700 block mb-1">สร้างรหัสผ่าน</label>
            <input type="password" className="w-full p-3 border border-gray-300 rounded-lg"/>
          </div>
          
          <h2 className="text-2xl font-bold border-b pb-4 pt-4">ข้อมูลเกี่ยวกับงาน</h2>
           <div>
              <label className="font-semibold text-gray-700 block mb-1">เลือกประเภทงานที่เชี่ยวชาญ (เลือกได้มากกว่า 1)</label>
              <div className="grid sm:grid-cols-2 gap-2 mt-2">
                 {['ติดตั้งไฟฟ้า', 'ซ่อมไฟฟ้า', 'ติดตั้งแอร์', 'ล้างแอร์', 'ติดตั้งกล้องวงจรปิด', 'ติดตั้งไวไฟ'].map(item => (
                    <label key={item} className="flex items-center space-x-2 p-2 bg-white rounded border">
                        <input type="checkbox" className="h-4 w-4 text-blue-600"/>
                        <span>{item}</span>
                    </label>
                 ))}
              </div>
           </div>
          
          <div className="pt-6">
            <button type="submit" className="w-full bg-blue-600 text-white font-bold text-lg py-3 px-6 rounded-lg hover:bg-blue-700">
              สมัครเป็นช่าง
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BecomeContractor;