import Bio from "./components/Bio";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="relative h-full overflow-y-auto antialiased font-roboto">
      <div className="inset-0 bg-fixed bg-cover bg-center bg-img">
        <div className="relative z-10 flex flex-col items-center mx-auto p-4 space-x-8 container">
          <Hero />
          <Navbar />
          <Projects />
          <Bio />
          <Skills />
          <Work />
        </div>
      </div>
    </div>
  );
}

export default App;
