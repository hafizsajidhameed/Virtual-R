import { FeatureSection } from "./components/FeatureSection";
import NavBar from "./components/navbar";
import  {HeroSection}  from "./components/HeroSection";
import { Workflow } from "./components/Workflow";
import { Pricing } from "./components/Pricing";
import { Testimonial } from "./components/Testimonial";
import { Footer } from "./components/Footer";

function App() {
  return (
   <>
    <NavBar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <Testimonial />
      <Footer />
    </div>
   </>
  );
}

export default App;
