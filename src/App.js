import './App.css';
import github from './utils/969021121530099614-128.png'
import linkedin from './utils/16090541531530099327-128.png'
import email from './utils/15743770351574338605-128.png'
import Email from './components/email'
import Logos from './components/logos'
import Projects from './components/projects'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <header>
          <Header />
          </header>
          <Logos />
          <Projects />
            <div className='email-form'>
              <Email />
            </div>
        <footer>
          <div className='email'>
            <h2>Contact me</h2>
            <img src={email} alt='gmail icon' className='icons' />
            <h2>mikehill.webdeveloper@gmail.com</h2>
          </div>
          <div className="icon-section">
            <img src={github} href='https://github.com/Mikehill345' alt='github icon' className="icons" />
            <img src={linkedin} href='https://www.linkedin.com/in/mikehill345/' alt='linkedin icon' className="icons" />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
