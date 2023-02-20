import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logo.png";
import { Link } from "react-scroll";
import "./Navbar.css";
import { useEffect, useState } from "react";
function Navbars() {
    const [scroolActive, setScroolActive] = useState(false);
    const [dotClick, setDotClick] = useState(false)
    const [sideBarActive, setSideBarActive] = useState(false)
    const [defActive, setDefActive] = useState(true);
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
    const scroolAnimate = () => {
        if (window.scrollY > 3) {
            setScroolActive(true)
        } else {
            setScroolActive(false)
        }
    window.scrollY > 50 ? setDefActive(false): setDefActive(true)
    };

    window.addEventListener("scroll", scroolAnimate);
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
                    <Link id="dotMake" className="btn btn-primary" activeClass="active" spy to="contacts" onClick={() => {
                        setDotClick(!dotClick);
                    }}>
                        Make appointment
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
                                <img src={logo} ></img>
                            </div>
                        </Navbar.Brand>
                        <div className="navbar-spaces"></div>

                        {/* <button className=" btn btn-danger" type="button" }></button> */}
                        <div id="menu-icon-div">
                            <i className="menu-icon d-xl-none fa-sharp fa-solid fa-bars" onClick={() => { setSideBarActive(!sideBarActive); }}></i>

                        </div>
                        <Navbar.Offcanvas className={sideBarActive ? "menu-icon show" : "menu-icon"}
                            id={`offcanvasNavbar-expand-${"xl"}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${"xl"}`}
                            placement="end"
                        >

                            <Offcanvas.Body>
                                <Nav className="text-nav justify-content-end flex-grow-1">
                                    <ul>
                                        <li >
                                            <Link activeClass="active" className={defActive ? "active nav-link" : "nav-link"} spy to="home" onClick={() => { setSideBarActive(!sideBarActive); }}>
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link activeClass="active" className="nav-link" spy to="about" onClick={() => { setSideBarActive(!sideBarActive); }}>
                                                About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link activeClass="active" className="nav-link" spy to="services" onClick={() => { setSideBarActive(!sideBarActive); }}>
                                                Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link activeClass="active" className="nav-link" spy to="reviews" onClick={() => { setSideBarActive(!sideBarActive); }}>
                                                Reviews
                                            </Link>
                                        </li>
                                        <li>
                                            <Link activeClass="active" className="nav-link" spy to="contacts" onClick={() => { setSideBarActive(!sideBarActive); }}>
                                                Contacts
                                            </Link>
                                        </li>
                                        <li>
                                            <Link style={{ color: "white" }} activeClass="active" id="make" className="nav-link btn btn-primary" onClick={() => { setSideBarActive(!sideBarActive); }} spy to="contacts">
                                                Make appointment
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
