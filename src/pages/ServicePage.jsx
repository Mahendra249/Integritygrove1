import { lazy, Suspense } from "react";
const LazyServices = lazy(() => import("@/components/landingPage/Services"));
const LazyServicePge = lazy(() => import("@/components/ServicePage/ServicePge"));
const LazyTechStack = lazy(() => import("@/components/ServicePage/TechStack"));

const ServicePage = () => {
  return (
    <>
      <div className="Services" style={{ margin: "3.7rem" }}>
        <Suspense fallback={<div>Loading Services...</div>}>
          <LazyServices />
        </Suspense>
      </div>
      <div className="skills-part">
        <Suspense fallback={<div>Loading TechStack...</div>}>
          <LazyServicePge />
        </Suspense>
      </div>

      <div className="skills-part">
        <Suspense fallback={<div>Loading TechStack...</div>}>
          <LazyTechStack />
        </Suspense>
      </div>
    </>
  );
};

export default ServicePage;
