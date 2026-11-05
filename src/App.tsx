import { useState } from 'react';
import { LangProvider } from '@/i18n/LangContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Galleries from '@/components/Galleries';
import Reviews from '@/components/Reviews';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    return window.localStorage.getItem('taybat-theme') === 'dark' ? 'dark' : 'light';
  });
  const openBooking = () => setBookingOpen(true);
  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    window.localStorage.setItem('taybat-theme', next);
  };
  const closeBooking = () => setBookingOpen(false);

  return (
    <LangProvider>
      <div className={`min-h-screen bg-earth-50 text-earth-900 antialiased ${theme === 'dark' ? 'theme-dark' : ''}`}>
        <Navbar onBookClick={openBooking} theme={theme} onThemeToggle={toggleTheme} />
        <main>
          <Hero onBookClick={openBooking} />
          <About />
          <Stats />
          <Galleries onBookClick={openBooking} />
          <Reviews />
          <Visit />
        </main>
        <Footer />
        <BookingModal open={bookingOpen} onClose={closeBooking} />
      </div>
    </LangProvider>
  );
}

export default App;
