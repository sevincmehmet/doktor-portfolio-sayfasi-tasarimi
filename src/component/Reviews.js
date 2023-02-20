import ImagePaths from "./assets/images/ImagePaths";
import "./Reviews.css";

const Reviews = () => {
    return (
        <>
            <div className="container reviews-container">
                <div className="row">
                    <div className="col-xxl-10 col-xl-11 col-md-12 col-sm-12 m-auto ">
                        <div className="container">
                            <h2
                                className="home-title text-center"
                                style={{ fontSize: "31.5px" }}
                            >
                                What People Say
                            </h2>
                            <div className="blurb-text text-center">
                                Take a look at the recent testimonials submitted by our patients
                            </div>
                            <div className="row row-30 text-start">
                                <div className="col-sm-6">
                                    
                                    <div className="quote  quote-5">
                                        <div className="quote-author">
                                            <img className="quote-author-img" src={ImagePaths.person_1} alt="" width="64" height="64"/>
                                            <div className="quote-author-body">
                                                <div className="quote-author-name">
                                                    <cite className="quote-cite">Fred Thompson</cite>
                                                </div>
                                                <div className="quote-author">Patient</div>
                                            </div>
                                        </div>
                                        <q className="quote-text h5">The clinic is looking lovely since it was refurbished last summer, such an improvement. Dr Williams is great, a really sympathetic and understanding doctor. Highly recommended.</q>
                                    </div>
                                    
                                    <div className="quote  quote-5">
                                        <div className="quote-author">
                                            <img className="quote-author-img" src={ImagePaths.person_2} alt="" width="64" height="64"/>
                                            <div className="quote-author-body">
                                                <div className="quote-author-name">
                                                    <cite className="quote-cite">Gloria Jones</cite>
                                                </div>
                                                <div className="quote-author">Patient</div>
                                            </div>
                                        </div>
                                        <q className="quote-text h5">I went yesterday for an emergency appointment for my eye. The clinic was running late but I was warned as I arrived and didn’t have to wait long. The doctor gave me a thorough examination and I came away reassured and with a prescription and a good understanding of the ongoing treatment.</q>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    
                                    <div className="quote  quote-5">
                                        <div className="quote-author">
                                            <img className="quote-author-img" src={ImagePaths.person_3} alt="" width="64" height="64"/>
                                            <div className="quote-author-body">
                                                <div className="quote-author-name">
                                                    <cite className="quote-cite">Martha Butler</cite>
                                                </div>
                                                <div className="quote-author">Patient</div>
                                            </div>
                                        </div>
                                        <q className="quote-text h5">This was my first consultation, and Dr. Williams was exceedingly professional.</q>
                                    </div>
                                    
                                    <div className="quote  quote-5">
                                        <div className="quote-author">
                                            <img className="quote-author-img" src={ImagePaths.person_4} alt="" width="64" height="64"/>
                                            <div className="quote-author-body">
                                                <div className="quote-author-name">
                                                    <cite className="quote-cite">Linda Sanders</cite>
                                                </div>
                                                <div className="quote-author">Patient</div>
                                            </div>
                                        </div>
                                        <q className="quote-text h5">Thank you so much for fitting us in today, don’t know what we’d have done without you. My daughter is quite timid, but you were  brilliant with her.</q>
                                    </div>
                                    
                                    <div className="quote  quote-5">
                                        <div className="quote-author">
                                            <img className="quote-author-img" src={ImagePaths.person_5} alt="" width="64" height="64"/>
                                            <div className="quote-author-body">
                                                <div className="quote-author-name">
                                                    <cite className="quote-cite">Bruce Price</cite>
                                                </div>
                                                <div className="quote-author">Patient</div>
                                            </div>
                                        </div>
                                        <q className="quote-text h5">Dr. Courtney Williams was so very helpful from the very beginning to my actual appointment.</q>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reviews;
