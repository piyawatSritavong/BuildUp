import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [activeTab, setActiveTab] = useState('client'); // 'client' or 'contractor'

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4">
            <div className="max-w-md w-full">
                <div className="bg-white p-8 rounded-2xl shadow-2xl">
                    <div className="text-center mb-8">
                        <Link to="/" className="text-3xl font-bold text-blue-600">
                            BuilderHub
                        </Link>
                        <h2 className="mt-4 text-2xl font-bold text-gray-800">ยินดีต้อนรับกลับมา</h2>
                    </div>

                    {/* Tabs */}
                    <div className="flex bg-gray-200 rounded-lg p-1 mb-6">
                        <button 
                            onClick={() => setActiveTab('client')}
                            className={`w-1/2 py-2 rounded-md font-semibold transition-colors ${activeTab === 'client' ? 'bg-white text-blue-600 shadow' : 'text-gray-600'}`}
                        >
                            ลูกค้า
                        </button>
                        <button 
                            onClick={() => setActiveTab('contractor')}
                            className={`w-1/2 py-2 rounded-md font-semibold transition-colors ${activeTab === 'contractor' ? 'bg-white text-blue-600 shadow' : 'text-gray-600'}`}
                        >
                            ช่าง/ผู้รับเหมา
                        </button>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label className="font-semibold text-gray-700 block mb-2">อีเมล</label>
                            <input type="email" placeholder="you@example.com" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"/>
                        </div>
                        <div>
                            <label className="font-semibold text-gray-700 block mb-2">รหัสผ่าน</label>
                            <input type="password" placeholder="••••••••" className="w-full p-3 border border-gray-300 rounded-lg"/>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center space-x-2 text-gray-600">
                                <input type="checkbox" className="h-4 w-4 rounded text-blue-600"/>
                                <span>จำฉันไว้ในระบบ</span>
                            </label>
                            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                ลืมรหัสผ่าน?
                            </a>
                        </div>

                        <div>
                            <button type="submit" className="w-full bg-blue-600 text-white font-bold text-lg py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                                เข้าสู่ระบบ
                            </button>
                        </div>
                    </form>
                </div>
                <p className="mt-6 text-center text-sm text-gray-600">
                    ยังไม่มีบัญชี?{' '}
                    <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
                        ลงทะเบียนที่นี่
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Login = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             เข้าสู่ระบบ
//           </h2>
//         </div>
//         <form className="mt-8 space-y-6 bg-white p-8 rounded-lg shadow-lg">
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <label htmlFor="email-address" className="sr-only">อีเมล</label>
//               <input id="email-address" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="อีเมล" />
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">รหัสผ่าน</label>
//               <input id="password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="รหัสผ่าน" />
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="text-sm">
//               <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
//                 ลืมรหัสผ่าน?
//               </a>
//             </div>
//           </div>

//           <div>
//             <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
//               เข้าสู่ระบบ
//             </button>
//           </div>
//         </form>
//         <p className="mt-2 text-center text-sm text-gray-600">
//           ยังไม่มีบัญชี?{' '}
//           <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
//             ลงทะเบียนที่นี่
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;