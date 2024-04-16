import { lazy, Suspense } from "react";
import Loader from "@/components/Loader";
const LazyServicePge = lazy(() =>
  import("@/components/ServicePage/ServicePge")
);
const LazyTechStack = lazy(() => import("@/components/ServicePage/TechStack"));
const ServicePage = () => {
  return (
    <>
      <div className="skills-part" style={{ paddingTop: "5.7rem" }}>
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
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
