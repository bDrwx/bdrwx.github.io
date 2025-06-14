import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Features from './components/Features';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';
import { useBookingForm } from './hooks/useBookingForm';

function App() {
  const { isBookingFormOpen, openBookingForm, closeBookingForm } = useBookingForm();

  return (
    <div className="min-h-screen">
      <Header onBookingClick={openBookingForm} />
      <Hero onBookingClick={openBookingForm} />
      <Rooms onBookingClick={openBookingForm} />
      <Features />
      <About onBookingClick={openBookingForm} />
      <Testimonials />
      <Contact />
      <Footer />
      <BookingForm isOpen={isBookingFormOpen} onClose={closeBookingForm} />
    </div>
  );
}

export default App;