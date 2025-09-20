import React from 'react';

function ContactCTA() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-pink-600 to-pink-700">
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Contact background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-light luxury-heading text-white uppercase mb-8">
          Contact Us Today
        </h2>
        <div className="space-y-6">
          <p className="text-xl text-white mb-8">
            Ready to start your beauty journey? Get in touch with our team.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-center">
              <div className="text-2xl mb-2">📞</div>
              <p className="text-lg font-medium text-white">(555) 123-4567</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">✉️</div>
              <p className="text-lg font-medium text-white">info@aromamedspa.com</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📍</div>
              <p className="text-lg font-medium text-white">123 Beauty Lane, Spa City</p>
            </div>
          </div>
          <div className="mt-12">
            <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1635959472827!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;