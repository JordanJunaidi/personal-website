import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import FadeInSection from "./components/FadeInSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FadeInSection>
        <Intro />
      </FadeInSection>
      <FadeInSection once={true}>
        <AboutMe />
      </FadeInSection>
      <FadeInSection>
        <Experience />
      </FadeInSection>
      <FadeInSection>
        <Projects />
      </FadeInSection>
      <FadeInSection>
        <Skills />
      </FadeInSection>
      <Contact />
    </div>
  );
}

export default App;
