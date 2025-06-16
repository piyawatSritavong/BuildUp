import React from 'react';
import ServiceCard from '../components/ServiceCard'; // Reuse from before

const servicesList = [
  'ตรวจสอบระบบไฟฟ้า', 'ออกแบบระบบไฟฟ้า', 'ติดตั้งไฟฟ้า ภายใน',
  'ติดตั้งไฟฟ้า ภายนอก', 'ติดตั้งกล้องวงจรปิด', 'ซ่อมเครื่องใช้ไฟฟ้า',
  'ติดตั้งประตูไฟฟ้า', 'ซ่อมตู้เมนไฟฟ้า', 'ซ่อม/ล้างแอร์', 'ติดตั้ง Wi-Fi'
];
const mockTechnicians = [
    { id: 1, title: 'ช่างเอก ไฟฟ้าครบวงจร', description: 'รับตรวจสอบและติดตั้งระบบไฟฟ้าในบ้านและคอนโด', price: 'เริ่มต้น 800', image: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg' },
    { id: 2, title: 'CCTV Pro Service', description: 'ติดตั้งกล้องวงจรปิดคมชัดสูง ดูผ่านมือถือได้', price: '1,500/จุด', image: 'https://images.pexels.com/photos/2239655/pexels-photo-2239655.jpeg' },
    { id: 3, title: 'Air-Cool Service', description: 'บริการล้างแอร์ ซ่อมแอร์ เติมน้ำยาแอร์', price: 'เริ่มต้น 500', image: 'https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg' },
    { id: 4, title: 'Vong Electric', description: 'เดินสายไฟฟ้าภายในบ้านโดยมืออาชีพ', price: '900', image: 'https://images.pexels.com/photos/8005396/pexels-photo-8005396.jpeg'},
    { id: 5, title: 'สมชาย การไฟฟ้า', description: 'ไฟฟ้าภายในอาคาร', price: '1,000', image: 'https://images.pexels.com/photos/8459468/pexels-photo-8459468.jpeg' },
    { id: 6, title: 'P-Net CCTV', description: 'ติดตั้งกล้องวงจรปิด', price: '1,250/จุด', image: 'https://images.pexels.com/photos/2239655/pexels-photo-2239655.jpeg' },
];


const AllServices = () => {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900">ค้นหาช่างไฟฟ้ามืออาชีพ</h1>
                    <p className="text-lg text-gray-600 mt-2">เลือกจากหมวดหมู่ หรือค้นหาตามความต้องการของคุณ</p>
                </div>
                
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className="lg:w-1/4">
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="font-bold text-xl mb-4 border-b pb-3">ประเภทบริการ</h3>
                            <ul className="space-y-3">
                                {servicesList.map(service => (
                                    <li key={service}>
                                        <label className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer">
                                            <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                            <span>{service}</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="lg:w-3/4">
                        <div className="mb-6">
                            <input 
                                type="text" 
                                placeholder="ค้นหาช่างที่คุณต้องการ..."
                                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {mockTechnicians.map(tech => (
                                <ServiceCard key={tech.id} service={tech} />
                            ))}
                        </div>
                        {/* Pagination */}
                        <div className="mt-12 flex justify-center">
                            <nav className="flex rounded-md shadow">
                                <a href="#" className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50">Previous</a>
                                <a href="#" className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100">1</a>
                                <a href="#" className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">2</a>
                                <a href="#" className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50">3</a>
                                <a href="#" className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50">Next</a>
                            </nav>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default AllServices;

// import React from 'react';
// import ServiceCard from '../components/ServiceCard'; // Component เดิม

// const servicesList = [
//   'ตรวจสอบระบบไฟฟ้า', 'ออกแบบระบบไฟฟ้า/เขียนแบบไฟฟ้า', 'ติดตั้ง/ซ่อม ระบบไฟฟ้า ภายในอาคาร',
//   'ติดตั้ง/ซ่อม ระบบไฟฟ้า ภายนอกอาคาร', 'ติดตั้ง/ซ่อม กล้องวงจรปิด', 'ติดตั้ง/ซ่อม เครื่องใช้ไฟฟ้า และอิเล็กทรอนิกส์',
//   'ติดตั้ง/ซ่อม ประตูไฟฟ้า', 'ติดตั้ง/ซ่อม ตู้เมนไฟฟ้า', 'ติดตั้ง/ซ่อม/ล้าง ระบบปรับอากาศ/แอร์', 'ติดตั้ง ไวไฟ'
// ];

// // Mock data สำหรับช่าง
// const mockTechnicians = [
//   { id: 1, title: 'ช่างเอก ไฟฟ้าครบวงจร', description: 'รับตรวจสอบและติดตั้งระบบไฟฟ้าในบ้านและคอนโด', price: 'เริ่มต้น 800', image: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg' },
//   { id: 2, title: 'CCTV Pro Service', description: 'ติดตั้งกล้องวงจรปิดคมชัดสูง ดูผ่านมือถือได้', price: '1,500/จุด', image: 'https://images.pexels.com/photos/2239655/pexels-photo-2239655.jpeg' },
//   { id: 3, title: 'Air-Cool Service', description: 'บริการล้างแอร์ ซ่อมแอร์ เติมน้ำยาแอร์', price: 'เริ่มต้น 500', image: 'https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg' },
//   { id: 4, title: 'Vong Electric', description: 'เดินสายไฟฟ้าภายในบ้านโดยมืออาชีพ', price: '900', image: 'https://images.pexels.com/photos/8005396/pexels-photo-8005396.jpeg'},
// ];

// const AllServices = () => {
//   return (
//     <div className="bg-gray-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <h1 className="text-4xl font-bold text-center mb-8">บริการช่างทั้งหมด</h1>
        
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Sidebar สำหรับ Filter */}
//           <aside className="md:w-1/4">
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="font-bold text-lg mb-4">หมวดหมู่บริการไฟฟ้า</h3>
//               <ul>
//                 {servicesList.map(service => (
//                   <li key={service} className="mb-2">
//                     <a href="#" className="text-gray-700 hover:text-blue-600">{service}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </aside>
          
//           {/* Main Content แสดงรายการช่าง */}
//           <main className="md:w-3/4">
//              {/* Search Bar */}
//             <div className="mb-6">
//                 <input 
//                     type="text" 
//                     placeholder="ค้นหาชื่อช่าง หรือบริการ..."
//                     className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
//                 />
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
//               {mockTechnicians.map(tech => (
//                 <ServiceCard key={tech.id} service={tech} />
//               ))}
//             </div>
//             {/* Pagination สามารถเพิ่มตรงนี้ */}
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllServices;