import { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

const HomeLayout = lazy(() => import("./layout/HomeLayout"));
const HomePage = lazy(() => import("./pages/HomePage"));
const OurTeamPage = lazy(() => import("./pages/OurTeamPage"));
const ProjectPage = lazy(() => import("./pages/PortfolioPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ServicePage = lazy(() => import("./pages/ServicePage"));

function App() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    try {
      if ("scrollBehavior" in document.documentElement.style) {
        // Use smooth scrolling if supported
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      } else {
        window.scrollTo(0, 0);
      }
    } catch (error) {
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <HomeLayout />
            </Suspense>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="/portfolio" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ourteam" element={<OurTeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/service" element={<ServicePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;