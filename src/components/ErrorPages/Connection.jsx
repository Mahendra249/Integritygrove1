import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/imgs/HomePage/Lottie/two.json";

const Connection = () => {
  return (
    <section className="error-404 section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
            <div className="img">
              <Lottie options={{ animationData }} />
            </div>
            <div className="cont text-center">
              <h3 style={{ color: "red" }}>Something Went Wrong</h3>
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

export default Connection;
