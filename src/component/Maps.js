import React, { Fragment } from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 39.736700829199485,
    lng: 37.0328508
};


const Maps = () => {

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

    return(
        <>
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
        </>
    )
}
export default Maps;
