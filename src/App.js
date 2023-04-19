import React, { useEffect, useState } from "react";
import './App.css';

import NavBar from './components/NavBar';
import MainSection from './components/MainSection';
import QualitySection from './components/QualitySection';
import FeaturesSection from './components/FeaturesSection';
import MoneyManagementSection from './components/MoneyManagementSection';
import ApplicationSection from './components/ApplicationSection';
import Footer from './components/Footer';
import Disclaimer from './components/Disclaimer';

function App() {
  const [disclaimerVisible, setDisclaimerVisible] = useState(false);

  const openDisclaimer = () => {
    setDisclaimerVisible(true);
  }

  useEffect(() => {
    setTimeout(() => {
      openDisclaimer();
    }, 500);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar
          openDisclaimer={openDisclaimer}
        />

        <MainSection
          openDisclaimer={openDisclaimer}
        />

        <QualitySection />

        <ApplicationSection />

        <FeaturesSection
          openDisclaimer={openDisclaimer}
        />

        <MoneyManagementSection
          openDisclaimer={openDisclaimer}
        />

        <Footer 
          openDisclaimer={openDisclaimer}
        />
      </header>

      <Disclaimer
        visible={disclaimerVisible}
        setVisible={setDisclaimerVisible}
      />
    </div>
  );
}

export default App;
