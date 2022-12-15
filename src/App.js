import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import logo from './logo.svg';
import { NavBar } from './components/navbar';
import { Banner } from './components/banner';
import { Skills } from './components/skills';
import { Projects } from './components/projects';
import { Footer } from './components/Footer';
import { Contact } from './components/contact';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner />
      <Skills/>
      <Projects/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
