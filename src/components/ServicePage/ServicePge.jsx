import Lottie from "react-lottie";
import "../../App.css";
import {
  lottifile1,
  lottifile3,
  lottifile4,
  lottifile5,
  lottifile7,
  lottifile9,
  lottifile10,
  lottifile11,
} from "../../assets/imgs/HomePage";
import { useMemo } from "react";
const data = [
  {
    heading: "Game Development",
    paragraph:
      "At IG Tech Company, we create top-notch games by blending technical skill with creative flair. Our team works together on design, programming, and marketing to deliver high-quality experiences across platforms. We're committed to ongoing improvement, regularly updating our games based on player feedback to keep them engaging and immersive.",
    align: "right",

    animationFile: lottifile5,
  },
  {
    heading: "Web Development ",
    paragraph:
      "At IG Tech Company, web development blends technical skill with creative innovation to craft engaging websites and applications. Our team collaborates on design, programming, and deployment to ensure high-quality online experiences. We prioritize ongoing improvement, updating sites based on user feedback for maximum engagement.",

    align: "left",
    animationFile: lottifile4,
  },
  {
    heading: "Ecommerce Development ",
    paragraph:
      "In the realm of ecommerce development, our focus lies in crafting seamless online shopping experiences. We blend technical prowess with creative ingenuity to design and deploy user-friendly ecommerce platforms. Our commitment to ongoing optimization ensures that we continuously enhance these platforms based on customer feedback, driving both sales and satisfaction.",
    align: "right",
    animationFile: lottifile3,
  },
  {
    heading: "App Development",
    paragraph:
      "In the domain of app development, our emphasis is on creating intuitive and immersive mobile experiences. We merge technical expertise with creative innovation to design and deploy user-friendly applications. Our dedication to continuous improvement means we refine our apps based on user feedback, ensuring optimal functionality and user satisfaction.",
    align: "left",
    animationFile: lottifile1,
  },
  {
    heading: "API Development ",
    paragraph:
      "In API development, our focus is on building robust interfaces for seamless data exchange. We combine technical proficiency with creative problem-solving to design and deploy efficient APIs. Our commitment to ongoing enhancement ensures that we refine our APIs based on user feedback, optimizing functionality and usability",
    align: "right",
    animationFile: lottifile11,
  },
  {
    heading: "Web Hosting ",
    paragraph:
      "In our comprehensive web hosting services, we provide secure and reliable server infrastructure for hosting websites and applications. Our scalable solutions are tailored to meet the unique needs of each client, ensuring seamless performance and uninterrupted online presence. Plus, our dedicated support team is available 24/7 to address any concerns or issues promptly.",
    align: "left",
    animationFile: lottifile9,
  },
  {
    heading: "API Integration ",
    paragraph:
      "In API integration, we specialize in seamlessly incorporating APIs into existing systems or applications. Our team combines technical expertise with creative problem-solving to ensure smooth integration processes. We prioritize customization to meet specific client needs, continually refining our solutions based on user feedback for optimal functionality and usability.",
    align: "right",
    animationFile: lottifile7,
  },
  {
    heading: "Software Development and Maintenance",
    paragraph:
      "In software development and maintenance, we excel at crafting and sustaining robust digital solutions. Our approach combines technical finesse with creative insight to deliver high-quality software. We prioritize customization to meet unique client requirements, offering ongoing support and updates to ensure continued effectiveness and user satisfaction.",
    align: "left",
    animationFile: lottifile10,
  },
  {
    heading: "Android and iOS App Development ",
    paragraph:
      "In Android and iOS app development, we specialize in creating intuitive and immersive mobile experiences. Our team seamlessly merges technical expertise with creative innovation to design and deploy user-friendly applications. We prioritize ongoing optimization, refining our apps based on user feedback to ensure optimal functionality and user satisfaction",
    align: "right",
    animationFile: lottifile11,
  },
];

const ServicePage = () => {
  const animationGenerator = useMemo(
    () => (animationFile) => ({
      loop: true,
      autoplay: true,
      animationData: animationFile,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }),
    []
  );

  return (
    <div>
      {data.map((item, index) => (
        <div className="Main-Service-container" key={index}>
          {window.innerWidth > 992 ? (
            item.align === "right" ? (
              <div className="service-page-container">
                <div className="service-content">
                  <h4 className="service-heading">{item.heading}</h4>
                  <p className="service-paragraph">{item.paragraph}</p>
                </div>
                <div className="lottifiles">
                  <Lottie options={animationGenerator(item.animationFile)} />
                </div>
              </div>
            ) : (
              <div className="service-page-container">
                <div className="lottifiles">
                  <Lottie options={animationGenerator(item.animationFile)} />
                </div>
                <div className="service-content">
                  <h4 className="service-heading  service-paragraph-extra">
                    {item.heading}
                  </h4>
                  <p className="service-paragraph  service-paragraph-extra">
                    {item.paragraph}
                  </p>
                </div>
              </div>
            )
          ) : (
            <div className="service-page-container">
              <div className="service-content">
                <h4 className="service-heading">{item.heading}</h4>
                <p className="service-paragraph">{item.paragraph}</p>
              </div>
              <div className="lottifiles">
                <Lottie options={animationGenerator(item.animationFile)} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServicePage;
