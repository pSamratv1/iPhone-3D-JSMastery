import HeroSection from "./components/HeroSection";
import Hightlight from "./components/Hightlight";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className=" bg-black">
      <Navbar />
      <HeroSection />
      <Hightlight />
    </main>
  );
};

export default App;
