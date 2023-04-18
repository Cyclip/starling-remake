import './App.css';

import NavBar from './components/NavBar';
import MainSection from './components/MainSection';
import QualitySection from './components/QualitySection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />

        <MainSection />

        <QualitySection />
      </header>
    </div>
  );
}

export default App;
