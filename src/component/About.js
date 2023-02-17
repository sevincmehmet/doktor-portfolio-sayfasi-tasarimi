import about_image from "./assets/aboutImg.jpg";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-md-10 col-sm-12 m-auto">
            <div className="container">
              <div className="row row-30 justify-content-center">
                <div className="col-sm-6 col-md-4 col-lg-5 col-xl-5  col-xxl-6 rounded float-start mb-4">
                  <div>
                    <img
                      className="image"
                      src={about_image}
                      alt="kadın doktor resimi"
                      width={316}
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-8 col-lg-7 col-xl-7  col-xxl-6">
                  <h2 className="about-title">
                    About Dr. Courtney Williams, Family Doctor
                  </h2>
                  <h3 className="text-primary about-link">
                    Dr. Courtney Williams, F.D., is one of the top family
                    medicine practitioners in the United States.
                  </h3>
                  <p className="blurb-text about-p">
                    As one of the most experienced family doctors in the area,
                    Dr. Courtney Williams, F.D., has experience in emergency
                    medicine and physical therapy. Her professional background
                    allows her to deliver the utmost level of health care for
                    her patients. You can expect high-quality approach from Dr.
                    Williams.
                  </p>
                  <ul className="list list-marked-2 fw-medium text-dark">
                    <li className="list-item">
                      Emergency &amp; express care services
                    </li>
                    <li className="list-item">
                      Home care &amp; medication therapy management
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
