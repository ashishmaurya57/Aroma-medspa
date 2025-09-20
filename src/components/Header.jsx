import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold luxury-heading">Aroma</Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium uppercase tracking-wide">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium uppercase tracking-wide">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium uppercase tracking-wide">About</Link>
            <Link to="/blog" className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium uppercase tracking-wide">Blog</Link>
            <Link to="/" className="text-gray-700 hover:text-pink-600 px-3 py-2 text-sm font-medium uppercase tracking-wide">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="border border-pink-600 text-pink-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-pink-600 hover:text-white transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;