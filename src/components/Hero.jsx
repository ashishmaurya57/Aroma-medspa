import React from 'react';

function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-pink-100 to-pink-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-light luxury-heading leading-tight">
              Welcome to Aroma MedSpa
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Experience luxury wellness and beauty treatments in a serene, professional environment. 
              Our expert team provides personalized care to help you look and feel your best.
            </p>
            <button className="bg-gradient-to-r from-pink-600 to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-pink-700 hover:to-pink-800 transition-all duration-300 shadow-lg">
              Schedule Your Consultation
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Luxury medspa treatment"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;