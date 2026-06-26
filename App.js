import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PetsSection from './components/PetsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CatalogPage from './components/CatalogPage';
import AboutPage from './components/AboutPage';
import HelpPage from './components/HelpPage';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="App">
      <Navbar currentPage={page} onNavigate={setPage} />

      {page === 'home' && (
        <>
          <Hero />
          <PetsSection onShowCatalog={() => setPage('catalog')} />
          <ContactSection />
        </>
      )}

      {page === 'catalog' && <CatalogPage />}
      {page === 'about' && <AboutPage />}
      {page === 'help' && <HelpPage />}

      <Footer />
    </div>
  );
}

export default App;
