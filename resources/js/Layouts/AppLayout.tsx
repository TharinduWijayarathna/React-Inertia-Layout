import React, { ReactNode, useState } from 'react';
import { Head, usePage } from '@inertiajs/react';
import Header from '@/Components/Main/Header';
import Footer from '@/Components/Main/Footer';
import ProgressBar from '@/Components/Main/ProgressBar';
import Preloader from '@/Components/Main/Preloader';

const AppLayout: React.FC<{ children: ReactNode; title?: string }> = ({ children, title }) => {
  // const { url } = usePage();

  const [preloaderVisible, setPreloaderVisible] = useState(false);

  const startPreloader = () => {
    setPreloaderVisible(true);
  };

  const stopPreloader = () => {
    setPreloaderVisible(false);
  };

  useState(() => {
    startPreloader();
    setTimeout(() => {
      stopPreloader();
    }, 1000);
  }
  );

  return (
    <div>
      <Head title={title || 'React Title'} />

      <Header />

      <ProgressBar progress={0} color="green" />

      <main>

        {children}

        <a
          href="https://wa.me/+94765781398"
          id="whatsapp"
          className="whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
        </a>

        <a href="#" id="back-to-top-btn" className="back-to-top">
          <i className="fas fa-chevron-up"></i>
        </a>
      </main>

      <Footer />

      <Preloader loading={preloaderVisible} onStart={startPreloader} onStop={stopPreloader} />

    </div>
  );
};

// Export the main component
export default AppLayout;
