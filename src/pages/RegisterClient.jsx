import React from 'react';
import { Link } from 'react-router-dom';

const RegisterClient = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white p-8 rounded-2xl shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">
              ลงทะเบียนสำหรับลูกค้า
            </h2>
            <p className="mt-2 text-gray-600">
              สร้างบัญชีเพื่อเริ่มค้นหาช่างมืออาชีพสำหรับบ้านคุณ
            </p>
          </div>
          
          <form className="space-y-6">
            <div>
              <label className="font-semibold text-gray-700 block mb-2">ชื่อ-นามสกุล</label>
              <input 
                type="text" 
                placeholder="สมชาย ใจดี" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="font-semibold text-gray-700 block mb-2">อีเมล</label>
              <input 
                type="email" 
                placeholder="you@example.com" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="font-semibold text-gray-700 block mb-2">สร้างรหัสผ่าน</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="font-semibold text-gray-700 block mb-2">ยืนยันรหัสผ่าน</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="pt-2">
              <label className="flex items-center space-x-2 text-sm text-gray-600">
                  <input type="checkbox" required className="h-4 w-4 rounded text-blue-600"/>
                  <span>ฉันยอมรับ <a href="#" className="text-blue-600 hover:underline">ข้อตกลงการใช้งาน</a> และ <a href="#" className="text-blue-600 hover:underline">นโยบายความเป็นส่วนตัว</a></span>
              </label>
            </div>

            <div>
              <button 
                type="submit" 
                className="w-full bg-orange-500 text-white font-bold text-lg py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors"
              >
                ลงทะเบียน
              </button>
            </div>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          มีบัญชีอยู่แล้ว?{' '}
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
            เข้าสู่ระบบที่นี่
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterClient;