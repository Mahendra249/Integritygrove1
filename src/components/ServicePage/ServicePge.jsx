import Lottie from "react-lottie";
import "../../App.css"
import animationData from "../../assets/imgs/HomePage/Lottie/webmen.json"; // Replace with the actual path to your Lottie animation JSON file
import Section from "../HomePage/Section/Section";
import { GrServices } from "react-icons/gr";

const ServicePge = () => {
  // Lottie animation options
  const lottieOptions = {
    loop: true,
    // autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="service-page-container" >
      <div className="service-content">
        <h2 className="service-heading ">
          <span className="service-icon">
            <GrServices />
          </span>
          Our Services
        </h2>
        <h4 className="service-heading-part-1">
          IT Staff Augmentation to Worldclass Software Services
        </h4>
        <p className="service-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae beatae
          molestiae aliquam voluptatem saepe. Esse illo placeat nostrum
          necessitatibus velit iusto ullam laboriosam, beatae ad voluptatibus
          dolorem corporis, consectetur distinctio recusandae aliquam sit quod
          alias iste architecto qui. Veritatis voluptatum nisi molestiae eveniet
          provident deleniti!
        </p>
      </div>
      <div className="lottifiles">
        <Lottie options={lottieOptions} />
      </div>
    </div>
  );
};

export default ServicePge;
