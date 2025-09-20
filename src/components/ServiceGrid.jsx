import React from 'react';

function ServiceGrid() {
  const services = [
    {
      title: "Facial Treatments",
      image: "https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      description: "Rejuvenating facials for all skin types"
    },
    {
      title: "Botox & Fillers",
      image: "https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      description: "Non-surgical anti-aging solutions"
    },
    {
      title: "Laser Treatments",
      image: "https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      description: "Advanced laser hair removal and skin treatments"
    },
    {
      title: "Massage Therapy",
      image: "https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      description: "Relaxing therapeutic massage services"
    }
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold luxury-heading uppercase">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover our comprehensive range of medical spa services designed to enhance your natural beauty
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 uppercase">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceGrid;