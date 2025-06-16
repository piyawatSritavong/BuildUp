import React from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from '../components/home/CategoryCard';
import ArtisanProfileCard from '../components/home/ArtisanProfileCard';
import ServiceCard from '../components/ServiceCard';
import FeaturedServices from '../components/FeaturedServices';
import Pricing from '../components/Pricing';
import Hero from '../components/Hero';

// Mock Data
const categories = [
    { name: 'ติดตั้งไฟฟ้า', icon: '💡' },
    { name: 'ซ่อมแอร์', icon: '❄️' },
    { name: 'ติดตั้ง CCTV', icon: '📹' },
    { name: 'ตรวจสอบระบบ', icon: '🔍' },
];
const artisans = [
    { name: 'สมชาย การไฟฟ้า', specialty: 'ไฟฟ้าภายในอาคาร', rating: 5, image: 'https://images.pexels.com/photos/8459468/pexels-photo-8459468.jpeg' },
    { name: 'วิรัช แอร์เซอร์วิส', specialty: 'ซ่อมและล้างแอร์', rating: 4, image: 'https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg' },
    { name: 'P-Net CCTV', specialty: 'ติดตั้งกล้องวงจรปิด', rating: 5, image: 'https://images.pexels.com/photos/2239655/pexels-photo-2239655.jpeg' },
];
const articles = [
    { title: '5 วิธีเช็คระบบไฟฟ้าในบ้านด้วยตัวเองเบื้องต้น', image: 'https://images.pexels.com/photos/8136932/pexels-photo-8136932.jpeg' },
    { title: 'เลือกแอร์อย่างไรให้ประหยัดไฟและเหมาะกับห้อง', image: 'https://images.pexels.com/photos/7217988/pexels-photo-7217988.jpeg' },
];

const Home = () => {
    return (
        <div className="bg-gray-50">
            <Hero />

            {/* Categories Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10">บริการของเรา</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {categories.map(cat => <CategoryCard key={cat.name} {...cat} />)}
                    </div>
                </div>
            </section>

            {/* Hero Section */}
            <section className="relative bg-cover bg-center text-white py-48 px-4" style={{ backgroundImage: "url('https://images.pexels.com/photos/7217988/pexels-photo-7217988.jpeg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative container mx-auto text-center">
                    <h1 className="text-5xl font-extrabold mb-4">หาช่างไฟฟ้ามืออาชีพ ง่ายๆ แค่ปลายนิ้ว</h1>
                    <p className="text-xl mb-8">แพลตฟอร์มที่เชื่อถือได้สำหรับทุกงานช่างในบ้านคุณ</p>
                    <Link to="/services" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
                        ค้นหาช่างเลย
                    </Link>
                </div>
            </section>

            {/* Featured Artisans */}
            <section className="py-16">
                {/* <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10">ช่างแนะนำ</h2>
                    <div className="flex overflow-x-auto pb-4 -mx-4 px-4">
                        {artisans.map(artisan => <ArtisanProfileCard key={artisan.name} {...artisan} />)}
                    </div>
                </div> */}
                <FeaturedServices />
            </section>

            {/* Call to Action */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">พร้อมที่จะเริ่มหรือยัง?</h2>
                    <p className="text-gray-600 my-4">ลงทะเบียนเพื่อหาช่าง หรือเข้าร่วมเป็นพาร์ทเนอร์กับเรา</p>
                    <Link to="/register" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
                        สร้างบัญชีฟรี
                    </Link>
                </div>
            </section>

            {/* Blog Preview */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10">บทความน่ารู้จากเรา</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {articles.map(article => (
                            <div key={article.title} className="bg-white rounded-xl shadow-md overflow-hidden group">
                                <img src={article.image} alt={article.title} className="w-full h-56 object-cover" />
                                <div className="p-6">
                                    <h3 className="font-bold text-xl mb-3 h-14">{article.title}</h3>
                                    <Link to="/blog" className="text-blue-600 font-semibold hover:underline">อ่านต่อ →</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Pricing />

        </div>
    );
};

export default Home;

// import React from 'react';
// import Hero from '../components/Hero'; // ใช้ Hero ที่แก้ล่าสุด
// import FeaturedServices from '../components/FeaturedServices'; // Component เดิม

// // === Component ย่อยสำหรับหน้านี้ ===

// // Component สำหรับแสดงหมวดหมู่แนะนำ
// const CategoryShowcase = () => {
//   const categories = [
//     { name: 'ตรวจสอบระบบไฟฟ้า', icon: '🔍' },
//     { name: 'ติดตั้ง/ซ่อมไฟฟ้า', icon: '💡' },
//     { name: 'ติดตั้งกล้องวงจรปิด', icon: '📹' },
//     { name: 'ติดตั้งแอร์', icon: '❄️' },
//   ];
//   return (
//     <div className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8">หมวดหมู่บริการยอดนิยม</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {categories.map(cat => (
//             <div key={cat.name} className="bg-gray-100 p-6 rounded-lg text-center hover:bg-blue-100 hover:shadow-lg transition-all cursor-pointer">
//               <div className="text-4xl mb-4">{cat.icon}</div>
//               <h3 className="font-semibold">{cat.name}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Component สำหรับแสดงบทความ
// const ArticleHighlight = () => {
//     // Mock data
//     const articles = [
//         { title: '5 วิธีเช็คระบบไฟฟ้าในบ้านด้วยตัวเองเบื้องต้น', image: 'https://images.pexels.com/photos/8136932/pexels-photo-8136932.jpeg' },
//         { title: 'เลือกแอร์อย่างไรให้ประหยัดไฟและเหมาะกับห้อง', image: 'https://images.pexels.com/photos/7217988/pexels-photo-7217988.jpeg' },
//     ];
//     return (
//         <div className="py-16 bg-gray-50">
//             <div className="container mx-auto px-4">
//                 <h2 className="text-3xl font-bold text-center mb-8">บทความน่ารู้</h2>
//                 <div className="grid md:grid-cols-2 gap-8">
//                     {articles.map(article => (
//                         <div key={article.title} className="bg-white rounded-lg shadow-md overflow-hidden">
//                             <img src={article.image} alt={article.title} className="w-full h-56 object-cover" />
//                             <div className="p-6">
//                                 <h3 className="font-bold text-xl mb-3">{article.title}</h3>
//                                 <a href="#" className="text-blue-600 font-semibold hover:underline">อ่านต่อ →</a>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// // Component สำหรับ Call to Action
// const CallToAction = () => {
//     return (
//         <div className="bg-blue-600 text-white">
//             <div className="container mx-auto px-4 py-16 text-center">
//                 <h2 className="text-3xl font-bold">พร้อมเริ่มโปรเจคของคุณแล้วหรือยัง?</h2>
//                 <p className="mt-4 mb-8 max-w-2xl mx-auto">หาช่างมืออาชีพ หรือสมัครเป็นช่างเพื่อรับงานใหม่ๆ กับเราได้แล้ววันนี้</p>
//                 <div className="space-x-4">
//                     <a href="/services" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg">หาช่างเลย</a>
//                     <a href="/become-contractor" className="bg-blue-800 text-white font-bold py-3 px-6 rounded-lg">สมัครเป็นช่าง</a>
//                 </div>
//             </div>
//         </div>
//     );
// }


// // === โค้ดหลักของหน้า Home ===
// const Home = () => {
//   return (
//     <>
//       <Hero />
//       {/* Promotion Banner สามารถใส่ตรงนี้ได้ */}
//       <CategoryShowcase />
//       <FeaturedServices />
//       <ArticleHighlight />
//       <CallToAction />
//     </>
//   );
// };

// export default Home;