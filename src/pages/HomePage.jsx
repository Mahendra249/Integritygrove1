import { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";

const IntroSlider = lazy(() => import("../components/HomePage/IntroSlider"));
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
  const location = useLocation();

  useEffect(() => {
    const disableBackButton = () => {
      if (location.pathname === "/") {
        window.history.pushState(null, "", window.location.href);
        window.onpopstate = function () {
          window.history.go(1);
        };
      } else {
        window.onpopstate = null;
      }
    };

    disableBackButton();

    return () => {
      window.onpopstate = null;
    };
  }, [location]);

  return (
    <main className="main-bg">
        <IntroSlider />
        <Services />
        <Pricing />
        <Projects />
        <Testimonials />
        <FAQ />
        <ContactSection />
    </main>
  );
}
