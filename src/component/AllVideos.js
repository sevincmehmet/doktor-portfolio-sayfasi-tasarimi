import { useEffect, useState } from "react";
import "./arrVideoCategory";
import "./AllVideos.css";
import arrVideoCategory from "./arrVideoCategory";
import ScrollToTop from "./ScrollToTop"
import Navbar from "./Navbar"
import Combobox from "react-widgets/Combobox";
import "react-widgets/styles.css";



const AllVideos = ({
    scroolActive,
    setScroolActive
}) => {
    const [data, setData] = useState(arrVideoCategory[0].catagoryVideos);
    const [activeId, setActiveId] = useState(0)
    // const [dataTitle, setDataTitle] = useState[[]];


    useEffect(() => {
        setScroolActive(true)
        document.getElementById('videolar').classList.add('linkActive')

    }, [scroolActive])

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

    var selectBox = document.getElementById("selectBox");

    function changeFunc() {

        var selectedValue = selectBox.options[selectBox.selectedIndex].value;
        setData(arrVideoCategory[selectedValue].catagoryVideos);
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
                                <div id="sidebar" className=" col-xl-3 col-md-4 col-sm-12 col-xs-12">
                                    <ul>
                                        {arrVideoCategory.map((oItem, oIndex) => {

                                            return <li key={oIndex} id={oIndex} className="h5 fw-normal">
                                                <a
                                                    style={{ fontSize: "16px" }}
                                                    className="rounded p-3 sidebar-item d-flex align-items-center justify-content-between"
                                                    href="#"
                                                    onClick={() => {
                                                        setData(oItem.catagoryVideos);
                                                        setActiveId(oIndex)
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
                                    <div id="combobox"
                                    >
                                        {/* <Combobox
                                            defaultValue="Aşı"
                                            data={["Aşı", "Hafta Hafta Gelişim", "Çocukluk Çağı Hastalıkları", "Sağlıklı Yaşam ve Fitnesil", "Uyku Eğitimleri", "Çocuklarda Davranış Eğitimi", "Otizm ve Hiperaktivite"]}
                                        /> */}
                                        <div className="custom-select">
                                        <select id="selectBox" onChange={() => {
                                            changeFunc()
                                        }}>
                                                {arrVideoCategory.map((oItem, oIndex) => {

                                                    return <option
                                                        key={oIndex}
                                                        id={oIndex}
                                                        value={oIndex}
                                                        onSelect={() => {
                                                            setData(oItem.catagoryVideos);
                                                            setActiveId(oIndex)
                                                        }}>
                                                            {oItem.catagoryTitle}
                                                        </option>

                                                })}
                                            </select>
                                        </div>
                                    </div>

                                </div>

                                {/* Video Bölümü */}
                                <div className="videos-section col-xl-9 col-md-8 col-sm-12 col-xs-12 ">

                                    <div className="row">
                                        {
                                            data.map((oItem, oIndex) => {
                                                return <div key={oIndex} className="col-sm-12 col-xs-12 p-3 ">
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
