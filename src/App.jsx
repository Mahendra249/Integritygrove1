import { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";
import ErrorPage from "./components/ErrorPages/ErrorPage";
import Connection from "./components/ErrorPages/Connection";

const HomeLayout = lazy(() => import("./layout/HomeLayout"));
const HomePage = lazy(() => import("./pages/HomePage"));
const OurTeamPage = lazy(() => import("./pages/OurTeamPage"));
const ProjectPage = lazy(() => import("./pages/PortfolioPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const HirePage = lazy(() => import("./pages/HirePage"));

function App() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    try {
      if ("scrollBehavior" in document.documentElement.style) {
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
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blogdetails" element={<BlogDetails />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/Hire" element={<HirePage />} />
          <Route path="/connection" element={<Connection />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
