import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4">
            <div className="max-w-3xl w-full text-center">
                <h2 className="text-4xl font-extrabold text-gray-900">
                    สร้างบัญชีเพื่อเริ่มต้นใช้งาน
                </h2>
                <p className="mt-4 text-lg text-gray-600">คุณต้องการลงทะเบียนในฐานะใด?</p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Choice for Client */}
                    <Link to="/register-client" className="block p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                        <div className="text-6xl mb-4">👤</div>
                        <h3 className="text-2xl font-bold text-gray-800">ฉันเป็นลูกค้า</h3>
                        <p className="mt-2 text-gray-600">ที่กำลังมองหาช่างฝีมือดีสำหรับโปรเจคของฉัน</p>
                        <div className="mt-6 font-bold text-blue-600">ลงทะเบียนเลย →</div>
                    </Link>

                    {/* Choice for Contractor */}
                    <Link to="/become-contractor" className="block p-8 bg-blue-600 text-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                        <div className="text-6xl mb-4">👷‍♂️</div>
                        <h3 className="text-2xl font-bold">ฉันเป็นช่าง/ผู้รับเหมา</h3>
                        <p className="mt-2 text-blue-100">ที่ต้องการหางานและแสดงผลงานคุณภาพ</p>
                         <div className="mt-6 font-bold text-white">ลงทะเบียนเลย →</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Register = () => {
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-2xl w-full space-y-8 text-center">
//                 <h2 className="text-3xl font-extrabold text-gray-900">
//                     สร้างบัญชีใหม่
//                 </h2>
//                 <p className="text-lg text-gray-600">คุณต้องการลงทะเบียนในฐานะใด?</p>

//                 <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
//                     {/* Choice for Client */}
//                     <Link to="/register-client" className="block p-8 bg-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
//                         <div className="text-5xl">👤</div>
//                         <h3 className="mt-4 text-2xl font-bold text-gray-800">ฉันเป็นลูกค้า</h3>
//                         <p className="mt-2 text-gray-600">ที่กำลังมองหาช่างฝีมือดี</p>
//                     </Link>

//                     {/* Choice for Contractor */}
//                     <Link to="/become-contractor" className="block p-8 bg-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
//                         <div className="text-5xl">👷‍♂️</div>
//                         <h3 className="mt-4 text-2xl font-bold text-gray-800">ฉันเป็นช่าง/ผู้รับเหมา</h3>
//                         <p className="mt-2 text-gray-600">ที่ต้องการหางานและแสดงผลงาน</p>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;