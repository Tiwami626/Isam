
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";


const App = () => {
  return (
    <div style={{ fontFamily: "Lato, sans-serif" }}>
      <Navbar />
      <Hero />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
