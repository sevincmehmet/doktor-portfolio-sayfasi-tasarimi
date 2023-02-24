import about_image from "./assets/aboutImg.jpeg";
import InfShr from "./InfShr"

import "./About.css";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-11 col-md-12 col-sm-12 m-auto">
            <div className="container">
              <div className="row row-30 justify-content-center">
                <div className="col-sm-5 col-md-6  col-xxl-6 rounded float-start mb-4">
                  <div id="about-img">
                    <img
                      className="image"
                      src={about_image}
                      alt="kadın doktor resimi"
                      
                    />
                  </div>
                </div>
                <div className="col-sm-7 col-md-6  col-xxl-6">
                  <h2 className="about-title">
                  Uzm. Dr. Osman GÖNÜLAL Hakkında
                  </h2>
                  <h3 style={{color:"#177ee5"}} className="about-link">
                  Tıp eğitimini İstanbul Üniversitesi'nde tamamlayarak tıp doktoru unvanı almıştır.
                  </h3>
                  <p className="blurb-text about-p lh-base">
                  Bebek ve Çocuk Sağlığı Hastalıkları Uzmanıyım. Tıpkı YouTube kanalımda yaptığım gibi bu sitede de <span className="fw-bold">BEBEK VE ÇOCUK SAĞLIĞI HASTALIKLARI</span> hakkında bilmeniz gereken her şeyi bulacaksınız! Hamilelik döneminden, yeni doğan dönemine, çocuğunuzun yaşamı boyunca ihtiyaç duyacağınız bilgiler burada olacak. 
                  </p>
                  <ul className="list list-marked fw-medium text-dark">
                    
                    <li className="list-title fs-5 fw-bold mt-4 mb-2">
                      İlgi Alanları
                    </li>
                    <li className="list-item blurb-text">
                    Çocuklarda Gelişme Bozuklukları 
                    </li>
                    <li className="list-item blurb-text">
                    Ergenlikte Büyüme Gelişme 
                    </li>
                    <li className="list-item blurb-text">
                    Yenidoğan Hastalıkları 

                    </li>
                    <li className="list-item blurb-text">
                    Yenidoğan Takibi 
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alt Taraf */}
    <div className="pt-5 pb-5 mt-5 ">
      <InfShr />
    </div>

    </>
  );
};
export default About;
