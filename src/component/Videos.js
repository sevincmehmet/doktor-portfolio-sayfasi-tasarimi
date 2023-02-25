import arrVideoCategory from "./arrVideoCategory";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Videos.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import {Link } from "react-router-dom"

const Videos = () => {



    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-10 col-xl-11 col-md-11 col-sm-12 m-auto">


                        <Swiper
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={"auto"}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={arrVideoCategory[5].catagoryImg} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={arrVideoCategory[1].catagoryImg} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link to="/allVideos">
                                    <img src={arrVideoCategory[2].catagoryImg} alt="" />
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={arrVideoCategory[3].catagoryImg} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={arrVideoCategory[4].catagoryImg} alt="" />
                            </SwiperSlide>


                        </Swiper>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Videos;
