import { icon1 } from "../../assets/imgs/HomePage";
import { icon2 } from "../../assets/imgs/HomePage";
import { icon3 } from "../../assets/imgs/HomePage";
import {lottifile1,lottifile2,lottifile3,lottifile4} from "../../assets/imgs/HomePage/index"

import ServicesCard from "./ServicesCard";

function Services() {
  return (
    <>
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
                  
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <ServicesCard title="Android Development" item={icon1} Lottieimg={lottifile2} description="Creating a higher spacing and how people move through a unique."/>
            </div>
            <div className="col-lg-4">
              <ServicesCard title=" Web-app Development" item={icon2} Lottieimg={lottifile3} description="Creating a higher spacing and how people move through a unique." />
            </div>
            <div className="col-lg-4">
              <ServicesCard title="Ecommerce Development" item={icon3} Lottieimg={lottifile1} description="Creating a higher spacing and how people move through a unique." />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
