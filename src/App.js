
import './App.css';
import NaveBar from './component/NaveBar';
import Home from './component/Home';
import AboutMe from './component/AboutMe';
import Project from './component/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div>
        <NaveBar/>
        <Home />
        <AboutMe />
        <Project />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
