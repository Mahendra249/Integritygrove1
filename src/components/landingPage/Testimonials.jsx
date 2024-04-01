import React from "react";
import { TestomoImage1 } from "../../assets/imgs/HomePage";

const Testimonials = () => {
  const reviews = [
    {
      name: "Leonard Heiser",
      title: "CEO",
      reviewText:
        "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
      image: TestomoImage1,
    },
    {
      name: "Leonard Heiser",
      title: "CEO",
      reviewText:
        "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
      image: TestomoImage1,
    },
    {
      name: "Leonard Heiser",
      title: "CEO",
      reviewText:
        "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
      image: TestomoImage1,
    },
    {
      name: "Leonard Heiser",
      title: "CEO",
      reviewText:
        "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
      image: TestomoImage1,
    },
  ];

  return (
    <>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .item {
            animation: fadeInUp 0.5s ease-in-out forwards;
          }

          .cont:hover {
            transform: translateY(-10px);
            transition: transform 0.5s ease-in-out;
          }
        `}
      </style>
      <section className="testim-vrt sub-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 valign">
              <div className="cont">
                <h6 className="sub-title mb-15">Since From 2022</h6>
                <h3>Keep pushing forward. We've got your back.</h3>
                <div className="text mt-10 pb-30 bord-thin-bottom">
                  <p>
                    Things go wrong have questions. We’ve understand. So we have
                    people.
                  </p>
                </div>
                <div className="status d-flex mt-20">
                  <div className="item d-flex align-items-center mt-30">
                    <h2 className="mr-20">240+</h2>
                    <p className="fz-14">
                      Happy Users <br /> Around World
                    </p>
                  </div>
                  <div className="item d-flex align-items-center ml-auto mt-30">
                    <h2 className="mr-20">600</h2>
                    <p className="fz-14">
                      Projects <br /> Already Done
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="main-marqv">
                <div className="slide-vertical st1">
                  {reviews.map((review, index) => (
                    <Review key={index} {...review} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function Review({ name, title, reviewText, image }) {
  return (
    <div className="item radius-30 mt-30">
      <div className="cont mb-40">
        <div className="rate-stars mb-30 fz-12">
          <span className="rate main-color">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </span>
        </div>
        <p className="fw-400">{reviewText}</p>
      </div>
      <div className="d-flex align-items-center">
        <div className="img circle-80">
          <img loading="lazy" src={image} alt={name} className="circle-img" />
        </div>
        <div className="ml-30">
          <div className="info">
            <h6>{name}</h6>
            <span className="main-color sub-title">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
