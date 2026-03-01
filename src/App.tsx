import About from "./About";
import Experience from "./Experience";
import Header, { MobileHeader } from "./Header";
import Projects from "./Projects";
import { ScreenSizeProvider } from "./ScreenSizeContext";
import Skills from "./Skills";

function App() {
  return (
    <>
      <ScreenSizeProvider>
        <main>
          <MobileHeader />
          <Header />
          <About />
          <Skills />
          <Projects />
          <Experience />
        </main>
      </ScreenSizeProvider>
    </>
  );
}

export default App;
