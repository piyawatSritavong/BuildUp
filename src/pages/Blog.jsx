import React from 'react';
import { Link } from 'react-router-dom';

const allArticles = [
    { title: '5 วิธีเช็คระบบไฟฟ้าในบ้านด้วยตัวเองเบื้องต้น', image: 'https://images.pexels.com/photos/1078879/pexels-photo-1078879.jpeg', category: 'ระบบไฟฟ้า', excerpt: 'การดูแลรักษาระบบไฟฟ้าในบ้านเป็นสิ่งสำคัญที่ไม่ควรมองข้าม เพราะอาจนำไปสู่อันตราย...' },
    { title: 'เลือกแอร์อย่างไรให้ประหยัดไฟและเหมาะกับห้อง', image: 'https://images.pexels.com/photos/7217988/pexels-photo-7217988.jpeg', category: 'เครื่องปรับอากาศ', excerpt: 'อากาศร้อนๆ แบบนี้ แอร์คือเพื่อนที่ดีที่สุด แต่จะเลือกแอร์อย่างไรให้คุ้มค่าและประหยัดไฟที่สุด...' },
    { title: 'DIY: วิธีติดตั้งกล้องวงจรปิดด้วยตัวเองง่ายๆ', image: 'https://images.pexels.com/photos/2239655/pexels-photo-2239655.jpeg', category: 'กล้องวงจรปิด', excerpt: 'เพิ่มความปลอดภัยให้บ้านของคุณด้วยกล้องวงจรปิด ที่คุณก็สามารถติดตั้งเองได้...' },
    { title: 'ตู้เมนไฟฟ้าคืออะไร? ทำไมถึงสำคัญต่อบ้านของคุณ', image: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg', category: 'ระบบไฟฟ้า', excerpt: 'ทำความรู้จักกับ "ตู้เมนไฟฟ้า" หรือ "ตู้คอนซูมเมอร์ยูนิต" หัวใจหลักของระบบไฟฟ้าในบ้าน...' },
];

const Blog = () => {
    const featuredArticle = allArticles[0];
    const otherArticles = allArticles.slice(1);

    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900">สาระน่ารู้เรื่องงานช่าง</h1>
                    <p className="text-lg text-gray-600 mt-2">อัปเดตบทความและเคล็ดลับดีๆ จากเรา</p>
                </div>

                {/* Featured Article */}
                <Link to="#" className="block group mb-16">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="rounded-xl overflow-hidden shadow-lg">
                           <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div>
                            <p className="text-blue-600 font-semibold mb-2">{featuredArticle.category}</p>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-blue-700 transition-colors">{featuredArticle.title}</h2>
                            <p className="text-gray-600 mb-4">{featuredArticle.excerpt}</p>
                            <span className="font-semibold text-blue-600">อ่านต่อ →</span>
                        </div>
                    </div>
                </Link>

                {/* Article Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherArticles.map(article => (
                        <Link to="#" key={article.title} className="block bg-white rounded-xl shadow-lg overflow-hidden group">
                           <div className="overflow-hidden">
                               <img src={article.image} alt={article.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                           </div>
                           <div className="p-6">
                                <p className="text-sm text-blue-600 font-semibold mb-2">{article.category}</p>
                                <h3 className="font-bold text-xl mb-3 h-20 text-gray-800 group-hover:text-blue-700 transition-colors">{article.title}</h3>
                                <span className="font-semibold text-blue-600">อ่านต่อ →</span>
                           </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;

// import React from 'react';

// // Mock Data
// const allArticles = [
//     { title: '5 วิธีเช็คระบบไฟฟ้าในบ้านด้วยตัวเองเบื้องต้น', image: 'https://images.pexels.com/photos/1078879/pexels-photo-1078879.jpeg', category: 'ระบบไฟฟ้า' },
//     { title: 'เลือกแอร์อย่างไรให้ประหยัดไฟและเหมาะกับห้อง', image: 'https://images.pexels.com/photos/8459468/pexels-photo-8459468.jpeg', category: 'เครื่องปรับอากาศ' },
//     { title: 'DIY: วิธีติดตั้งกล้องวงจรปิดด้วยตัวเองง่ายๆ', image: 'https://images.pexels.com/photos/2239655/pexels-photo-2239655.jpeg', category: 'กล้องวงจรปิด'},
//     { title: 'ตู้เมนไฟฟ้าคืออะไร? ทำไมถึงสำคัญต่อบ้านของคุณ', image: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg', category: 'ระบบไฟฟ้า' },
// ];

// const Blog = () => {
//     return (
//         <div className="bg-white py-12">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="text-center mb-12">
//                     <h1 className="text-4xl font-bold">ข่าวสารและบทความ</h1>
//                     <p className="text-gray-600 mt-2">สาระน่ารู้เกี่ยวกับบ้านและงานช่าง</p>
//                 </div>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {allArticles.map(article => (
//                         <div key={article.title} className="bg-gray-50 rounded-lg shadow-md overflow-hidden group">
//                             <div className="overflow-hidden">
//                                 <img src={article.image} alt={article.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
//                             </div>
//                             <div className="p-6">
//                                 <p className="text-sm text-blue-600 font-semibold mb-2">{article.category}</p>
//                                 <h3 className="font-bold text-xl mb-3 h-20">{article.title}</h3>
//                                 <a href="#" className="text-blue-600 font-semibold hover:underline">อ่านต่อ →</a>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Blog;