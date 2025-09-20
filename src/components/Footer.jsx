import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold luxury-heading">Aroma</h3>
            <p className="text-gray-400 text-sm">
              Luxury medical spa offering personalized beauty and wellness treatments 
              in a serene, professional environment.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold uppercase tracking-wide">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Facial Treatments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Botox & Fillers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Laser Treatments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Massage Therapy</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold uppercase tracking-wide">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold uppercase tracking-wide">Contact Info</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@aromamedspa.com</p>
              <p>📍 123 Beauty Lane, Spa City</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Aroma MedSpa. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;