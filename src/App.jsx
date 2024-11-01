import { useEffect, useState } from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhyChoose from "./components/WhyChoose";
import Popup from "./components/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(function () {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const handlePopup = () => {
    setShowPopup((prev) => !prev);
  };
  return (
    <div className="overflow-x-hidden">
      <Navbar handlePopup={handlePopup} />
      <main>
        <Hero />
        <Banner />
        <WhyChoose />
        <About handlePopup={handlePopup} />
        <Banner />
      </main>
      <footer>
        <Footer />
      </footer>
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
}

export default App;
