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
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    document.body.style.cssText="padding-right: 0px !important;"
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
    };

    window.addEventListener("scroll", scroolAnimate);
    return (
        <>
            <header className={scroolActive || windowSize[0] < 1200 ? "navActive" : "nav"}>
                <div onClick={() => {
                    setDotClick(!dotClick);
                }} className={dotClick ? "rotate-dot setting-icon d-xl-none" : "setting-icon d-xl-none"}>
                    {
                        !dotClick?
                        <>
                        <div  id="setting-icon-item-0">.</div>
                    <div id="setting-icon-item-1">.</div>
                    <div id="setting-icon-item-2">.</div>
                    </>:<>
                        <div className="closeButton">
                            X
                        </div>
                    </>       
                    }
                </div>
                <div className={dotClick? "d-xl-none dot-modal":"d-none dot-modal"}>
                    <Link id="dotMake" className="btn btn-primary" activeClass="active" spy to="contacts">
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
                        <Navbar.Toggle id="menu-icon-div" aria-controls={`offcanvasNavbar-expand-${"xl"}`} />
                        <Navbar.Offcanvas className="menu-icon"
                            id={`offcanvasNavbar-expand-${"xl"}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${"xl"}`}
                            placement="end"
                        >

                            <Offcanvas.Header closeButton>
                                
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="text-nav justify-content-end flex-grow-1">
                                    <ul>
                                        <li>
                                            <Link activeClass="active" spy to="home">
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link activeClass="active" spy to="about">
                                                About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link activeClass="active" spy to="services">
                                                Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link activeClass="active" spy to="reviews">
                                                Reviews
                                            </Link>
                                        </li>
                                        <li>
                                            <Link activeClass="active" spy to="contacts">
                                                Contacts
                                            </Link>
                                        </li>
                                        <li>
                                            <Link id="make" className="btn btn-primary" activeClass="active" spy to="contacts">
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
