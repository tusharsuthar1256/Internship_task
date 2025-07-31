import React, { useEffect, useState } from 'react';

const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); 
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count.toLocaleString(); 
};

const Hero = () => {
  const buyers = useCountUp(26000000);
  const inquiries = useCountUp(400000);
  const countries = useCountUp(200);

  return (
    <section className="relative bg-[#f9f9f9] px-6 md:px-10 lg:px-20 pb-16 md:py-20 lg:py-28 overflow-hidden mt-28">
      <img
        src="/assets/globe.png"
        alt="Global Network"
        className="absolute top-0 right-0 w-[500px] md:w-[700px] opacity-40 pointer-events-none z-0 hidden md:block"
      />

      <div className="absolute left-0 top-0 w-40 md:w-60 h-40 md:h-60 bg-[#ff0000] rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute right-0 bottom-0 w-40 md:w-60 h-40 md:h-60 bg-[#ff0000] rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="text-lg font-medium text-gray-700 mb-2">Sell on 1mdm.com</p>
          <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-6">
            Reach millions of <br />
            <span className="text-gray-900">B2B buyers globally</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition">
              Start selling
            </button>
            <button className="border-2 border-red-500 text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-50 transition">
              Chat with consultant
            </button>
          </div>
        </div>

        <div className="text-center lg:text-left space-y-6 text-black text-lg">
          <div>
            <span className="text-3xl font-semibold">{buyers}</span><br />
            active buyers globally
          </div>
          <div>
            <span className="text-3xl font-semibold">{inquiries}</span><br />
            product inquiries daily
          </div>
          <div>
            <span className="text-3xl font-semibold">{countries}</span><br />
            countries and regions represented
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
