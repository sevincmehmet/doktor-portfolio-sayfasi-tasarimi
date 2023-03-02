import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services"
import Reviews from "./Reviews";
import Contacts from "./Contacts";
import ScrollToTop from "./ScrollToTop";
import Videos from "./Videos";
import HealthService from "./HealtService"
import GoogleMaps from "./GoogleMaps";
import SocialChannels from "./SocialChannels"
import "../App.css";




const Main = ({
    scroolActive,
    setScroolActive
}) => {

    return (
        <div id="main">
            <ScrollToTop />
            <Navbar
                scroolActive={scroolActive}
                setScroolActive={setScroolActive}
            />
            <section  id="home" style={{paddingBottom:"0"}}><Home /> </section>
            <section id="healthServices" style={{padding:"100px 0"}}><HealthService /></section>
            <section className="main-item" id="about"><About /></section>
            <section className="main-item" id="videos"><Videos /></section>
            <section className="main-item" id="services"><Services /></section>
            {/* <section className="main-item" id="reviews"><Reviews /></section> */}
            <section id="socialChannels"><SocialChannels/></section>
            <section className="main-item" id="contacts"><Contacts /></section>
            <section className="maps-container"><GoogleMaps /></section>
        </div>
    )
}
export default Main;