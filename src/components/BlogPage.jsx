import React from 'react';

function BlogPage() {
  const featuredPosts = [
    {
      title: "The Ultimate Guide to Facial Treatments",
      excerpt: "Discover the latest techniques and treatments for achieving radiant, youthful skin with our comprehensive guide.",
      image: "https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      date: "March 15, 2024",
      readTime: "5 min read"
    },
    {
      title: "Botox vs Fillers: Which is Right for You?",
      excerpt: "Learn the key differences between these popular anti-aging treatments and find out which option suits your needs.",
      image: "https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      date: "March 12, 2024",
      readTime: "4 min read"
    },
    {
      title: "Laser Hair Removal: What to Expect",
      excerpt: "Everything you need to know about laser hair removal, from preparation to aftercare and results.",
      image: "https://images.pexels.com/photos/5659015/pexels-photo-5659015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      date: "March 10, 2024",
      readTime: "6 min read"
    }
  ];

  const recentPosts = [
    { title: "Spring Skincare Routine Essentials", date: "March 8, 2024" },
    { title: "The Benefits of Regular Massage Therapy", date: "March 5, 2024" },
    { title: "Understanding Chemical Peels", date: "March 3, 2024" },
    { title: "Anti-Aging Tips from Our Experts", date: "March 1, 2024" }
  ];

  const categories = [
    "Skincare Tips",
    "Anti-Aging",
    "Laser Treatments",
    "Wellness",
    "Beauty Trends",
    "Client Stories"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-100 to-pink-200 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-light luxury-heading mb-6">
            Beauty & Wellness Blog
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Expert insights, tips, and trends from our medical spa professionals to help you look and feel your best.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold luxury-heading uppercase text-center mb-12">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 uppercase">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <button className="text-pink-600 font-medium hover:text-pink-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories & Recent Posts */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Categories */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-semibold luxury-heading uppercase mb-6">
                Categories
              </h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <button 
                    key={index}
                    className="block w-full text-left px-4 py-3 bg-white rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-semibold luxury-heading uppercase mb-6">
                Recent Posts
              </h3>
              <div className="space-y-6">
                {recentPosts.map((post, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 uppercase">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                    <button className="text-pink-600 font-medium hover:text-pink-700 transition-colors">
                      Read More →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-pink-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light luxury-heading text-white uppercase mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Subscribe to our newsletter for the latest beauty tips, exclusive offers, and expert insights.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <button 
                type="submit"
                className="bg-white text-pink-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;