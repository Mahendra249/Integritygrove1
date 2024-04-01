import React from "react";

function FAQ() {
  return (
    <>
      <header
        className="page-header text-center section-padding pb-0"
        style={{ transform: "translate(0px, 0px)" }}
      >
        <div
          className="container mt-80"
          style={{ opacity: 1, transform: "translate(0px, 0px)" }}
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="caption">
                <h6 className="sub-title">Need to ask something?</h6>
                <h1 className="fz-55 text-center">
                  Frequently Asked Questions
                </h1>
              </div>
              <div className="row">
                <div className="col-lg-11 offset-lg-1">
                  <div className="text mt-30">
                    <p>
                      Discover more about IG-Tech, our comprehensive tech
                      solutions, and how we design the future. Our team is
                      dedicated to crafting innovative software, games,
                      websites, and apps that set new industry standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section
        className="faqs section-padding main-bg"
        style={{ marginTop: "-64px" }}
      >
        <div className="container">
          <div className="row lg-marg">
            <div className="col-lg-6 md-mb50">
              <div className="item pb-50 mb-50 bord-thin-bottom">
                <h6 className="mb-15">01. What services does IG TECH offer?</h6>
                <p>
                  IG Tech is your one-stop for innovative IT services, including
                  web and app development, game creation, blockchain innovation,
                  and deployment services, tailored to propel businesses into
                  the digital age.
                </p>
              </div>
              <div className="item pb-50 mb-50 bord-thin-bottom">
                <h6 className="mb-15">
                  02. What technologies do we specialize in?
                </h6>
                <p>
                  Our expertise spans across web and mobile app development,
                  blockchain, AI, cloud solutions, and cybersecurity, aiming to
                  deliver cutting-edge solutions for a digital-first world.
                </p>
              </div>
              <div className="item">
                <h6 className="mb-15">
                  03. Do we offer custom software development?
                </h6>
                <p>
                  Absolutely! We craft bespoke software solutions, ensuring they
                  align perfectly with your business goals for maximum
                  efficiency and user satisfaction.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="item pb-50 mb-50 bord-thin-bottom">
                <h6 className="mb-15">04. Which industries do we cater to?</h6>
                <p>
                  IG Tech serves a multitude of sectors including healthcare,
                  finance, education, and retail, adapting our tech solutions to
                  meet industry-specific challenges.
                </p>
              </div>
              <div className="item pb-50 mb-50 bord-thin-bottom">
                <h6 className="mb-15">
                  05. How do we approach mobile application development?
                </h6>
                <p>
                  Our approach integrates discovery, design, development, and
                  testing, culminating in the launch of exceptional mobile apps,
                  followed by ongoing support.
                </p>
              </div>
              <div className="item">
                <h6 className="mb-15">06. How to start working with us?</h6>
                <p>
                  Kickstart your project with IG Tech by contacting us through
                  our website, email, or phone. Our team eagerly awaits to
                  discuss and bring your innovative ideas to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;
