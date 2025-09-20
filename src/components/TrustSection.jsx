import React from 'react';

function TrustSection() {
  return (
    <section className="bg-gray-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light luxury-heading uppercase">
              Why Choose Aroma
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              With over 10 years of experience in medical aesthetics, Aroma MedSpa 
              has become the trusted choice for clients seeking professional, 
              results-driven treatments in a luxurious setting.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-gray-300">Licensed and certified professionals</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-gray-300">State-of-the-art technology</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-gray-300">Personalized treatment plans</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-gray-300">Luxurious, relaxing environment</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Luxury spa treatment room"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustSection;