import ImagePaths from "./assets/images/ImagePaths";
import "./Contacts.css";

const Contacts = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-10 col-xl-12 col-md-12 col-sm-12 m-auto ">
                        <div className="container">
                            <div className="row row-30 justify-content-center">
                                {/* ********************Ekranın Sol Tarafı ********************************/}
                                <div className="col-sm-11 col-md-6">
                                    <h2 className="contacts-title">
                                        Randevunuzu Ücretsiz Olarak Oluşturabilirsiniz
                                    </h2>
                                    <p className="blurb-text" style={{ padding: " 0 0 15px 0" }}>
                                        İster dahili telefon numaramızdan bize ulaşarak isterseniz de randevu formunu eksiksiz bir biçimde doldurarak uygun randevu günleri hakkında bilgi alabilirsiniz.
                                    </p>
                                    <div className="divider"></div>
                                    <h6 className="contact-adress">
                                        Kardeşler Mahallesi 51/4 Sokak Kapı No:3C Merkez/Sivas
                                    </h6>

                                    <div className="telephone-div">
                                        <div className="telephone-item">
                                            <img
                                                src={ImagePaths.telephoneIcon}
                                                width={28}
                                                height={28}
                                            />
                                        </div>
                                        <div className="telephone-body">
                                            <a href="tel:0346-399-01-66">+90 (0346) 399 0166</a>
                                            <div className="telephone-text">
                                                Randevu ve Online Danışmanlık
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="list blurb-text">
                                        <li style={{fontWeight:"bold"}} className="list-item">
                                            Çalışma Günleri
                                        </li>
                                        <li className="list-item">
                                            Pazartesi - Cuma: 09:00 - 18:00
                                        </li>
                                        <li className="list-item">
                                            Cumartesi: 09:00 - 16:00
                                        </li>
                                    </ul>
                                    <a className="link" href="mailto:                                        md.gonulal@gmail.com">
                                        md.gonulal@gmail.com
                                    </a>
                                    <div className="social">
                                        <a className="icon icon-md " href="#">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                        <a className="icon icon-md " href="#">
                                            <i className="fa-brands fa-instagram"></i>{" "}
                                        </a>
                                        <a className="icon icon-md " href="#">
                                            <i className="fa-brands fa-youtube"></i>
                                        </a>
                                        <a className="icon icon-md " href="#">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                    </div>
                                </div>
                                {/**********************Ekranın Sağ Tarafı*********************************/}
                                <div className="col-sm-11 col-md-6">
                                    <div className="form-box">
                                        <h2 className="contacts-title">Randevu Formu </h2>
                                        <form
                                            className="rd-form rd-mailform"
                                            data-form-output="contact-form"
                                            data-form-type="contact"
                                            method="post"
                                            action="components/rd-mailform/rd-mailform.php"
                                            noValidate="novalidate"
                                        >
                                            <div className="form-wrap">
                                                <label style={{paddingTop: "0"}} className="form-label" htmlFor="input-name">
                                                    Your name*
                                                </label>
                                                <div className="form-group">
                                                    <input
                                                        className="form-control form-control-has-validation form-control-last-child"
                                                        id="input-name"
                                                        type="text"
                                                        name="name"
                                                        placeholder="Please enter your name"
                                                        data-constraints="@Required"
                                                    />
                                                    <span className="form-validation"></span>
                                                </div>
                                            </div>
                                            <div className="form-wrap">
                                                <label className="form-label" htmlFor="input-phone">
                                                    Your phone*
                                                </label>
                                                <div className="form-group">
                                                    <input
                                                        className="form-control form-control-has-validation form-control-last-child"
                                                        id="input-phone"
                                                        type="text"
                                                        name="phone"
                                                        placeholder="Please enter your phone number"
                                                        data-constraints="@Numeric @Required"
                                                    />
                                                    <span className="form-validation"></span>
                                                </div>
                                            </div>
                                            <div className="form-wrap">
                                                <label className="form-label" htmlFor="input-message">
                                                    Your message*
                                                </label>
                                                <div className="form-group">
                                                    <textarea
                                                        className="form-control form-control-has-validation form-control-last-child"
                                                        id="input-message"
                                                        name="textarea"
                                                        placeholder="Please enter your message"
                                                        data-constraints="@Required"
                                                    ></textarea>
                                                    <span className="form-validation"></span>
                                                </div>
                                            </div>
                                            <div className="custom-control custom-checkbox"></div>
                                            <div className="rd-form-btn text-start">
                                                <button className="btn btn-lg btn-block" type="submit">
                                                Randevu Al
                                                </button>
                                            </div>
                                        </form>
                                        <div
                                            className="form-output snackbar snackbar-primary"
                                            id="contact-form"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contacts;
