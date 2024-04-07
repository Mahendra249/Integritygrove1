import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const ContactSection = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <section className="contact-crev no-crev section-padding">
      <div className="contact-container">
        <div className="container ">
          <div className="row">
            <div className="col-lg-5">
              <div className="sec-head md-mb80 ">
                <h6 className="sub-title wow fadeInUp">Get In Touch</h6>
                <h2 className="fz-50 d-rotate wow">
                  <span>Let&apos;s make your brand brilliant!</span>
                </h2>
                <p className="fz-15 mt-10">
                  If you would like to work with us or just want to get in
                  touch, we’d love to hear from you!
                </p>
                <div className="phone fz-30 fw-600 mt-30 underline main-color">
                  <a href="#0">+91 (844) 205 6834</a>
                </div>
                <ul className="rest social-text d-flex mt-60">
                  <li className="mr-30">
                    <a href="#0" className="hover-this">
                      <span className="hover-anim">Facebook</span>
                    </a>
                  </li>
                  <li className="mr-30">
                    <a href="#0" className="hover-this">
                      <span className="hover-anim">Twitter</span>
                    </a>
                  </li>
                  <li className="mr-30">
                    <a href="#0" className="hover-this">
                      <span className="hover-anim">LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="hover-this">
                      <span className="hover-anim">Instagram</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 valign">
              <div className="full-width">
                <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                  {/* ... other form fields ... */}
                  <div className="col-lg-12">
                    <div className="form-group mb-30 ">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        {...register("name", { onBlur: true })}
                      />
                      {errors.name && (
                        <span className="error-message">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        {...register("email", { onBlur: true })}
                      />

                      {errors.email && (
                        <span className="error-message">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        {...register("subject", { onBlur: true })}
                      />
                      {errors.subject && (
                        <span className="error-message">
                          {errors.subject.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        {...register("message", { onBlur: true })}
                      ></textarea>
                      {errors.message && (
                        <span className="error-message">
                          {errors.message.message}
                        </span>
                      )}
                    </div>
                    <div className="mt-30">
                      <button
                        type="submit"
                        className="butn butn-full butn-bord radius-30"
                      >
                        <span className="text">Let's Talk</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
