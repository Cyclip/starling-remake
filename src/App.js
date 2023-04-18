import './App.css';

import NavBar from './components/NavBar';
import MainSection from './components/MainSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />

        <MainSection />
      </header>
    </div>
  );
}

export default App;
