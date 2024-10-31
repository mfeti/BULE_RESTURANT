import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Banner />
      </main>
    </div>
  );
}

export default App;
