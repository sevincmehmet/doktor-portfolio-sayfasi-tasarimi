import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./assets/site-logo.png"
import { Link }  from "react-scroll";
import { Link as LinkRou} from "react-router-dom";
import { useNavigate } from "react-router-dom";



import "./Navbar.css";
function Navbars({
    scroolActive,
    setScroolActive
}) {
    const [dotClick, setDotClick] = useState(false)
    const [sideBarActive, setSideBarActive] = useState(false);
    const [offsetNumber, setOffsetNumber] = useState(-90);
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);
    const navigate = useNavigate();

    document.body.style.cssText = "padding-right: 0px !important;";

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    useEffect(() => {
        offsetNumberControl();
    }, [scroolActive])

    const scroolAnimate = () => {

        if (window.scrollY > 16) {
            setScroolActive(true)
        } else if (window.scrollY < 1) {
            setScroolActive(false)
        }
    };

    window.addEventListener("scroll", scroolAnimate);

    const offsetNumberControl = () => {
        if (windowSize[0] < 1200) {
            setOffsetNumber(-80);
        } else if (windowSize[0] >= 1200) {
            if (scroolActive) {
                setOffsetNumber(-89)
            } else {
                setOffsetNumber(-99)
            }
        }
    }
    return (
        <>
            <header id="header" className={scroolActive || windowSize[0] < 1200 ? "navActive" : "nav"}>
                <div onClick={() => {
                    setDotClick(!dotClick);
                }} className={dotClick ? "rotate-dot setting-icon d-xl-none" : "setting-icon d-xl-none"}>
                    {
                        !dotClick ?
                            <>
                                <div id="setting-icon-item-0">.</div>
                                <div id="setting-icon-item-1">.</div>
                                <div id="setting-icon-item-2">.</div>
                            </> : <>
                                <div className="closeButton">
                                    X
                                </div>
                            </>
                    }
                </div>
                <div className={dotClick ? "d-xl-none dot-modal" : "d-none dot-modal"}>
                    <Link id="dotMake" offset={offsetNumber} className="btn btn-primary" activeClass="active" spy to="contacts" onClick={() => {
                        setDotClick(!dotClick);
                        navigate("/");
                    }}>
                        Randevu Al
                    </Link>
                </div>
                <Navbar
                    key={"xl"}
                    expand={"xl"}
                    id="navShadow"
                    className={scroolActive || windowSize[0] < 1200 ? " nav__container mb-3" : "nav-shadow nav__container mb-3"}
                >
                    <Container fluid >
                        <Navbar.Brand href="#">
                            <div
                                className="logo"
                                onClick={() => {
                                    navigate("/")
                                }}
                            >
                                <img src={Logo} ></img>
                            </div>
                        </Navbar.Brand>
                        <div className="navbar-spaces"></div>

                        {/* <button className=" btn btn-danger" type="button" }></button> */}
                        <div id="menu-icon-div">
                            <i className="menu-icon d-xl-none fa-sharp fa-solid fa-bars" onClick={() => { setSideBarActive(!sideBarActive); }}></i>

                        </div>
                        <Navbar.Offcanvas
                            className={sideBarActive ? "menu-icon show" : "menu-icon"}
                            id={`offcanvasNavbar-expand-${"xl"}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${"xl"}`}
                            placement="end"
                        >

                            <Offcanvas.Body>
                                <Nav id="scrollspy1" className="text-nav justify-content-end flex-grow-1 menu-sidebar">
                                    <ul>
                                        <li >
                                            <Link
                                                className="nav-link"
                                                offset={offsetNumber}
                                                onClick={() => { setSideBarActive(!sideBarActive); 
                                                navigate("/") }}
                                                spy to="home"
                                            >
                                                Anasayfa
                                            </Link>
                                        </li>
                                        
                                        <li>
                                            <LinkRou
                                                id="videolar"
                                                className="nav-link"
                                                offset={offsetNumber}

                                                onClick={() => { setSideBarActive(!sideBarActive); navigate("/") }}
                                                to="/allVideos"

                                            >
                                                Videolar
                                            </LinkRou>
                                        </li>
                                        <li>
                                            <LinkRou
                                                id="sorulariniz"
                                                className="nav-link"
                                                offset={offsetNumber}
                                                onClick={() => { setSideBarActive(!sideBarActive); navigate("/") }}
                                             to="/allQuestions"
                                            >
                                                Sorularınız
                                            </LinkRou>
                                        </li>
                                        <li>
                                            <Link
                                                style={{ color: "white" }}
                                                offset={offsetNumber}
                                                activeClass="active"
                                                id="make"
                                                className="nav-link btn btn-primary"
                                                onClick={() => { setSideBarActive(!sideBarActive); navigate("/") }}
                                                spy to="contacts">
                                                Randevu Al
                                            </Link>
                                        </li>
                                    </ul>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </header>
        </>
    );
}

export default Navbars;
