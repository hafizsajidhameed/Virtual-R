import { FeatureSection } from "./components/FeatureSection";
import NavBar from "./components/navbar";
import  {HeroSection}  from "./components/HeroSection";

function App() {
  return (
   <>
   <NavBar />
   <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection />
    <FeatureSection />
   </div>
   </>
  );
}

export default App;
