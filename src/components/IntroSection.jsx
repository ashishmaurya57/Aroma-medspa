import React from 'react';

function IntroSection() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light luxury-heading uppercase">
              About Aroma MedSpa
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              At Aroma MedSpa, we believe that beauty and wellness go hand in hand. 
              Our state-of-the-art facility offers a comprehensive range of medical spa services 
              designed to enhance your natural beauty and promote overall well-being.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              Our team of licensed professionals is dedicated to providing personalized treatments 
              in a luxurious, relaxing environment. From advanced skincare to therapeutic treatments, 
              we offer everything you need to look and feel your best.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Spa professional"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;