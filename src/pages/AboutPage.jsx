import ProfileCard1 from "@/components/landingPage/ProfileCard1";
import {
  TeamEmoji,
  TestomoImage1,
  aboutImg1,
  aboutImg2,
  aboutImg3,
  teammember1,
  teammember2,
  teammember3,
  teammember4,
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
            <div className="col-lg-5"> <img src={aboutImg2} alt="" style={{padding:"15px", height:"90%" , borderRadius:"4px"}} /> </div>
            <div className="col-lg-7" style={{padding:"15px"}}> 
            <h1 className="fz-25 mt-4 ">About Us</h1>
             <h1 className="fz-45 text-center mt-4" >
                  We're a digital and development based in company.
                </h1>
                <p className=" text-center">
                  We help our clients succeed by creating brand identities,
                  digital experiences, and print materials that communicate
                  clearly, achieve marketing goals, and look fantastic.We help our clients succeed by creating brand identities,
                  digital experiences, and print materials that communicate
                  clearly, achieve marketing goals, and look fantastic.
                </p></div>
          </div>
        </div>
      </header>

      <section className="pg-about section-padding sub-bg">
        <div className="container">
          <div
            className="row" >
            <div className="col-lg-5">
            <div className="cont ">
                <h1 className=" fz-55 mt-4 ">Our Motive</h1>
                <p className="text-center mt-4">
                 " GeekFolio are digital marketing experts and can partner with
                  you to implement tactical campaigns which engage and connect
                  audiences whilst driving ROI for your brand. We are SEO and
                  SEM professionals and have implemented successful search
                  campaigns for clients which drive super-charge improvements in
                  organic rankings, increase visits and grow revenue.We are SEO and
                  SEM professionals and have implemented successful search
                  campaigns for clients which drive super-charge improvements in
                  organic rankings, increase visits and grow revenu"{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-7">
               <img src={aboutImg3} alt=""  style={{padding:"15px", height:"80%" , borderRadius:"4px"}} />
            </div>
          </div>
        </div>
      </section>

      <section className="serv-box section-padding">
        <div className="container">
          <div className="sec-lg-head mb-40">
            <div className="row">
              <div className="col-lg-8">
                <div className="position-re">
                  <h2 className="fz-60 fw-700">Our Team Members</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <ProfileCard1 profilepick ={teammember1} profileimg={TeamEmoji} name = {"Jayesh Vijay"} post= {"Founder of IG Tech"}/>
            </div>
            <div className="col-lg-4">
            <ProfileCard1 profilepick ={teammember2}  profileimg={TeamEmoji} name = {"Daljeet Singh Rajput "} post= {"Backend Developer"}/>
            </div>
            <div className="col-lg-4">
            <ProfileCard1 profilepick ={teammember3}  profileimg={TeamEmoji} name = {"Mahendra Sen"} post= {"Fronted Developer"}/>
            </div>
            <div className="col-lg-4">
            <ProfileCard1 profilepick ={teammember4}  profileimg={TeamEmoji} name = {"Ankit Chopra "} post= {"Ankit Chopra"}/>
            </div>
          </div>
        </div>
      </section>

      <section className="testim-vrt sub-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 ">
              <div className="cont" >
                <div>
                  <h6 className="sub-title mb-15">Since From 2023</h6>
                  <h3>Keep pushing forward. We've got your back.</h3>
                  <div className="text mt-10 pb-30 bord-thin-bottom">
                    <p>
                      Things go wrong have questions. We’ve understand. So we
                      have people
                    </p>
                  </div>
                  <div className="stauts d-flex flex-wrap align-items-center justify-content-center  mt-20" >
                    <div className="item d-flex align-items-center mt-30">
                      <h2 className="mr-20">100+</h2>
                      <p className="fz-14">
                        Happy Users <br /> Around World
                      </p>
                    </div>
                    <div className="item d-flex align-items-center ml-auto mt-30">
                      <h2 className="mr-20">50+</h2>
                      <p className="fz-14">
                        Projects <br /> Already Done
                      </p>
                    </div>
                    <div className="item d-flex align-items-center ml-auto mt-30">
                      <h2 className="mr-20">150k</h2>
                      <p className="fz-14">
                        Projects <br /> Already Done
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
