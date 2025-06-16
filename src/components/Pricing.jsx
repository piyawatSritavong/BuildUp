import React from 'react';

const plans = [
    {
        name: 'Basic',
        price: '0',
        features: ['Appear in search results', 'Upload up to 10 photos'],
        isFeatured: false,
    },
    {
        name: 'Pro',
        price: '19',
        features: ['Appear in search results', 'Upload up to 10 photos'],
        isFeatured: true,
    },
    {
        name: 'Premium',
        price: '39',
        features: ['Appear in search results', 'Upload up to 50 photos'],
        isFeatured: false,
    },
];

const Pricing = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900">Find the right contractor for your project.</h2>
                    <p className="mt-4 text-lg text-gray-600">Connect with skilled contractors for construction, renovation, electrical work, and more.</p>
                    <button className="mt-6 bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Get Started
                    </button>
                </div>
                
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div key={plan.name} className={`border rounded-lg p-8 flex flex-col ${plan.isFeatured ? 'border-blue-500 scale-105 shadow-xl' : 'border-gray-200'}`}>
                            <h3 className="text-2xl font-semibold text-gray-800">{plan.name}</h3>
                            <p className="mt-4 text-4xl font-bold text-gray-900">${plan.price}<span className="text-xl font-medium text-gray-500">/mo</span></p>
                            <ul className="mt-8 space-y-4 text-gray-600">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-center">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto pt-8">
                                <button className={`w-full py-3 rounded-lg font-semibold ${plan.isFeatured ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'}`}>
                                    Get Started
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;