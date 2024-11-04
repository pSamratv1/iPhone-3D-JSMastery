import HeroSection from "./components/HeroSection";
import Hightlight from "./components/Hightlight";
import Model from "./components/Model";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className=" bg-black">
      <Navbar />
      <HeroSection />
      <Hightlight />
      <Model />
    </main>
  );
};

export default App;
