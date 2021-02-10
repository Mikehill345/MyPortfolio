import './App.css';
import pic from './utils/139433672_227299378885346_7756322547934512307_n.jpg'
import Htmlogo from './utils/1200px-HTML5_logo_and_wordmark.svg.png'
import pylogo from './utils/110px-Python-logo-notext.svg.png'
import reactlogo from './utils/20167174151551942641-128.png'
import csslogo from './utils/CSS3_logo_and_wordmark.svg.png'
import reduxlogo from './utils/320px-Redux_Logo.png'
import nodelogo from './utils/320px-Node.js_logo.svg.png'
import github from './utils/969021121530099614-128.png'
import linkedin from './utils/16090541531530099327-128.png'
import email from './utils/15743770351574338605-128.png'
import Email from './components/email'

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div class="background">
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
        </div>
        <header>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <div class="logo"><span>MRH</span></div>
          <section class="header-content">
            <h1>Michael Hill</h1>
            <img src={pic} alt='mike hill' />
            <p className='description'> I am a Full Stack Web developer with experience building websites and web applications.
            I specialize in JavaScript <br /> and have experience working testing in Jest and Cypress.
            I get excited and jump at the opportunity to be part of new projects,<br />
            especially those that drive my passion for helping members of my immediate community.</p>
          </section>
          <section className='skills'>
            <h2>Skills</h2>
            <img src={Htmlogo} alt='HTML logo' className='logos' />
            <img src={pylogo} alt='Python logo' className='logos' />
            <img src={reactlogo} alt='React logo' className='logos' />
            <img src={csslogo} alt='CSS logo' className='logos' />
            <img src={reduxlogo} alt='Redux logo' className='logos' />
            <img src={nodelogo} alt='Node logo' className='logos' />
          </section>
          <section className='projects'>
            <div className='projects'>
              <div className='project'>
                <h2>Village Book Builders</h2>
                <p>Village book builders is a non-profit organization that is working on building<br /> an app to provide different ways of learning for children inremote areas of the world.</p>
                <p>Designed and managed search component capable of locating a single record in <br /> database with 100% accuracy using React and Redux</p>
                <p>implemented new features as requested while maintaining legacy code</p>
                <p>HTML | CSS | Node | React | Redux | JSON server</p>
                <a href='https://github.com/Mikehill345/village-book-builders-fe-a'>Github Repo</a>
              </div>
              <div className='project'>
                <h2>VR Funding</h2>
                <p>VR Funding is an app for entrepreneurs to post their up and comingbuissness <br /> ideas also for capital investors to look through and decidewhether or not they would like to invest in the project.</p>
                <p>Created a global state management system utilizing Redux</p>
                <p>Created front end components using React</p>
                <p>HTML | CSS | Node | React | Redux </p>
                <a href='https://github.com/Mikehill345/VR-funding-build-week'>Github Repo</a>
              </div>
              <div className='project'>
                <h2>Co-Make</h2>
                <p>Co-Make is an app that was developed for people in a area to have amessage board to post, comment, and like issues or good deeds. I worked as a backend developer</p>
                <p>Developing Node.js backend including testing with Jest</p>
                <p>Created database by utilizing SQLite</p>
                <p>HTML | CSS | Node | React | Redux </p>
                <a href='https://github.com/Lambda-Co-Make-Build-Week/Back-End'>Github Repo</a>
              </div>
              <div className='project'>
                <h2>Weather App</h2>
                <p>I made this weather app while learning redux it was a fun project learning how to not only work the state management system of redux but learning how to search query api's</p>
                <p>Did front end web development in react</p>
                <p>Created a global state management system utilizing Redux</p>
                <p>HTML | CSS | Node | React | Redux </p>
                <a href='https://github.com/Mikehill345/React-Redux-App'>Github Repo</a>
              </div>
            </div>
            <div className='email-form'>
              <Email/>
            </div>
          </section>
        </header>
        <footer>
          <div className='email'>
          <h2>Contact</h2>
          <img src={email} alt='gmail icon' className='icons'/>
          <h2>mikehill.webdeveloper@gmail.com</h2>
          </div>
          <div className="icon-section">
          <img src={github} href='https://github.com/Mikehill345' alt='github icon' className="icons"/>
          <img src={linkedin} href='https://www.linkedin.com/in/mikehill345/' alt='linkedin icon' className="icons"/>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
