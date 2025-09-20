import React, { useState } from 'react';

function TestimonialSlider() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The facial treatments at Aroma have completely transformed my skin. The staff is incredibly knowledgeable and the atmosphere is so relaxing!",
      rating: 5
    },
    {
      name: "Michael Chen",
      text: "Professional, clean, and results-driven. I've been coming here for over a year and couldn't be happier with the services.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      text: "Aroma MedSpa is my go-to for all my beauty needs. The laser treatments are effective and the staff makes you feel so comfortable.",
      rating: 5
    }
  ];

  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-32 bg-gradient-to-r from-pink-50 to-pink-100">
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Happy client"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="text-6xl text-pink-600">"</div>
          <blockquote className="text-2xl md:text-3xl font-light italic text-gray-800 leading-relaxed">
            {testimonials[current].text}
          </blockquote>
          <div className="space-y-4">
            <div className="flex justify-center space-x-1">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
            <p className="text-lg font-medium text-gray-700">{testimonials[current].name}</p>
          </div>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-pink-50 transition-colors"
            >
              ←
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-pink-50 transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSlider;