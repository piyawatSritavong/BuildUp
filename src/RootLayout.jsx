import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header' // ใช้ Header เดิม
import Footer from './components/Footer' // ใช้ Footer เดิม

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* ส่วนนี้คือเนื้อหาของแต่ละหน้าที่จะเปลี่ยนไป */}
      </main>
      <Footer />
    </>
  )
}

export default RootLayout