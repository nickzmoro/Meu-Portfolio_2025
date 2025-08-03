// Import Swiper styles
import "swiper/css";

// components
import Header from "../../components/ui/header/header";
import Footer from "../../components/ui/footer/footer";
import "./Home.css";
import FormContact from "../../components/ui/form/form";

// images
import SplashScreen from "../../components/ui/splashScreen/SplashScreen";

// sections
import Home from "../../components/HomeSection";
import About from "../../components/AboutSection";
import Skills from "../../components/SkillsSection";
import Projects from "../../components/ProjectsSection";
import Experience from "../../components/ExperienceSection";

function App() {
  return (
    <>
      <SplashScreen />

      {/* Header */}
      <Header />

      {/* Main */}
      <main>
        {/* Home */}
        <Home />

        {/* About */}
        <About />

        {/* Skills */}
        <Skills />

        {/* Projects */}
        <Projects />

        {/* Experience */}
        <Experience />

        {/* Form Contact */}
        <FormContact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
