import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import os from process.env 
//import api key
API_KEY = os.getenv('PROJECT_API_KEY')



API_KEY = os.getenv('PROJECT_API_KEY')


const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY
const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    //laod in api key from env file
    googleMapsApiKey: {GOOGLE_MAPS_API_KEY}
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)
