import home_image from "./assets/homeImg.png"


import ImagePaths from "./assets/images/ImagePaths";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="container pb-5">
        <div
          className="row row-30 justify-content-center justify-content-md-between flex-md-row-reverse justify-content-xxl-center
"
        >
          <div
            id="img-container"
            className="col-auto col-sm-8 col-md-6 col-lg-5 rounded float-left img-fluid"
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
                <a href="tel:0346-399-01-66">+90 (0346) 399 0166</a>
                <div className="telephone-text">
                  Randevu ve Online Danışmanlık
                </div>
              </div>
            </div>
            <h5 className="telephone-adress">
            Kardeşler Mahallesi 51/4 
              <br />
              Sokak Kapı No:3C Merkez/Sivas
            </h5>
          </div>
        </div>
      </div>

    <div className="space"></div>
      {/* Alt taraf */}
      <div className="container mt-4 pt-5">
        <h2 className="home-title text-center" style={{ fontSize: "31.5px" }}>
        Sağlık Hizmeti Alanlarım        
        </h2>
        <br />
        <div className="row row-30">
          <div className="offset-xxl-1 col-xxl-10 offset-xxl-1 ">
            <div className="row">
              <div className="home-item col-sm-6 col-md-4 mb-4">
                <article className="blurb blurb-hover">
                  <div className="icon blurb-icon d-flex justify-content-center">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                      <rect
                        x="28"
                        y="53.3333"
                        width="8"
                        height="5.33334"
                        fill="white"
                      ></rect>
                      <path
                        d="M22.6667 62.6667C22.6667 61.1939 23.8606 60 25.3333 60H38.6667C40.1394 60 41.3333 61.1939 41.3333 62.6667H22.6667Z"
                        fill="white"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 18C1 15.7909 2.79086 14 5 14H15.5V19.3333H6.33333V48.6667H57.6667V19.3333H49V14H59C61.2091 14 63 15.7909 63 18V50C63 52.2091 61.2091 54 59 54H5C2.79086 54 1 52.2091 1 50V18Z"
                        fill="white"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.6875 13.3333H16.3955V20.2849H14.5205H6.95833V47.5373H14.5205H16.3955H47.6045H49.4795H57.0417V20.2849H49.4795H47.6045V13.3333H59.3125C61.8972 13.3333 64 15.4335 64 18.0152V37.9183C64 38.4356 63.5803 38.8547 63.0625 38.8547C62.5448 38.8547 62.125 38.4354 62.125 37.9183V18.0152C62.125 16.4663 60.8634 15.2061 59.3125 15.2061H49.4795V18.4121H57.6042C58.3279 18.4121 58.9167 19.0002 58.9167 19.7231V48.0991C58.9167 48.822 58.3279 49.4101 57.6042 49.4101H6.02083C5.50308 49.4101 5.08333 48.9909 5.08333 48.4737V19.7231C5.08333 19.0002 5.67208 18.4121 6.39583 18.4121H14.5205V15.2061H4.6875C3.13663 15.2061 1.875 16.4663 1.875 18.0152V49.807C1.875 51.3559 3.13663 52.6161 4.6875 52.6161H28.337L28.3417 52.6159L28.3466 52.6156L28.3563 52.6161H35.6439L35.6506 52.6158L35.6535 52.6156L35.6631 52.6161H59.3125C60.8634 52.6161 62.125 51.3559 62.125 49.807V42.2879C62.125 41.7707 62.5448 41.3515 63.0625 41.3515C63.5803 41.3515 64 41.7707 64 42.2879V49.807C64 52.3887 61.8972 54.4889 59.3125 54.4889H36.5909V58.3817H37.7752C40.1531 58.3817 42.0877 60.314 42.0877 62.6891C42.0877 63.4119 41.499 64 40.7752 64H23.2246C22.5009 64 21.9121 63.4119 21.9121 62.6891C21.9121 60.314 23.8468 58.3817 26.2246 58.3817H27.409V54.4889H4.6875C2.10275 54.4889 0 52.3887 0 49.807V18.0152C0 15.4335 2.10275 13.3333 4.6875 13.3333ZM29.284 54.4889H34.716V58.3817H29.284V54.4889ZM37.7754 60.2545C38.9259 60.2545 39.8927 61.0546 40.1474 62.1272H23.8526C24.1073 61.0546 25.0741 60.2545 26.2246 60.2545H37.7754Z"
                        fill="#112950"
                      ></path>
                      <path
                        d="M15 6C15 3.23858 17.2386 1 20 1H44C46.7614 1 49 3.23858 49 6V50H15V6Z"
                        fill="white"
                      ></path>
                      <path
                        d="M13.3333 5.33333C13.3333 2.38781 15.7212 0 18.6667 0H45.3333C48.2789 0 50.6667 2.38781 50.6667 5.33333V49.3333H13.3333V5.33333Z"
                        fill="#80BFFF"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M45.3333 1.73333H18.6667C16.6785 1.73333 15.0667 3.34511 15.0667 5.33333V47.6H48.9333V5.33333C48.9333 3.34511 47.3216 1.73333 45.3333 1.73333ZM18.6667 0C15.7212 0 13.3333 2.38781 13.3333 5.33333V49.3333H50.6667V5.33333C50.6667 2.38781 48.2789 0 45.3333 0H18.6667Z"
                        fill="#112950"
                      ></path>
                      <path
                        d="M43 18C43 24.0751 38.0751 29 32 29C25.9249 29 21 24.0751 21 18C21 11.9249 25.9249 7 32 7C38.0751 7 43 11.9249 43 18Z"
                        fill="white"
                      ></path>
                      <path
                        d="M24.8238 8.0125C26.9109 6.4505 29.3924 5.625 32 5.625C38.6169 5.625 44 11.0081 44 17.625C44 24.2419 38.6169 29.625 32 29.625C25.3831 29.625 20 24.2419 20 17.625C20 15.4799 20.5756 13.3729 21.6646 11.5323C21.9282 11.0865 22.5033 10.9391 22.9489 11.2026C23.3945 11.4663 23.542 12.0413 23.2784 12.4868C22.3603 14.0388 21.875 15.8155 21.875 17.625C21.875 23.2079 26.417 27.75 32 27.75C37.583 27.75 42.125 23.2079 42.125 17.625C42.125 12.0421 37.583 7.5 32 7.5C29.8005 7.5 27.7075 8.19625 25.9473 9.51375C25.5326 9.824 24.9451 9.73925 24.6349 9.32475C24.3246 8.91038 24.4093 8.32262 24.8238 8.0125Z"
                        fill="#112950"
                      ></path>
                      <path
                        d="M32.5322 22.0619C31.2575 23.3171 29.0822 23.3082 27.8143 22.0623L25.7982 20.0992C24.7339 19.0629 24.734 17.3769 25.7982 16.3407C26.8485 15.3181 28.6115 15.3109 29.6588 16.3408L30.1732 16.8417L34.3181 12.806C35.371 11.781 37.0412 11.7268 38.12 12.6826C39.2468 13.681 39.3056 15.4758 38.2148 16.5291L32.5322 22.0619Z"
                        fill="#80BFFF"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M29.2161 20.6357C29.71 21.1211 30.6368 21.1214 31.129 20.6368L31.137 20.6289L36.8255 15.0904C36.9383 14.9814 37.0048 14.8246 36.9997 14.6396C36.9946 14.4522 36.917 14.2888 36.7937 14.1796C36.5233 13.9399 36.0393 13.9217 35.7133 14.239C35.7132 14.2391 35.7133 14.239 35.7133 14.239L30.1732 19.633L28.2564 17.7668C27.9946 17.5094 27.4745 17.5 27.1934 17.7737C26.9355 18.0248 26.9355 18.4151 27.1934 18.6662L29.2161 20.6357ZM27.8143 22.0623C29.0822 23.3082 31.2575 23.3171 32.5322 22.0619L38.2148 16.5291C39.3056 15.4758 39.2468 13.681 38.12 12.6826C37.0412 11.7268 35.371 11.781 34.3181 12.806L30.1732 16.8417L29.6588 16.3408C28.6115 15.3109 26.8485 15.3181 25.7982 16.3407C24.734 17.3769 24.7339 19.0629 25.7982 20.0992L27.8143 22.0623Z"
                        fill="#112950"
                      ></path>
                      <path
                        d="M20 41C20 40.4477 20.4477 40 21 40H33C33.5523 40 34 40.4477 34 41C34 41.5523 33.5523 42 33 42H21C20.4477 42 20 41.5523 20 41Z"
                        fill="#112950"
                      ></path>
                      <path
                        d="M20 36.3333C20 35.781 20.4477 35.3333 21 35.3333H43C43.5523 35.3333 44 35.781 44 36.3333C44 36.8856 43.5523 37.3333 43 37.3333H21C20.4477 37.3333 20 36.8856 20 36.3333Z"
                        fill="#112950"
                      ></path>
                    </svg>
                  </div>
                  <div className="blurb-title text-center">
                    <h3>Ayakta Tedavi Hizmetleri</h3>
                  </div>
                  <div className="blurb-text text-center">
                  Tıbbi kliniğimizde şikayetlerinize yönelik en uygun çözümü sunabilmek için hizmet vermekteyiz. 
                  </div>
                </article>
              </div>

              <div className="home-item col-sm-6 col-md-4 mb-4">
                <article className="blurb blurb-hover">
                  <div className="icon blurb-icon d-flex justify-content-center">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                      <path d="M26 39.5L19 41.5L15.5 37L15 23L19 24V26L21.5 32L26.5 36L26 39.5Z" fill="white"></path>
                      <path d="M15.5 13L15 19L19.5 18.5L26 16.5L32 13.5L38.5 16.5L45.5 18.5L49 19L48.5 13L44 6L39.5 2.5L31.5 1L25 2.5L20 6L15.5 13Z" fill="white"></path>
                      <path d="M38 39.5L45 41.5L48.5 37L49 23L45 24V26L42.5 32L37.5 36L38 39.5Z" fill="white"></path>
                      <path d="M25.9792 20.1493C25.465 20.1493 25.0481 20.569 25.0481 21.0868V23.2314C25.0481 23.7491 25.465 24.1689 25.9792 24.1689C26.4934 24.1689 26.9103 23.7491 26.9103 23.2314V21.0868C26.9103 20.569 26.4936 20.1493 25.9792 20.1493Z" fill="#112950"></path>
                      <path d="M37.0896 21.0868C37.0896 20.569 37.5065 20.1493 38.0207 20.1493C38.5349 20.1493 38.9518 20.569 38.9518 21.0868V23.2314C38.9518 23.7491 38.5349 24.1689 38.0207 24.1689C37.5065 24.1689 37.0896 23.7491 37.0896 23.2314V21.0868Z" fill="#112950"></path>
                      <path d="M32.0819 29.4823C32.6727 29.461 33.1124 29.2064 33.322 29.0565C33.7412 28.7566 34.3225 28.8558 34.6202 29.2779C34.918 29.7 34.8196 30.2853 34.4003 30.5851C33.9293 30.922 33.0007 31.3587 32.0007 31.3587C30.8593 31.3587 30.0125 30.8798 29.6005 30.5858C29.1808 30.2864 29.0816 29.7011 29.379 29.2788C29.6763 28.8563 30.2576 28.7564 30.6771 29.0558C30.9148 29.2254 31.4155 29.5056 32.0819 29.4823Z" fill="#112950"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M43.7402 41.2307C46.063 40.0517 48.0124 36.8933 48.0125 34.2361V24.46C47.4516 24.7881 46.7701 24.9621 46.0854 24.9523C45.8194 28.3285 44.3839 31.4646 41.9749 33.8818C40.9241 34.9361 39.7375 35.8029 38.4556 36.4671V37.7588C38.4556 38.3029 38.7339 38.7965 39.1752 39.0777L37.8447 40.4176C36.9635 39.6955 36.4452 38.4306 36.5934 37.2658C35.1204 37.7741 33.5519 38.0373 31.9502 38.0316C30.361 38.026 28.8326 37.7511 27.4065 37.2504C27.4925 38.3831 26.9643 39.6391 26.1582 40.4048L24.8404 39.0777C25.177 38.7874 25.5443 38.2252 25.5443 37.7588V36.4399C21.3488 34.236 18.3689 29.9561 17.9268 24.9525C17.2176 24.964 16.5719 24.8003 15.9876 24.4603V34.2364C15.9876 36.8875 17.9418 40.05 20.2558 41.2321L18 42C15.8831 40.3422 14.1254 37.0189 14.1254 34.2363V17.9975C14.1254 13.128 16.0262 8.56688 19.4778 5.15475C19.8447 4.79187 20.4343 4.7975 20.7945 5.16687C21.1547 5.53638 21.1494 6.12988 20.7824 6.49263C17.6904 9.54938 15.9876 13.6353 15.9876 17.9975V18.0018C16.5284 17.6893 17.1541 17.5095 17.821 17.5095H18.7603C21.6476 17.2843 24.4157 16.5441 26.9882 15.3089C28.4199 14.6214 29.7883 13.7785 31.0555 12.8039C31.5911 12.3916 32.3333 12.358 32.9021 12.7203C34.5265 13.7543 36.2488 14.6541 38.0211 15.3948C40.3498 16.3679 42.7932 17.0788 45.2843 17.5095H46.179C46.8459 17.5095 47.4716 17.6893 48.0124 18.0018V17.9975C48.0124 13.6924 46.347 9.64388 43.3229 6.59775C40.2982 3.55225 36.2769 1.875 32 1.875C29.2523 1.875 26.5423 2.58725 24.1628 3.9345C23.7148 4.18813 23.1469 4.02825 22.8949 3.57688C22.6429 3.12563 22.8019 2.554 23.2501 2.30025C25.9077 0.795375 28.9333 0 32 0C36.7744 0 41.2633 1.87238 44.6397 5.27225C48.0155 8.6725 49.8746 13.1919 49.8746 17.9976C49.8746 17.9976 49.8806 34.2244 49.8746 34.2364C49.8746 37.0241 48.1238 40.3424 46 42L43.7402 41.2307ZM46.1312 19.3845H46.179C47.1877 19.3845 48.0084 20.209 48.0124 21.2236V21.238C48.0079 22.2663 47.157 23.1066 46.1312 23.0771V19.3845ZM15.9875 21.2238C15.9905 20.1949 16.844 19.3556 17.8687 19.3846V23.0774C16.8429 23.1059 15.9918 22.2689 15.9875 21.2383V21.2238ZM31.9565 36.1566C25.2153 36.1331 19.7309 30.5267 19.7309 23.6591V19.3014C22.5494 18.9897 25.2566 18.2175 27.7898 17.0012C29.2871 16.2824 30.72 15.4064 32.0515 14.3965C33.7225 15.4489 35.49 16.3671 37.3072 17.1265C39.5452 18.0619 41.8837 18.7682 44.2689 19.2301V23.8034C44.2689 27.1111 42.9873 30.2186 40.6603 32.5536C38.2937 34.9284 35.3375 36.1685 31.9565 36.1566Z" fill="#112950"></path>
                      <path d="M8 50.8277C8 47.5176 10.0386 44.5493 13.1282 43.361L25.3333 38.6667L30.9757 45.4375C31.5088 46.0772 32.4912 46.0772 33.0243 45.4375L38.6667 38.6667L50.8718 43.361C53.9614 44.5493 56 47.5176 56 50.8277V64H8V50.8277Z" fill="#80BFFF"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M54.1333 62.1334V50.8277C54.1333 48.2899 52.5704 46.0142 50.2017 45.1032L39.2446 40.889L34.4583 46.6325C33.179 48.1678 30.821 48.1678 29.5417 46.6325L24.7554 40.889L13.7983 45.1032C11.4296 46.0142 9.86667 48.2899 9.86667 50.8277V62.1334H54.1333ZM25.3333 38.6667L13.1282 43.361C10.0386 44.5493 8 47.5176 8 50.8277V64H56V50.8277C56 47.5176 53.9614 44.5493 50.8718 43.361L38.6667 38.6667L33.0243 45.4375C32.4912 46.0772 31.5088 46.0772 30.9757 45.4375L25.3333 38.6667Z" fill="#112950"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M40.1362 50.6667C39.1036 50.6667 38.3936 51.714 38.7679 52.6851L40.1952 56.3888C40.4146 56.9583 40.958 57.3334 41.5635 57.3334H48.0347C48.6747 57.3334 49.2409 56.915 49.4342 56.2993L50.5971 52.5956C50.897 51.6405 50.1904 50.6667 49.1976 50.6667H40.1362Z" fill="white"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M40.1362 50.6667C39.1036 50.6667 38.3936 51.714 38.7679 52.6851L40.1952 56.3888C40.4146 56.9583 40.958 57.3334 41.5635 57.3334H48.0347C48.6747 57.3334 49.2409 56.915 49.4342 56.2993L50.5971 52.5956C50.897 51.6405 50.1904 50.6667 49.1976 50.6667H40.1362ZM40.5654 52.4445L41.7643 55.5556H47.8197L48.7965 52.4445H40.5654Z" fill="#112950"></path>
                      <path d="M30.6667 52C30.6667 51.2636 31.2636 50.6667 32 50.6667C32.7364 50.6667 33.3334 51.2636 33.3334 52C33.3334 52.7364 32.7364 53.3334 32 53.3334C31.2636 53.3334 30.6667 52.7364 30.6667 52Z" fill="#112950"></path>
                      <path d="M30.6667 57.3333C30.6667 56.597 31.2636 56 32 56C32.7364 56 33.3334 56.597 33.3334 57.3333C33.3334 58.0697 32.7364 58.6667 32 58.6667C31.2636 58.6667 30.6667 58.0697 30.6667 57.3333Z" fill="#112950"></path>
                    </svg>
                  </div>
                  <div className="blurb-title text-center">
                    <h3>Çocuk Sağlığı Hizmetleri</h3>
                  </div>
                  <div className="blurb-text text-center">
                  Çocuğunuz ile ilgili hastalık ve genel bakım gibi tüm sağlık işlemlerine yönelik pediyatrik hizmetleri sunulmaktadır. 

                  </div>
                </article>
              </div>

              <div className="home-item col-sm-6 col-md-4">
                <article className="blurb blurb-hover">
                  <div className="icon blurb-icon d-flex justify-content-center">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                      <rect x="1" y="13" width="62" height="45" fill="white"></rect>
                      <rect x="7" y="19" width="50" height="33" fill="#80BFFF"></rect>
                      <path d="M44 35C44 41.6274 38.6274 47 32 47C25.3726 47 20 41.6274 20 35C20 28.3726 25.3726 23 32 23C38.6274 23 44 28.3726 44 35Z" fill="white"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M32 45C37.5228 45 42 40.5228 42 35C42 29.4772 37.5228 25 32 25C26.4772 25 22 29.4772 22 35C22 40.5228 26.4772 45 32 45ZM32 47C38.6274 47 44 41.6274 44 35C44 28.3726 38.6274 23 32 23C25.3726 23 20 28.3726 20 35C20 41.6274 25.3726 47 32 47Z" fill="#112950"></path>
                      <path d="M59.3125 11.5879H46.3084L44.355 3.05813C43.9425 1.25762 42.3644 0 40.5175 0H23.4825C21.6356 0 20.0576 1.25762 19.645 3.05825L17.6916 11.5879H14.5936C14.0759 11.5879 13.6561 12.0076 13.6561 12.5254C13.6561 13.0431 14.0759 13.4629 14.5936 13.4629H59.3125C60.8634 13.4629 62.125 14.7245 62.125 16.2754V54.2754C62.125 55.8263 60.8634 57.0879 59.3125 57.0879H4.6875C3.13663 57.0879 1.875 55.8263 1.875 54.2754V16.2754C1.875 14.7245 3.13663 13.4629 4.6875 13.4629H10.2186C10.7364 13.4629 11.1561 13.0431 11.1561 12.5254C11.1561 12.0076 10.7364 11.5879 10.2186 11.5879H4.6875C2.10275 11.5879 0 13.6906 0 16.2754V54.2754C0 56.8601 2.10275 58.9629 4.6875 58.9629H6.037V62.0625C6.037 63.1309 6.90613 64 7.9745 64H16.6505C17.7189 64 18.588 63.1309 18.588 62.0625V58.9629H45.412V62.0625C45.412 63.1309 46.2811 64 47.3495 64H56.0255C57.0939 64 57.963 63.1309 57.963 62.0625V58.9629H59.3125C61.8973 58.9629 64 56.8601 64 54.2754V16.2754C64 13.6906 61.8973 11.5879 59.3125 11.5879ZM23.4614 11.5879L24.8274 5.625H39.1727L40.5386 11.5879H23.4614ZM42.4621 11.5879L40.9222 4.86538C40.7707 4.20862 40.1946 3.75 39.5213 3.75H24.4788C23.8054 3.75 23.2292 4.20863 23.0775 4.86688L21.5379 11.5879H19.6151L21.4726 3.47688C21.6888 2.53375 22.5152 1.875 23.4825 1.875H40.5175C41.4848 1.875 42.3112 2.53375 42.5274 3.47675L44.3849 11.5879H42.4621ZM16.713 62.0625C16.713 62.097 16.685 62.125 16.6505 62.125H7.9745C7.94 62.125 7.912 62.097 7.912 62.0625V58.9629H16.713V62.0625ZM56.088 62.0625C56.088 62.097 56.06 62.125 56.0255 62.125H47.3495C47.315 62.125 47.287 62.097 47.287 62.0625V58.9629H56.088V62.0625ZM56.8125 39.5366C57.3302 39.5366 57.75 39.1169 57.75 38.5991V19.4004C57.75 18.5387 57.0491 17.8379 56.1875 17.8379H7.8125C6.95087 17.8379 6.25 18.5387 6.25 19.4004V51.1504C6.25 52.012 6.95087 52.7129 7.8125 52.7129H56.1875C57.0491 52.7129 57.75 52.012 57.75 51.1504V42.9741C57.75 42.4564 57.3302 42.0366 56.8125 42.0366C56.2948 42.0366 55.875 42.4564 55.875 42.9741V50.8379H8.125V19.7129H55.875V38.5991C55.875 39.1169 56.2948 39.5366 56.8125 39.5366Z" fill="#112950"></path>
                      <path d="M30.8571 33.8571V31.5714C30.8571 31.1203 31.0034 31 31.4545 31H32.5455C32.9966 31 33.1429 31.1203 33.1429 31.5714V33.8571H35.4286C35.8797 33.8571 36 34.0034 36 34.4545V35.5455C36 35.9966 35.8797 36.1429 35.4286 36.1429H33.1429V38.4286C33.1429 38.8797 32.9966 39 32.5455 39H31.4545C31.0034 39 30.8571 38.8797 30.8571 38.4286V36.1429H28.5714C28.1203 36.1429 28 35.9966 28 35.5455V34.4545C28 34.0034 28.1203 33.8571 28.5714 33.8571H30.8571Z" fill="#80BFFF"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M28.8571 31.8571V31.5714C28.8571 31.2607 28.8757 30.3486 29.6245 29.6521C30.3257 28.9999 31.1896 29 31.4498 29H32.5502C32.8104 29 33.6743 28.9999 34.3755 29.6521C35.1243 30.3486 35.1429 31.2607 35.1429 31.5714V31.8571H35.4286C35.7393 31.8571 36.6514 31.8757 37.3479 32.6245C38.0001 33.3257 38 34.1896 38 34.4498V35.5502C38 35.8104 38.0001 36.6743 37.3479 37.3755C36.6514 38.1243 35.7393 38.1429 35.4286 38.1429H35.1429V38.4286C35.1429 38.7393 35.1243 39.6514 34.3755 40.3479C33.6743 41.0001 32.8104 41 32.5502 41H31.4498C31.1896 41 30.3257 41.0001 29.6245 40.3479C28.8757 39.6514 28.8571 38.7393 28.8571 38.4286V38.1429H28.5714C28.2607 38.1429 27.3486 38.1243 26.6521 37.3755C25.9999 36.6743 26 35.8104 26 35.5502V34.4498C26 34.1896 25.9999 33.3257 26.6521 32.6245C27.3486 31.8757 28.2607 31.8571 28.5714 31.8571H28.8571ZM30.8571 33.8571H28.5714C28.1203 33.8571 28 34.0034 28 34.4545V35.5455C28 35.9966 28.1203 36.1429 28.5714 36.1429H30.8571V38.4286C30.8571 38.8797 31.0034 39 31.4545 39H32.5455C32.9966 39 33.1429 38.8797 33.1429 38.4286V36.1429H35.4286C35.8797 36.1429 36 35.9966 36 35.5455V34.4545C36 34.0034 35.8797 33.8571 35.4286 33.8571H33.1429V31.5714C33.1429 31.1203 32.9966 31 32.5455 31H31.4545C31.0034 31 30.8571 31.1203 30.8571 31.5714V33.8571Z" fill="#112950"></path>
                    </svg>
                  </div>
                  <div className="blurb-title text-center">
                    <h3>Acil Durum Hizmetleri</h3>
                  </div>
                  <div className="blurb-text text-center">
                  Acil hastalıklar ve yaralanma durumları için uygun bakım hizmetleri sunulmaktadır                  
                  </div>
                </article>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
