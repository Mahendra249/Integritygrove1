import { lazy } from "react";

// Lazy-loaded components
const LeftProjects = lazy(() => import("@/components/Portfolio/LeftProjects"));
const RightProjects = lazy(() =>
  import("@/components/Portfolio/RightProjects")
);
const ProjectDesc = lazy(() => import("@/components/Portfolio/ProjectDesc"));

function ProjectPage() {
  return (
    <>
      <ProjectDesc />
      <LeftProjects />
      <RightProjects />
    </>
  );
}

export default ProjectPage;
