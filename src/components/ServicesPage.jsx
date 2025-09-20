import React from 'react';

function ServicesPage() {
  const serviceCategories = [
    {
      category: "Facial Treatments",
      services: [
        {
          name: "Classic Facial",
          price: "$85",
          duration: "60 min",
          description: "Deep cleansing, exfoliation, and hydration for all skin types",
          image: "https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          name: "Anti-Aging Facial",
          price: "$125",
          duration: "75 min",
          description: "Advanced treatment targeting fine lines and wrinkles",
          image: "https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          name: "Hydrating Facial",
          price: "$95",
          duration: "60 min",
          description: "Intensive moisture treatment for dry, dehydrated skin",
          image: "https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
      ]
    },
    {
      category: "Injectables",
      services: [
        {
          name: "Botox Cosmetic",
          price: "$12/unit",
          duration: "30 min",
          description: "Smooth away frown lines, crow's feet, and forehead wrinkles",
          image: "https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          name: "Dermal Fillers",
          price: "$650+",
          duration: "45 min",
          description: "Restore volume and enhance facial contours",
          image: "https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          name: "Lip Enhancement",
          price: "$500+",
          duration: "30 min",
          description: "Natural-looking lip augmentation for fuller, more defined lips",
          image: "https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
      ]
    },
    {
      category: "Laser Treatments",
      services: [
        {
          name: "Laser Hair Removal",
          price: "$150+",
          duration: "30-60 min",
          description: "Permanent hair reduction for all skin types",
          image: "https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          name: "IPL Photofacial",
          price: "$300",
          duration: "45 min",
          description: "Improve sun damage, age spots, and uneven skin tone",
          image: "https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          name: "Laser Skin Resurfacing",
          price: "$800+",
          duration: "60 min",
          description: "Advanced treatment for wrinkles, scars, and texture",
          image: "https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
      ]
    },
    {
      category: "Massage Therapy",
      services: [
        {
          name: "Swedish Massage",
          price: "$80",
          duration: "60 min",
          description: "Relaxing full-body massage to relieve tension and stress",
          image: "https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          name: "Deep Tissue Massage",
          price: "$100",
          duration: "60 min",
          description: "Therapeutic massage targeting deep muscle layers",
          image: "https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          name: "Hot Stone Massage",
          price: "$120",
          duration: "75 min",
          description: "Heated stones combined with massage for ultimate relaxation",
          image: "https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-100 to-pink-200 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-light luxury-heading mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover our comprehensive range of luxury medical spa services designed to enhance your natural beauty and promote wellness.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-semibold luxury-heading uppercase text-center mb-12">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src={service.image}
                      alt={service.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-semibold text-gray-900 uppercase">
                          {service.name}
                        </h3>
                        <span className="text-pink-600 font-bold text-lg">
                          {service.price}
                        </span>
                      </div>
                      <div className="flex items-center mb-3">
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {service.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>
                      <button className="w-full bg-gradient-to-r from-pink-600 to-pink-700 text-white px-6 py-3 rounded-lg font-medium hover:from-pink-700 hover:to-pink-800 transition-all duration-300">
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 via-pink-900 to-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light luxury-heading uppercase mb-6">
            Ready to Book Your Treatment?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule your consultation today and let our expert team create a personalized treatment plan just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-pink-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-pink-700 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors">
              Call Now: (555) 123-4567
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;