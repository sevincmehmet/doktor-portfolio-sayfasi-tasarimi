import ImagePaths from "./assets/images/ImagePaths";
import WOW from "wowjs"
import { useEffect } from "react";


const SocialChannels = () => {

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])


    return (
        <>
            <div id="home-bottom" className="container">
                <h2 className="wow fadeIn home-title text-center" style={{ fontSize: "31.5px" }}>
                    Bilgi Paylaşım Kanalları
                </h2>
                <br />
                <div className="row row-30">
                    <div className="offset-xxl-1 col-xxl-10 offset-xxl-1 ">
                        <div className="row" style={{ padding: "27px 0" }}>
                            <div data-wow-offset="30"
                                data-wow-delay="0.2s"
                                className="wow db center h7 mb6 zoomInLeft col-sm-6 col-md-4 mb-4">
                                <a href="https://www.youtube.com/channel/UCCthna8oogYAsCk-QLWXFig" target="_blank" rel="noopener noreferrer">
                                    <img src={ImagePaths.bilgiPaylasim_0} alt="" />
                                </a>

                            </div>

                            <div data-wow-delay="0.2s"
                                className="wow fadeIn col-sm-6 col-md-4 mb-4">
                                <a href="https://www.instagram.com/dr.osmangonulal/" target="_blank" rel="noopener noreferrer">
                                    <img src={ImagePaths.bilgiPaylasim_1} alt="" />

                                </a>

                            </div>

                            <div data-wow-offset="30"
                                data-wow-delay="0.2s"
                                className="wow db center h7 mb6 zoomInRight col-sm-6 col-md-4">
                                <a href="https://api.whatsapp.com/send/?phone=00905323990166&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                                    <img src={ImagePaths.bilgiPaylasim_2} alt="" />

                                </a>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SocialChannels;