import { useEffect, useState } from "react";
import "./arrVideoCategory";
import arrVideoCategory from "./arrVideoCategory";
import ScrollToTop from "./ScrollToTop"
import Navbar from "./Navbar"
import Combobox from "react-widgets/Combobox";

import "./AllVideos.css";


const AllVideos = ({
    scroolActive,
    setScroolActive
}) => {
    const [data, setData] = useState(arrVideoCategory[0].catagoryVideos);
    const [activeId, setActiveId] = useState(0)
    const [inpActive, setInpActive] = useState(true)

    useEffect(() => {
        setScroolActive(true)
        document.getElementById('videolar').classList.add('linkActive')
    }, [scroolActive])
    useEffect(() => {
        setInpActive(false)
      document.getElementById('rw_1_input')?.setAttribute('disabled',!inpActive)
    }, [inpActive])

    useEffect(() => {
        for (let i = 0; i < document.getElementsByClassName('sidebar-item').length; i++) {
            if (activeId == i) {
                document.getElementById(activeId).classList.add('sidebarActive');
                document.getElementById(activeId).style.cssText = "font-size:16px;"

            } else {
                document.getElementById(i).classList.remove('sidebarActive')
                document.getElementById(i).style.cssText = "font-size:16px;"
            }
        }
    }, [activeId])


    const dataFilter = (oIndex) => {
        setData(arrVideoCategory[oIndex].catagoryVideos);
        setActiveId(oIndex)
    }

    const changeFunc = () => {
        
        for (let i = 0; i < arrVideoCategory.length; i++) {
            document.getElementById("rw_2_listbox")?.getElementsByClassName('rw-list-option')[i].addEventListener("click", function() {
                dataFilter(i)
            });
        }

// alert(document.getElementById("rw_2_listbox")?.getElementsByClassName('rw-list-option')[1].innerHTML);



    }

    return (
        <div id="allVideos">

            <ScrollToTop />
            <Navbar
                scroolActive={scroolActive}
                setScroolActive={setScroolActive}
            />
            <div className="container main-cont">

                <div className="row">
                    <div className="col-xxl-10 col-xl-12 col-md-12 m-auto ">
                        <h2 className="services-title" >Videolarla Medikal Hizmetler </h2>
                        <div className="container-fluid">

                            <div className="row allVideos-container">
                                {/* sideBar */}
                                <div id="sidebar" className=" col-xl-3 col-md-4 col-sm-12">
                                    <ul>
                                        {arrVideoCategory.map((oItem, oIndex) => {

                                            return <li key={oIndex} id={oIndex} className="h5 fw-normal">
                                                <a
                                                    style={{ fontSize: "16px" }}
                                                    className="rounded p-3 sidebar-item d-flex align-items-center justify-content-between"
                                                    href="#"
                                                    onClick={() => {
                                                        dataFilter(oIndex)
                                                    }}
                                                >
                                                    <div className="sidebar-title pe-4 text-truncate">
                                                        <i className="align-item-center ps-1 pe-2 fa-solid fa-circle circleIcon" ></i>
                                                        <span>{oItem.catagoryTitle}</span>
                                                    </div>
                                                    <div style={{ color: "lightgray" }} className="sidebar-length ">
                                                        {oItem.catagoryVideos.length}
                                                    </div>
                                                </a>
                                            </li>;

                                        })}
                                    </ul>
                                </div>

                                {/* Video Bölümü */}
                                <div className="videos-section col-xl-9 col-md-8 col-sm-12 m-auto">
                                <div 
                                        id="combobox"
                                        className="mt-3 mb-3"
                                      
                                    >
                                        <Combobox   onClick={() => {
                                            changeFunc()
                                        }}
                                            defaultValue="Aşı"
                                            data={["Aşı", "Hafta Hafta Gelişim", "Çocukluk Çağı Hastalıkları", "Sağlıklı Yaşam ve Fitnesil", "Uyku Eğitimleri", "Çocuklarda Davranış Eğitimi", "Otizm ve Hiperaktivite"]}
                                        />
                                    </div>
                                    <div className="row">
                                        {
                                            data.map((oItem, oIndex) => {
                                                return <div key={oIndex} className="col-sm-12 p-3 ">
                                                    <div id="videos-text-container" style={{ minHeight: "90px", maxHeight: "95px" }}>
                                                        <div className="blurb-title text-start"><h3 style={{ fontSize: "18px" }}>{oItem.vidoTitle}</h3></div>
                                                        <div className="blurb-text text-start pb-3 ">{oItem.videoArticle}</div>

                                                    </div>
                                                    <iframe style={{ height: "25rem" }} frameBorder="0" scrolling="no" id="videos-container" src={oItem.videoUrl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                                                </div>
                                            })
                                        }
                                    </div></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};
export default AllVideos;
