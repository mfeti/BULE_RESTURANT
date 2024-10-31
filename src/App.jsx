import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhyChoose from "./components/WhyChoose";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Banner />
        <WhyChoose />
      </main>
    </div>
  );
}

export default App;
