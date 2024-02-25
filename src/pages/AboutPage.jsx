import {
  TestomoImage1,
  aboutImg1,
  aboutImg2,
} from "../assets/imgs/HomePage/index";
const AboutPage = () => {
  return (
    <div>
      <header
        className="page-header section-padding pb-15"
        style={{
          translate: "none",
          rotate: "none",
          scale: "none",
          transform: "translate(0px, 0px)",
        }}
      >
        <div
          className="container mt-80"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            opacity: 1,
            transform: "translate(0px, 0px)",
          }}
        >
          <div className="row">
            <div className="col-lg-8">
              <div className="caption">
                <h6 className="sub-title">Who We Are ?</h6>
                <h1 className="fz-55">
                  We're a digital agency based in Valencia.
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 offset-lg-4">
              <div className="text mt-30">
                <p>
                  We help our clients succeed by creating brand identities,
                  digital experiences, and print materials that communicate
                  clearly, achieve marketing goals, and look fantastic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="pg-about section-padding sub-bg">
        <div className="container">
          <div
            className="row"
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <div className="col-lg-12">
              <div
                className="bg-img radius-10 md-mb50"
                data-background={aboutImg1}
                style={{ backgroundImage: `url(${aboutImg1})` }}
              />
            </div>
            <div className="col-lg-12">
              <div
                className="bg-img radius-10"
                data-background={aboutImg2}
                style={{ backgroundImage: `url(${aboutImg2})` }}
              />
            </div>
            <div className="col-lg-12">
              <div className="cont ">
                <h1 className="text-center">About</h1>
                <h4 className="text-center">
                  GeekFolio are digital marketing experts and can partner with
                  you to implement tactical campaigns which engage and connect
                  audiences whilst driving ROI for your brand. We are SEO and
                  SEM professionals and have implemented successful search
                  campaigns for clients which drive super-charge improvements in
                  organic rankings, increase visits and grow revenue.{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="serv-box section-padding">
        <div className="container">
          <div className="sec-lg-head mb-80">
            <div className="row">
              <div className="col-lg-8">
                <div className="position-re">
                  <h6 className="dot-titl-non mb-10">Featured Services</h6>
                  <h2 className="fz-60 fw-700">Our Services</h2>
                </div>
              </div>
              <div className="col-lg-4 d-flex align-items-center">
                <div className="text">
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit,
                    sed quia.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="serv-item md-mb50 radius-10">
                <div className="icon-img-60 mb-40">
                  <img
                    loading="lazy"
                    src="assets/imgs/serv-icons/0.png"
                    alt=""
                  />
                </div>
                <h5 className="mb-30 pb-30 bord-thin-bottom">
                  Brand Strategy &amp; <br /> Art Direction
                </h5>
                <p>
                  Creating a higher spacing and how people move through a
                  unique.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="serv-item md-mb50 radius-10">
                <div className="icon-img-60 mb-40">
                  <img
                    loading="lazy"
                    src="assets/imgs/serv-icons/1.png"
                    alt=""
                  />
                </div>
                <h5 className="mb-30 pb-30 bord-thin-bottom">
                  UX/UI Design &amp; <br /> Website/App Design
                </h5>
                <p>
                  Creating a higher spacing and how people move through a
                  unique.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="serv-item radius-10">
                <div className="icon-img-60 mb-40">
                  <img
                    loading="lazy"
                    src="assets/imgs/serv-icons/2.png"
                    alt=""
                  />
                </div>
                <h5 className="mb-30 pb-30 bord-thin-bottom">
                  Typography &amp; <br /> Video Production
                </h5>
                <p>
                  Creating a higher spacing and how people move through a
                  unique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testim-vrt sub-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 valign">
              <div className="cont">
                <div>
                  <h6 className="sub-title mb-15">Since From 2008</h6>
                  <h3>Keep pushing forward. We've got your back.</h3>
                  <div className="text mt-10 pb-30 bord-thin-bottom">
                    <p>
                      Things go wrong have questions. We’ve understand. So we
                      have people
                    </p>
                  </div>
                  <div className="stauts d-flex mt-20">
                    <div className="item d-flex align-items-center mt-30">
                      <h2 className="mr-20">12k</h2>
                      <p className="fz-14">
                        Happy Users <br /> Around World
                      </p>
                    </div>
                    <div className="item d-flex align-items-center ml-auto mt-30">
                      <h2 className="mr-20">150k</h2>
                      <p className="fz-14">
                        Projects <br /> Already Done
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div>
                <div className="main-marqv">
                  <div className="slide-vertical st1">
                    <div className="box">
                      <div className="item radius-30 mt-30">
                        <div className="cont mb-40">
                          <div className="rate-stars mb-30 fz-12">
                            <span className="rate main-color">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </span>
                          </div>
                          <p className="fw-400">
                            I have been hiring people in this space for a number
                            of years and I have never seen this level of
                            professionalism. It really feels like you are
                            working with a team that can get the job done.
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <div>
                            <div className="img circle-80">
                              <img
                                loading="lazy"
                                src={TestomoImage1}
                                alt=""
                                className="circle-img"
                              />
                            </div>
                          </div>
                          <div className="ml-30">
                            <div className="info">
                              <h6>Leonard Heiser</h6>
                              <span className="main-color sub-title">Ceo</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item radius-30 mt-30">
                        <div className="cont mb-40">
                          <div className="rate-stars mb-30 fz-12">
                            <span className="rate main-color">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </span>
                          </div>
                          <p className="fw-400">
                            I have been hiring people in this space for a number
                            of years and I have never seen this level of
                            professionalism. It really feels like you are
                            working with a team that can get the job done.
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <div>
                            <div className="img circle-80">
                              <img
                                loading="lazy"
                                src={TestomoImage1}
                                alt=""
                                className="circle-img"
                              />
                            </div>
                          </div>
                          <div className="ml-30">
                            <div className="info">
                              <h6>Leonard Heiser</h6>
                              <span className="main-color sub-title">Ceo</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item radius-30 mt-30">
                        <div className="cont mb-40">
                          <div className="rate-stars mb-30 fz-12">
                            <span className="rate main-color">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </span>
                          </div>
                          <p className="fw-400">
                            I have been hiring people in this space for a number
                            of years and I have never seen this level of
                            professionalism. It really feels like you are
                            working with a team that can get the job done.
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <div>
                            <div className="img circle-80">
                              <img
                                loading="lazy"
                                src={TestomoImage1}
                                alt=""
                                className="circle-img"
                              />
                            </div>
                          </div>
                          <div className="ml-30">
                            <div className="info">
                              <h6>Leonard Heiser</h6>
                              <span className="main-color sub-title">Ceo</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box">
                      <div className="item radius-30 mt-30">
                        <div className="cont mb-40">
                          <div className="rate-stars mb-30 fz-12">
                            <span className="rate main-color">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </span>
                          </div>
                          <p className="fw-400">
                            I have been hiring people in this space for a number
                            of years and I have never seen this level of
                            professionalism. It really feels like you are
                            working with a team that can get the job done.
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <div>
                            <div className="img circle-80">
                              <img
                                loading="lazy"
                                src={TestomoImage1}
                                alt=""
                                className="circle-img"
                              />
                            </div>
                          </div>
                          <div className="ml-30">
                            <div className="info">
                              <h6>Leonard Heiser</h6>
                              <span className="main-color sub-title">Ceo</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item radius-30 mt-30">
                        <div className="cont mb-40">
                          <div className="rate-stars mb-30 fz-12">
                            <span className="rate main-color">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </span>
                          </div>
                          <p className="fw-400">
                            I have been hiring people in this space for a number
                            of years and I have never seen this level of
                            professionalism. It really feels like you are
                            working with a team that can get the job done.
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <div>
                            <div className="img circle-80">
                              <img
                                loading="lazy"
                                src={TestomoImage1}
                                alt=""
                                className="circle-img"
                              />
                            </div>
                          </div>
                          <div className="ml-30">
                            <div className="info">
                              <h6>Leonard Heiser</h6>
                              <span className="main-color sub-title">Ceo</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item radius-30 mt-30">
                        <div className="cont mb-40">
                          <div className="rate-stars mb-30 fz-12">
                            <span className="rate main-color">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </span>
                          </div>
                          <p className="fw-400">
                            I have been hiring people in this space for a number
                            of years and I have never seen this level of
                            professionalism. It really feels like you are
                            working with a team that can get the job done.
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <div>
                            <div className="img circle-80">
                              <img
                                loading="lazy"
                                src={TestomoImage1}
                                alt=""
                                className="circle-img"
                              />
                            </div>
                          </div>
                          <div className="ml-30">
                            <div className="info">
                              <h6>Leonard Heiser</h6>
                              <span className="main-color sub-title">Ceo</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
