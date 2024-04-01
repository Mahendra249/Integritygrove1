import { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";
import ErrorPage from "./components/ErrorPages/ErrorPage";
import Connection from "./components/ErrorPages/Connection";
import HomeLayout from "./layout/HomeLayout";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import OurTeamPage from "./pages/OurTeamPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import HirePage from "./pages/HirePage";

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
        <Route path="/" element={<HomeLayout />}>
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
