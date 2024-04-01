import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="sub-bg">
      <div className="footer-container">
        <div className="container pb-80 pt-80 ontop">
          <div className="row">
            <div className="col-lg-3">
              <div className="colum md-mb50">
                <div className="tit mb-20">
                  <h6>Address</h6>
                </div>
                <div className="text">
                  <p>GSTIN 08AAKFI5823P1ZQ</p>
                </div>
                <div className="text">
                  <p>Jaipur , Rajashan , 302022</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="colum md-mb50">
                <div className="tit mb-20">
                  <h6>Say Hello</h6>
                </div>
                <div className="text">
                  <p className="mb-10">
                    <Link href="#0">info@integritygrove.tech</Link>
                  </p>
                  <h5>
                    <Link href="#">+91 (844) 205 6834</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-2 md-mb50">
              <div className="tit mb-20">
                <h6>Social</h6>
              </div>
              <ul className="rest social-text">
                <li>
                  <Link href="">Facebook</Link>
                </li>
                <li>
                  <Link href="#0">Twitter</Link>
                </li>
                <li>
                  <Link href="#0">LinkedIn</Link>
                </li>
                <li>
                  <Link href="www.instagram.com/_jayesh_0786/ ">Instagram</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <div className="tit mb-20">
                <h6>Newsletter</h6>
              </div>
              <div className="subscribe">
                <form action="contact.php">
                  <div className="form-group rest">
                    <input type="email" placeholder="Type Your Email" />
                    <button type="submit">
                      <i className="fas fa-arrow-right" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-footer pt-40 pb-40 bord-thin-top ontop">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="copyright d-flex">
                  <div className="ml-auto">
                    <p className="fz-13 d-block justify-content-center align-center">
                      © {new Date().getFullYear()} Integritygrove technology
                      &nbsp;
                      <span className="underline text-white">
                        All Rights Reserved
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
