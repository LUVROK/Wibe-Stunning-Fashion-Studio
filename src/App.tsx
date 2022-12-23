import "locomotive-scroll/dist/locomotive-scroll.css";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import { dark } from "./styles/Themes";
import { useRef, useState, useEffect } from "react";
import Home from "./sections/Home";
import { AnimatePresence } from "framer-motion";
import AboutUs from "./sections/AboutUs";
import Shop from "./sections/Shop";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Marquee from "./sections/Marquee";
import Footer from "./sections/Footer";
import NewArrival from "./sections/NewArrival";
import Loader from "./components/Loader";

function App() {
  const containerRef = useRef(null);
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            InertiaPlugin: 0.55,
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
          <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence>
          <main className="App" data-scroll-container ref={containerRef}>
            <ScrollTriggerProxy />
            <AnimatePresence>
              {Loaded ? null : <Loader />}
              <Home key="home" />
              <AboutUs key="about" />
              <Shop key="Shop" />
              <Marquee key="marquee" />
              <NewArrival key="new arrival" />
              <Footer key="Footer" />
            </AnimatePresence>
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
