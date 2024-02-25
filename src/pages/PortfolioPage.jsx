import { Suspense, lazy } from "react";

const ProjectDesc = lazy(() => import("@/components/Portfolio/ProjectDesc"));

function ProjectPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectDesc />
        <section className="blog-list-half section-padding sub-bg">
          <div className="container">
            <div className="row">
              <SingleProject />
              <SingleProject />
              <SingleProject />
              <SingleProject />
              <SingleProject />
              <SingleProject />
            </div>
          </div>
        </section>
      </Suspense>
    </>
  );
}

export default ProjectPage;

function SingleProject() {
  return (
    <div className="col-lg-6">
      <div className="item mb-50">
        <div className="row">
          <div className="col-md-6 img">
            <img
              loading="lazy"
              src="https://ui-themez.smartinnovates.net/items/geekfolio/dark/assets/imgs/blog/h1.jpg"
              alt
            />
          </div>
          <div className="col-md-6 main-bg cont valign">
            <div className="full-width">
              <span className="date fz-12 ls1 text-u opacity-7 mb-15">
                August 6, 2022
              </span>
              <h5>
                <a href="blog-details.html">
                  Free advertising for your online business.
                </a>
              </h5>
              <div className="tags colorbg mt-15">
                <a href="blog-list.html">Marketing</a>
                <a href="blog-list.html">Design</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
