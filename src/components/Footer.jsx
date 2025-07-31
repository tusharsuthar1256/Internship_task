import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-black text-gray-300 w-full">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <img src="https://1mdm.com/about/assets/logo-white.png" alt="1MDM Logo" className="h-14 mb-3" />
            <p className="text-lg leading-6">One Medical Devices<br />Market Place</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Sell on 1MDM</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our Story</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Brands</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Press Room</h3>
            <ul className="space-y-2 mb-4">
              <li><a href="#" className="hover:text-white">Images & B-roll</a></li>
            </ul>
            <h3 className="text-white font-semibold mb-3">Policies</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Delivery Information</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Reach Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Corporate Information</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-gray-200 px-6 py-6 flex flex-col md:flex-row  flex justify-center items-center max-w-7xl mx-auto">
        <p className="text-gray-600 text-center md:text-left">© 2025 1MDM <span className="text-yellow-500">⚡</span> by SuperLabs</p>
      </div>
    </footer>
  );
}
