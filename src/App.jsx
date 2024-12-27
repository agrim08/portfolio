import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative h-full overflow-y-auto antialiased font-roboto">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img">
        <div className="relative z-10 flex flex-col items-center mx-auto p-4 space-x-8 container">
          <Hero />
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default App;
