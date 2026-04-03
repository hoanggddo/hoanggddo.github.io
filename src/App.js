import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
