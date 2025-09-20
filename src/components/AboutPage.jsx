import React from 'react';

function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Medical Director",
      image: "https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      bio: "Board-certified physician with 15+ years in aesthetic medicine. Harvard-trained with expertise in advanced injectables and laser treatments.",
      certifications: ["Board Certified Dermatologist", "Harvard Medical School", "American Academy of Aesthetic Medicine"]
    },
    {
      name: "Emma Rodriguez",
      role: "Lead Aesthetician",
      image: "https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      bio: "Licensed master aesthetician with specialized training in medical-grade skincare and advanced facial treatments.",
      certifications: ["Master Aesthetician License", "PCA Skin Certified", "Hydrafacial Specialist"]
    },
    {
      name: "Michael Torres",
      role: "Laser Specialist",
      image: "https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      bio: "Certified laser technician with expertise in hair removal, skin resurfacing, and IPL treatments.",
      certifications: ["Certified Laser Technician", "Cynosure Laser Certified", "Lumenis Laser Specialist"]
    }
  ];

  const awards = [
    {
      title: "Best Medical Spa 2024",
      organization: "Spa & Wellness Awards",
      year: "2024"
    },
    {
      title: "Top 10 Aesthetic Clinics",
      organization: "Beauty Insider Magazine",
      year: "2023"
    },
    {
      title: "Patient Choice Award",
      organization: "RealSelf",
      year: "2023"
    },
    {
      title: "Excellence in Aesthetics",
      organization: "American Med Spa Association",
      year: "2022"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-100 to-pink-200 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-light luxury-heading mb-6">
            About Aroma MedSpa
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover our story, meet our expert team, and learn why we're the trusted choice for luxury medical spa services.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-light luxury-heading uppercase">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in 2014 by Dr. Sarah Chen, Aroma MedSpa began with a simple vision: to create a sanctuary where cutting-edge medical aesthetics meet luxury wellness. What started as a small boutique clinic has grown into a premier destination for beauty and wellness.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Over the past decade, we've helped thousands of clients achieve their beauty goals while maintaining the highest standards of safety and professionalism. Our commitment to excellence has earned us recognition as one of the top medical spas in the region.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-pink-600">10+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-pink-600">5000+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Aroma MedSpa facility"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold luxury-heading uppercase mb-4 text-pink-600">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To empower individuals to look and feel their best through personalized, medically-supervised aesthetic treatments in a luxurious, safe environment. We combine advanced technology with expert care to deliver natural-looking results that enhance each client's unique beauty.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold luxury-heading uppercase mb-4 text-pink-600">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading medical spa recognized for excellence in aesthetic medicine, innovation in treatment techniques, and unwavering commitment to client satisfaction. We strive to set new standards in the industry while maintaining the personal touch that makes every client feel valued.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light luxury-heading uppercase">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Our team of licensed professionals is dedicated to providing exceptional care and outstanding results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 uppercase">{member.name}</h3>
                  <p className="text-pink-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="space-y-2">
                    {member.certifications.map((cert, certIndex) => (
                      <div key={certIndex} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded inline-block mr-2">
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light luxury-heading uppercase">
              Certifications & Awards
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Recognized for excellence in medical aesthetics and client care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-gray-600 text-sm">{award.organization}</p>
                <p className="text-pink-600 font-medium">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light luxury-heading uppercase mb-6">
                Our State-of-the-Art Facility
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Luxurious Treatment Rooms</h4>
                    <p className="text-gray-600">Private, spa-like environments designed for comfort and relaxation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Advanced Technology</h4>
                    <p className="text-gray-600">Latest FDA-approved equipment for all treatments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Medical-Grade Standards</h4>
                    <p className="text-gray-600">Hospital-level sterilization and safety protocols</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Relaxation Areas</h4>
                    <p className="text-gray-600">Comfortable lounges and refreshment stations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Treatment room"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Reception area"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Equipment"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Lounge area"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-600 to-pink-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light luxury-heading uppercase mb-6">
            Experience the Aroma Difference
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Ready to start your beauty journey with our expert team? Schedule your consultation today.
          </p>
          <button className="bg-white text-pink-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors">
            Book Your Consultation
          </button>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;