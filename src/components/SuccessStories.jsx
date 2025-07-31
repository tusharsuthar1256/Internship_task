import React, { useState, useEffect, useRef } from 'react';

const slides = [
  {
    quote: `“Mr David runs a manufacturing company that works in this field of medical devices. With administrative and production across the country. With full respect for environment and several years’ experience using IP systems that are conventional”`,
    image: 'https://1mdm.com/about/assets/slider-1.webp',
  },
  {
    quote: `“Lab Evolution is an import - export company of reagents and laboratory equipment established over a decade. Our company’s team of experts (in the instrumentations and reagents market) carefully follows customers all over the world. Lab Evolution is able to offer all the most competitive and popular brands and the best quality products for your laboratory.”`,
    image: 'https://1mdm.com/about/assets/slider-2.webp',
  },
  {
    quote: `“Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specilised high-quality pigmented imaging process, so he decided to create his own product line”`,
    image: 'https://1mdm.com/about/assets/slider-3.webp',
  },
  {
    quote: `“LTA International Global Services LLC is a Florida-based export management company that sells top Medical device products from major US brands to importers and distributors around the globe. Founded in 1994 by Loyd, LTA's long-standing expertise in logistics and pricing has made it one of the most successful international trade businesses in the USA.”`,
    image: 'https://1mdm.com/about/assets/slider-4.webp',
  },
];

const SuccessStories = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1)),
      8000
    );
    return () => resetTimeout();
  }, [current]);

  const resetTimeout = () => timeoutRef.current && clearTimeout(timeoutRef.current);

  const prevSlide = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const nextSlide = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full overflow-hidden px-3 sm:px-5 md:px-20 py-10 md:py-20">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="w-full flex-shrink-0 flex flex-col lg:flex-row h-auto lg:h-[500px]"
          >
            <div className="w-full lg:w-2/5 bg-white p-5 sm:p-8 flex flex-col justify-center text-center lg:text-left">
              <svg className="w-8 sm:w-10 h-8 sm:h-10 text-red-600 mb-3 sm:mb-4 mx-auto lg:mx-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.17 6A4.001 4.001 0 003 10v4a4 4 0 004 4h2a1 1 0 001-1v-4a1 1 0 00-1-1H5v-2a2 2 0 012-2h.17zM17.17 6A4.001 4.001 0 0013 10v4a4 4 0 004 4h2a1 1 0 001-1v-4a1 1 0 00-1-1h-4v-2a2 2 0 012-2h.17z" />
              </svg>
              <p className="text-gray-800 leading-relaxed text-base sm:text-lg">{slide.quote}</p>
            </div>

            <div className="w-full lg:w-3/5 h-[220px] sm:h-[300px] lg:h-[500px] relative">
              <img
                src={slide.image}
                alt={`Slide ${idx + 1}`}
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-5 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 sm:p-3 rounded-full shadow hover:bg-gray-100 z-20"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-5 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 sm:p-3 rounded-full shadow hover:bg-gray-100 z-20"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="flex justify-center mt-5 gap-2">
        {slides.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              current === idx ? 'bg-red-600 scale-110' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
