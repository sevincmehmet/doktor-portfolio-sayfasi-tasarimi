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
import ImagePaths from "./assets/images/ImagePaths";

const Videos = () => {



    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-10 col-xl-11 col-md-11 col-sm-12 m-auto">

                    <h2 className="home-title text-center" style={{fontSize: "31.5px"}}>Öne Çıkan Videolar</h2>
                        <Swiper
                          initialSlide="1"
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
                                <a target={"_blank"} href="https://www.youtube.com/playlist?list=PLvF5bPYH6JFtL_KkueBX0ciGw3l5Lgd1E">
                                    <img src={ImagePaths.linkImg_0} alt="" />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a target={"_blank"} href="https://www.youtube.com/playlist?list=PLvF5bPYH6JFu7py7CG_yLsZGcAj5zXojI">
                                    <img src={ImagePaths.linkImg_1} alt="" />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                    <a target={"_blank"} href="https://www.youtube.com/playlist?list=PLvF5bPYH6JFu_34MNVQHe5wZCPTaip-sZ">
                                        <img src={ImagePaths.linkImg_2} alt="" />
                                    </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a target={"_blank"} href="https://www.youtube.com/playlist?list=PLvF5bPYH6JFsrlQWcDGd6S7u5cXxM6Tau">
                                    <img src={ImagePaths.linkImg_3} alt="" />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a target={"_blank"} href="https://www.youtube.com/playlist?list=PLvF5bPYH6JFuTuezxnIwgsgF55bcuJXeE">
                                    <img src={ImagePaths.linkImg_4} alt="" />
                                </a>
                            </SwiperSlide>


                        </Swiper>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Videos;
