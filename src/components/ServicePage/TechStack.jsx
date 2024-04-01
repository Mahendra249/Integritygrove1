import React from "react";
import {
  Tech1,
  Tech2,
  Tech3,
  Tech4,
  Tech5,
  Tech6,
  Tech7,
  Tech8,
  Tech9,
  Tech10,
  Tech11,
  Tech12,
  Tech13,
  Tech14,
  Tech15,
  Tech16,
  Tech17,
  Tech18,
  Tech19,
  Tech20,
  Tech21,
  Tech23,
  Tech24,
  Tech25,
  Tech26,
  Tech27,
  Tech28,
  Tech29,
  Tech30,
  Tech31,
} from "@/assets/imgs/HomePage"; // Make sure to adjust the import path based on your project structure

const skillsData = [
  { id: 1, name: "React", imageSrc: Tech6 },
  { id: 2, name: "Node.js", imageSrc: Tech7 },
  { id: 3, name: "Django", imageSrc: Tech8 },
  { id: 4, name: "Vue.js", imageSrc: Tech9 },
  { id: 5, name: "Java", imageSrc: Tech10 },
  { id: 6, name: "Python", imageSrc: Tech11 },
  { id: 7, name: "MongoDB", imageSrc: Tech12 },
  { id: 8, name: "Tech13", imageSrc: Tech13 },
  { id: 9, name: "Tech14", imageSrc: Tech14 },
  { id: 10, name: "Tech15", imageSrc: Tech15 },
  { id: 11, name: "Tech16", imageSrc: Tech16 },
  { id: 12, name: "Tech17", imageSrc: Tech17 },
  { id: 13, name: "Tech18", imageSrc: Tech18 },
  { id: 14, name: "Tech19", imageSrc: Tech19 },
  { id: 15, name: "Tech20", imageSrc: Tech20 },
  { id: 16, name: "Tech21", imageSrc: Tech21 },
  { id: 18, name: "Tech23", imageSrc: Tech23 },
  { id: 19, name: "Tech24", imageSrc: Tech24 },
  { id: 20, name: "Tech25", imageSrc: Tech25 },
  { id: 21, name: "Tech26", imageSrc: Tech26 },
  { id: 22, name: "Tech27", imageSrc: Tech27 },
  { id: 23, name: "Tech28", imageSrc: Tech28 },
  { id: 24, name: "Tech29", imageSrc: Tech29 },
  { id: 25, name: "Tech30", imageSrc: Tech30 },
  { id: 27, name: "Tech31", imageSrc: Tech1 },
  { id: 28, name: "Tech31", imageSrc: Tech2 },
  { id: 29, name: "Tech31", imageSrc: Tech3 },
  { id: 30, name: "Tech31", imageSrc: Tech4 },
];

const TechStack = () => {
  return (
    <section
      className="skills-exp section-padding sub-bg"
      data-scroll-index="4"
      id="section-id-main"
    >
      <div className="container">
        <div className="position-re">
          <h2 className="fz-60 fw-70 d-flex align-items-center justify-content-center">
            Tech Stack
          </h2>
        </div>
        {/* <div className="row"> */}
        <div className="main-container-tech">
          {skillsData.map((item) => (
            <div className="main-child-part">
              <img loading="lazy" src={item.imageSrc} alt={item.name} />
            </div>
          ))}
        </div>
      </div>
      {/* </div>/ */}
    </section>
  );
};

export default TechStack;
