import React from 'react';


const CTASection = () => {
  return (
    <div
      className="w-full bg-red-700 bg-blend-multiply bg-cover bg-center text-white py-20 px-4 flex items-center justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1548744482-3cfbc49168bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fDNkJTIwY2l0eSUyMHdoaXRlfGVufDB8fDB8fHww')`,
      }}
    >
      <div className="text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Ready to Grow Your Business?
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-red-600 font-medium px-6 py-3 rounded-full shadow hover:bg-red-100 transition">
            Start selling
          </button>
          <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-red-600 transition">
            Chat with consultant
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
