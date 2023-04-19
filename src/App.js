import './App.css';

import NavBar from './components/NavBar';
import MainSection from './components/MainSection';
import QualitySection from './components/QualitySection';
import FeaturesSection from './components/FeaturesSection';
import MoneyManagementSection from './components/MoneyManagementSection';
import ApplicationSection from './components/ApplicationSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />

        <MainSection />

        <QualitySection />

        <ApplicationSection />

        <FeaturesSection />

        <MoneyManagementSection />
      </header>
    </div>
  );
}

export default App;
