import React, { lazy, Suspense } from "react";
import { GrServices } from "react-icons/gr";
import "../../src/App.css";


// Lazy load components
const LazyServicePge = lazy(() =>
  import("@/components/ServicePage/ServicePge")
);
const LazyTechStack = lazy(() => import("@/components/ServicePage/TechStack"));

const ServicePage = () => {
   

  return (
    <>
      {/* Suspense for LazyServices */}
      {/* <div className="Services" style={{ margin: "3.7rem" }}>
        <Suspense fallback={<div>Loading Services...</div>}>
          <LazyServices />
        </Suspense>
      </div> */}
      {/* Suspense for LazyServicePge */}
      <div className="skills-part" style={{ paddingTop: "5.7rem" }}>
        <Suspense fallback={<div>Loading TechStack...</div>}>
          {/* LazyServicePge component with props */}
          <LazyServicePge/>
        </Suspense>
      </div>

      {/* Suspense for LazyTechStack */}
      <div className="skills-part">
        <Suspense fallback={<div>Loading TechStack...</div>}>
          {/* LazyTechStack component */}
          <LazyTechStack />
        </Suspense>
      </div>
    </>
  );
};

export default ServicePage;
