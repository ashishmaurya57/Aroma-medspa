import React from 'react';

function CTASection() {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-pink-900 to-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light luxury-heading uppercase">
              Ready to Transform Your Beauty?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Schedule your consultation today and discover how our personalized treatments 
              can help you achieve your beauty and wellness goals.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-gray-300">Complimentary consultation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-gray-300">Personalized treatment plan</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-gray-300">Flexible scheduling options</span>
              </div>
            </div>
            <button className="bg-pink-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-pink-700 transition-colors">
              Book Your Appointment
            </button>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-2xl">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 bg-pink-100 rounded-full mx-auto flex items-center justify-center">
                <span className="text-3xl">📅</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Easy Online Booking</h3>
              <p className="text-gray-600">Schedule your appointment in just a few clicks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;