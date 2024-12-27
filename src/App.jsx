import Bio from './components/Bio';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Work from './components/Work';
import './index.css';

function App() {
  return (
    <div className="relative h-full overflow-y-auto antialiased ">
      <div className="inset-0 bg-fixed bg-cover bg-center bg-img">
        <div className="relative z-10 flex flex-col items-center mx-auto p-4 space-x-8 container">
          <Hero />
          <Navbar />
          <Projects />
          <Bio />
          <Skills />
          <Tools />
          <Work />
          <Blogs />
          <Education />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
