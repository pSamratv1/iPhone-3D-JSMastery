import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Hightlight from "./components/Hightlight";
import HowItWorks from "./components/HowItWorks";
import Model from "./components/Model";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className=" bg-black">
      <Navbar />
      <HeroSection />
      <Hightlight />
      <Model />
      <Features />
      <HowItWorks />
    </main>
  );
};

export default App;
