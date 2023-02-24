import React, { Fragment } from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services"
import Reviews from "./Reviews";
import Contacts from "./Contacts";
import ScrollToTop from "./ScrollToTop";
import Videos from "./Videos";

import "../App.css";


const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 39.736700829199485,
    lng: 37.0328508
};

const Main = ({
    scroolActive,
    setScroolActive
}) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDMszvYEekN9PQoS9R8Br0JEqUgVa1Ku4s"  //need to define your google api key 
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (
        <>
            <ScrollToTop />
            <Navbar
                scroolActive={scroolActive}
                setScroolActive={setScroolActive}
            />

            <section className="main-item" id="home"><Home /> </section>
            <section className="main-item" id="about"><About /></section>
            <section className="main-item" id="videos"><Videos /></section>
            <section className="main-item" id="services"><Services /></section>
            <section className="main-item" id="reviews"><Reviews /></section>
            <section className="main-item" id="contacts"><Contacts /></section>
            <section className="maps-container">
                {isLoaded ? <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={7}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    <></>

                </GoogleMap>
                    : <>
                    </>
                }
            </section></>
    )
}
export default Main;