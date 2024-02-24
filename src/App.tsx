import { useEffect, useState, useRef } from 'react';
import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import JoinUs from "@/scenes/joinUs";
import Benefits from "@/scenes/benefits";
import HorizontalCarousel from "@/scenes/HorizontalCarousel";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";
import { SelectedPage } from "@/shared/types";
import { useSpring, animated } from 'react-spring';
import { useScroll } from 'react-spring';
import Lenis from '@studio-freight/lenis';
import leafIcon from "@/assets/leaf.png";
import AnimatedCursor from "react-animated-cursor";
import Loader from '@/scenes/loader';

const X_LINES = 40;
const INITIAL_WIDTH = 20;

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true); 
  const scrollRef = useRef<HTMLDivElement>(null);
  const handleLeafClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleLoadComplete = () => {
      setLoading(false);
    };
    setTimeout(handleLoadComplete, 3000);
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    const lenis = new Lenis();
    lenis.on('scroll', (e: Event) => {
      console.log(e);
    });
    
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const { scrollYProgress } = useScroll();
  
  return (
    <div>
      {loading && <Loader />}
      <AnimatedCursor
        innerSize={12}
        outerSize={50}
        innerScale={1}
        outerScale={1.5}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: "#fe974e99",
        }}
        outerStyle={{
          border: "3px solid #fe974e99",
        }}
      />
      <div
        ref={scrollRef}
        className={`app bg-[#e4efea] select-none ${isTopOfPage ? 'top-of-page' : ''}`}>
        <div className="wavy-progress-bar left">
          {Array.from({ length: X_LINES }).map((_, i) => (
            <animated.div
              key={i}
              className="bar"
              style={{
                width: scrollYProgress.to((scrollP) => {
                  const percentilePosition = (i + 1) / X_LINES;
                  return (
                    INITIAL_WIDTH / 4 +
                    60 *
                      Math.cos(
                        ((percentilePosition - scrollP) * Math.PI) / 1.5
                      ) ** 32
                  );
                }),
              }}
            />
          ))}
        </div>
        <div className="wavy-progress-bar right">
          {Array.from({ length: X_LINES }).map((_, i) => (
            <animated.div
              key={i}
              className="bar"
              style={{
                width: scrollYProgress.to((scrollP) => {
                  const percentilePosition = 1 - (i + 1) / X_LINES;
                  return (
                    INITIAL_WIDTH / 4 +
                    60 *
                      Math.cos(
                        ((percentilePosition - scrollP) * Math.PI) / 1.5
                      ) ** 32
                  );
                }),
              }}
            />
          ))}
        </div>
        <div className="leaf-icon" onClick={handleLeafClick}>
          <img src={leafIcon} alt="Leaf Icon" />
        </div>
        <div className="content">
          <Navbar
            isTopOfPage={isTopOfPage}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Home setSelectedPage={setSelectedPage} />
          <Benefits setSelectedPage={setSelectedPage} />
          <HorizontalCarousel />
          <JoinUs />
          <ContactUs setSelectedPage={setSelectedPage} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
