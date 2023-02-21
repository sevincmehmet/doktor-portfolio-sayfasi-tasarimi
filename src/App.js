
import React, { Fragment } from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services"
import Reviews from "./component/Reviews";
import Contacts from "./component/Contacts";
import ScrollToTop from "./component/ScrollToTop";
import "./App.css";

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 39.736700829199485,
  lng: 37.0328508
};

const App = () => {

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


  return (<>
  
    <div style={{ position: 'relative' }}>

      <div className="App">
        <ScrollToTop/>
        <Navbar />

          <section  id="home"><Home /> </section>
          <section id="about"><About /></section>
          <section id="services"><Services /></section>
          <section id="reviews"><Reviews /></section>
          <section id="contacts"><Contacts /></section>
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
          </section>
      </div>



    </div>


  </>)
}

export default App;