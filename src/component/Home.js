import home_image from "./assets/homeImg.png"


import ImagePaths from "./assets/images/ImagePaths";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div id="home-container" className="container">
        <div
          className="row row-30 justify-content-center justify-content-md-between flex-md-row-reverse justify-content-xxl-center
"
        >
          <div
            id="img-container"
            className="col-auto col-sm-11 col-md-6 col-lg-5 float-none img-fluid"
          >
            <img
              id="home-img"
              src={home_image}
            />
          </div>
          <div
            id="write-container"
            className="col-auto col-sm-8 col-md-6  col-xxl-5"
          >
            <h1 className="home-title display-1">Uzm. Dr. Osman Gönülal</h1>
            <h3 style={{color:"#177ee5"}} className="text-primary home-link">
              Yenidoğan, Bebek ve Çocuk Sağlığı Hastalıkları Uzmanı       
            </h3>
            <div className="telephone-div">
              <div className="telephone-item">
                <img src={ImagePaths.telephoneIcon} width={28} height={28} />
              </div>
              <div className="telephone-body">
                <a href="tel:0346-399-01-66">+90 (0346) 399 01 66</a>
                <div className="telephone-text">
                  Randevu ve Online Danışmanlık
                </div>
              </div>
            </div>
            <h5 className="telephone-adress lh-base">
            Kardeşler Mahallesi 51/4 
              <br />
              Sokak Kapı No:3C Merkez/Sivas
            </h5>
          </div>
        </div>
      </div>

    </>
  );
};
export default Home;
