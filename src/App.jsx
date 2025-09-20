import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AnnouncementBar from './components/AnnouncementBar';
import IntroSection from './components/IntroSection';
import ServiceGrid from './components/ServiceGrid';
import TrustSection from './components/TrustSection';
import TestimonialSlider from './components/TestimonialSlider';
import CTASection from './components/CTASection';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import BlogPage from './components/BlogPage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <AnnouncementBar />
              <IntroSection />
              <ServiceGrid />
              <TrustSection />
              <TestimonialSlider />
              <CTASection />
              <ContactCTA />
              <Footer />
            </>
          } />
          <Route path="/blog" element={
            <>
              <Header />
              <BlogPage />
              <Footer />
            </>
          } />
          <Route path="/services" element={
            <>
              <Header />
              <ServicesPage />
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <Header />
              <AboutPage />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;