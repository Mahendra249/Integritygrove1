import React from "react";

const ErrorPage = () => {
  return (
    <section className="error-404 section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <div className="img">
              <img
                loading="lazy"
                src="https://ui-themez.smartinnovates.net/items/geekfolio/dark/assets/imgs/svg-assets/404.svg"
                alt=""
              />
            </div>
            <div className="cont text-center">
              <h3>Page not found</h3>
              <p className="mt-15">
                The requested URL you are looking for <br />
                doesn’t exist on this server.
              </p>
              <a
                href="#0"
                className="butn butn-md main-colorbg3 radius-30 mt-50"
              >
                <span className="text-dark fw-600">Back To Homepage</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
