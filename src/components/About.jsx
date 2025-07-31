import React from 'react';

const About = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-16 max-w-7xl mx-auto">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-10 leading-snug text-neutral-800">
        1mdm.com is a leading ecommerce platform that
        <br className="hidden md:block" /> helps SMEs go global
      </h2>

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Responsive Video */}
        <div className="flex-1 w-full">
          <div className="relative w-full pb-[56.25%] h-0 overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/TN7iJyc5Uks?si=TyC4LfQdVDPx-pqC"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 w-full text-center md:text-left space-y-5 text-neutral-700 text-base md:text-lg leading-relaxed">
          <p>Connect with millions of business buyers from around the world.</p>
          <p>Get the tools and know-how to build a successful ecommerce presence for your business.</p>
          <p>Pocket more from each sale, with take rates as low as 0% in some cases.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
