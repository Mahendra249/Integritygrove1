import { BackgroundImage, BackgroundImage2, BackgroundImage3 } from "@/assets/imgs/HomePage";
import { lazy, Suspense } from "react";

const LazyPriceCard = lazy(() => import("./PriceCard"));

const Pricing = () => {
  return (
    <section className="pricing section-padding sub-bg">
      <div className="container">
        <div className="sec-lg-head mb-80">
          <div className="row">
            <div className="col-lg-8">
              <div className="position-re">
                <h6 className="dot-titl colorbg-3 mb-10">Featured Services</h6>
                <h2 className="fz-60 fw-700">Our Plans</h2>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center">
              <div className="text">
                <p></p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="row md-marg">
          <div className="col-lg-4">
            <Suspense fallback={<div>Loading...</div>}>
            <LazyPriceCard l1={"Aviater Game"} l2={"Satta Matka Game"} l3={" Daman Game"} l4={"Teen Patti Game"} price ={"$999/-"}  backimg={BackgroundImage}/>
            </Suspense>
          </div>
          <div className="col-lg-4">
            <Suspense fallback={<div>Loading...</div>}>
              <LazyPriceCard l1={"Taxi App"} l2={"Dating App (Chat App)"} l3={" Food Delivery App"} l4={"Portfolio Web App"} price ={"$1299-"}  backimg={BackgroundImage3} />
            </Suspense>
          </div>
          <div className="col-lg-4">
            <Suspense fallback={<div>Loading...</div>}>
              <LazyPriceCard l1={"Hotel Management System " } l2={"Learning Management System"} l3={" CRM & HRMS System"} l4={"Ecommerce Web App (Multi Vendor and Single Vendor)"} price ={"$1999/-"}  backimg={BackgroundImage2} />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
