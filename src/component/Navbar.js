import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./assets/site-logo.png"
import { Link } from "react-scroll";
import "./Navbar.css";
function Navbars() {
    const [scroolActive, setScroolActive] = useState(false);
    const [dotClick, setDotClick] = useState(false)
    const [sideBarActive, setSideBarActive] = useState(false);
    const [offsetNumber, setOffsetNumber] = useState(-90);
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

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

    useEffect(()=> {
        offsetNumberControl();
    }, [scroolActive])
    const scroolAnimate = () => {
        if (window.scrollY > 3) {
            setScroolActive(true)
        } else {
            setScroolActive(false)
        }
    };

    window.addEventListener("scroll", scroolAnimate);

    const offsetNumberControl = () => {
        if (windowSize[0] < 1200) {
            setOffsetNumber(-80);
            console.log(offsetNumber);
        } else if(windowSize[0] >= 1200) {
            if (scroolActive) {
                setOffsetNumber(-90)
            } else {
                setOffsetNumber(-100)
            }
            console.log(offsetNumber);
        }
        
        
        
    }
    return (
        <>
            <header className={scroolActive || windowSize[0] < 1200 ? "navActive" : "nav"}>
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
                    }}>
                        Randevu Al
                    </Link>
                </div>
                <Navbar
                    key={"xl"}
                    expand={"xl"}
                    className={scroolActive || windowSize[0] < 1200 ? " nav__container mb-3" : "nav-shadow nav__container mb-3"}
                >
                    <Container fluid >
                        <Navbar.Brand href="#">
                            <div className="logo">
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
                                                activeClass="active"
                                                className="nav-link"
                                                offset={offsetNumber}
                                                spy to="home"
                                                onClick={() => { setSideBarActive(!sideBarActive); }}
                                            >
                                                Anasayfa
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                activeClass="active"
                                                className="nav-link"
                                                spy
                                                offset={offsetNumber}
                                                to="about"

                                                onClick={() => { setSideBarActive(!sideBarActive); }}

                                            >
                                                Hakkımda
                                            </Link>
                                        </li>

                                        <li>
                                            <Link activeClass="active"
                                                className="nav-link"
                                                offset={offsetNumber}
                                                spy to="services"
                                                onClick={() => { setSideBarActive(!sideBarActive); }}
                                            >
                                                Sorularınız
                                            </Link>
                                        </li>

                                        <li>
                                            <Link activeClass="active"
                                                className="nav-link"
                                                offset={offsetNumber}
                                                spy to="contacts" onClick={() => { setSideBarActive(!sideBarActive); }}
                                            >
                                                İletişim
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                style={{ color: "white" }}
                                                offset={offsetNumber}
                                                activeClass="active"
                                                id="make"
                                                className="nav-link btn btn-primary"
                                                onClick={() => { setSideBarActive(!sideBarActive); }}
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
