import { useEffect, useState, lazy } from "react";
import IntroSlider from "@/components/HomePage/IntroSlider";
import IntroSlider992 from "@/components/HomePage/IntroSlider992";
const Pricing = lazy(() => import("../components/landingPage/Pricing"));
const Testimonials = lazy(() =>
  import("../components/landingPage/Testimonials")
);
const Services = lazy(() => import("../components/landingPage/Services"));
const ContactSection = lazy(() =>
  import("../components/landingPage/ContactSection")
);
const Projects = lazy(() => import("../components/landingPage/Projects"));
const FAQ = lazy(() => import("@/components/landingPage/FAQ"));

export default function HomePage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="main-bg">
      {windowWidth < 992 ? <IntroSlider992 /> : <IntroSlider />}
      <Services />
      <Pricing />
      <Projects />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </main>
  );
}
