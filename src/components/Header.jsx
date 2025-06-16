import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-blue-600">
          BuildUp
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600">ค้นหาช่าง</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">สำหรับผู้รับเหมา</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">บทความ</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">เข้าสู่ระบบ</a>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-semibold">
            ลงทะเบียน
          </a>
        </div>
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-blue-600">
            {/* Mobile menu icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;