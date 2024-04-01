import { icon1 } from "../../assets/imgs/HomePage";
import { icon2 } from "../../assets/imgs/HomePage";
import { icon3 } from "../../assets/imgs/HomePage";
import {
  lottifile1,
  lottifile2,
  lottifile3,
} from "../../assets/imgs/HomePage/index";

import ServicesCard from "./ServicesCard";

function Services() {
  return (
    <>
      <section className="serv-box section-padding ">
        <div className="container">
          <div className="sec-lg-head mb-40 d-flex justify-content-center">
            <div className="row">
              <div className="col-lg-12">
                <h6 className=" mb-10 d-flex justify-content-center">
                  **Featured Services**
                </h6>
                <h2 className="fz-60 fw-700">Our Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <ServicesCard
                title="Android/App Development"
                item={icon1}
                Lottieimg={lottifile2}
                description="Creating a higher spacing and how people move through a unique."
              />
            </div>
            <div className="col-lg-4">
              <ServicesCard
                title=" Web-app Development"
                item={icon2}
                Lottieimg={lottifile3}
                description="Creating a higher spacing and how people move through a unique."
              />
            </div>
            <div className="col-lg-4">
              <ServicesCard
                title="Ecommerce Development"
                item={icon3}
                Lottieimg={lottifile1}
                description="Creating a higher spacing and how people move through a unique."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
