import './App.css';
import Email from './components/email'
import Logos from './components/logos'
import Projects from './components/projects'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Logos />
      <Projects />
      <Email />
      <Footer />
    </div>
  );
}

export default App;
