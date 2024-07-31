import { FeatureSection } from "./components/FeatureSection";
import NavBar from "./components/navbar";
import  {HeroSection}  from "./components/HeroSection";
import { Workflow } from "./components/Workflow";
import { Pricing } from "./Pricing";

function App() {
  return (
   <>
    <NavBar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Pricing />
    </div>
   </>
  );
}

export default App;
