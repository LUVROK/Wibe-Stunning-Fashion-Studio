import "locomotive-scroll/dist/locomotive-scroll.css";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import { dark } from "./styles/Themes";
import { useRef } from "react";
import Home from "./sections/Home";
import { AnimatePresence } from "framer-motion";
import AboutUs from "./sections/AboutUs";
import Shop from "./sections/Shop";

function App() {
  const containerRef = useRef(null);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <Home />
              <AboutUs />
              <Shop />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
