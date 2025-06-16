import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">BuildUp</h3>
                        <p className="text-gray-400">Connecting clients with trusted contractors.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Construction</a></li>
                            <li><a href="#" className="hover:text-white">Renovation</a></li>
                            <li><a href="#" className="hover:text-white">Electrical</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">About</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Our Story</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Help Center</a></li>
                            <li className="flex space-x-4 mt-4">
                                {/* Social Icons Placeholder */}
                                <a href="#" className="hover:text-white">FB</a>
                                <a href="#" className="hover:text-white">TW</a>
                                <a href="#" className="hover:text-white">IG</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} BuildUp. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;