import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function IntroSlider() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const captionStyle = {
    maxWidth: windowWidth < 768 ? "100%" : "650px",
    padding: windowWidth < 768 ? "20px" : "0",
    textAlign: windowWidth < 768 ? "center" : "left",
    animation: "fadeInUp 0.5s ease-in-out",
  };

  const headingStyle = {
    fontSize: windowWidth < 768 ? "2.5rem" : "3.6rem",
    fontWeight: "700",
    lineHeight: "1.2",
    animation: "fadeInUp 0.5s ease-in-out",
    animationDelay: "0.2s",
  };

  const paragraphStyle = {
    color: "#CCCCCC",
    marginTop: "20px",
    animation: "fadeInUp 0.5s ease-in-out",
    animationDelay: "0.4s",
  };

  const exploreButtonStyle = {
    textDecoration: "none",
    background: "linear-gradient(135deg, #007BFF, #FFD700)",
    borderRadius: "5px",
    padding: windowWidth < 768 ? "10px 20px" : "15px 30px",
    boxShadow: "0 4px 14px 0 rgba(0,0,0,0.11)",
    display: "inline-block",
    animation: "moveInBottom 0.5s ease-out 0.75s",
    animationFillMode: "backwards",
  };

  return (
    <div
      className="main-box"
      style={{
        backgroundColor: "#1a1919",
        color: "#FFFFFF",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        position: "relative",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="caption" style={captionStyle}>
              <h5 className="fw-300 mb-15" style={{ color: "#FFD700" }}>
                The Frontier of Innovation
              </h5>
              <h1 style={headingStyle}>
                Crafting Tomorrow's Solutions, Today.
              </h1>
              <p style={paragraphStyle}>
                Join us on a journey where technology meets creativity, and
                ideas transform into reality.
              </p>
            </div>
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-center">
            <div style={exploreButtonStyle}>
              <Link
                to="portfolio"
                style={{
                  color: "#121212",
                  fontWeight: "500",
                  fontSize: "1.2rem",
                  textDecoration: "none",
                }}
              >
                Explore Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
