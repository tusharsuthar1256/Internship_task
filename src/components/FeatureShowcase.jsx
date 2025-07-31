import React, { useState } from 'react';

const features = [
  {
    id: 'storefront',
    title: 'Custom storefront',
    description: 'Set up a store that showcases your brand',
    paragraph: `Differentiate yourself from the competition with a full store dedicated to your products – no coding or design skills necessary!`,
    image: 'https://1mdm.com/about/assets/1mdm-product-1.png',
  },
  {
    id: 'advertising',
    title: 'Advertising tools',
    description: 'Reach more potential buyers',
    paragraph: `Boost your visibility with targeted ads. Our platform provides tools to promote your products effectively.`,
    image: 'https://1mdm.com/about/assets/1mdm-product-image-4.png',
  },
  {
    id: 'analytics',
    title: 'Data and analytics',
    description: 'Make informed business decisions',
    paragraph: `Gain insights into buyer behavior and product performance through our built-in analytics tools.`,
    image: 'https://1mdm.com/about/assets/1mdm-product-2.png',
  },
  {
    id: 'support',
    title: 'Customers support',
    description: 'Enhance your customer experience',
    paragraph: `Deliver exceptional service to your buyers with our integrated support features.`,
    image: 'https://1mdm.com/about/assets/1mdm-product-3.png',
  },
];

const FeatureShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <>
      {/* Title */}
      <h1 className="w-full text-2xl sm:text-3xl md:text-4xl text-center py-10 md:py-20 text-red-900 font-bold">
        Grow your business with a suite of tools built for you
      </h1>

      {/* ✅ Mobile Horizontal Tabs */}
<div className="flex md:hidden overflow-x-auto no-scrollbar space-x-4 px-4 mb-6">
  {features.map((feature) => (
    <button
      key={feature.id}
      onClick={() => setActiveFeature(feature)}
      className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium ${
        activeFeature.id === feature.id
          ? 'bg-red-600 text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {feature.title}
    </button>
  ))}
</div>


      {/* Wrapper */}
      <div className="w-full flex flex-col md:flex-row md:px-20 px-4 py-10 md:py-20 gap-6">
        {/* ✅ Sidebar only on Desktop */}
        <div className="hidden md:block md:w-1/4 border-l-2 border-gray-200">
          <ul className="space-y-6">
            {features.map((feature) => (
              <li
                key={feature.id}
                onClick={() => setActiveFeature(feature)}
                className={`cursor-pointer pl-6 border-l-4 ${
                  activeFeature.id === feature.id
                    ? 'border-red-600 text-red-600 font-semibold'
                    : 'border-transparent text-black font-medium hover:text-red-600'
                }`}
              >
                {feature.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className="w-full md:w-3/4 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              {activeFeature.description}
            </h2>
            <p className="text-base sm:text-lg text-gray-700">{activeFeature.paragraph}</p>
          </div>

          <div className="md:w-1/2">
            <img
              src={activeFeature.image}
              alt={activeFeature.title}
              className="w-full max-w-md mx-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureShowcase;
