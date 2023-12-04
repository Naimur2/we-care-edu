import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useImperativeHandle } from "react";

const containerStyle = {
  width: "100%",
  height: "26rem",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function MapComp(props, ref) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY || "",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  useImperativeHandle(ref, () => ({
    panTo: ({ lat, lng }) => {
      if (map && isLoaded) {
        console.log("panning");
        map.panTo({ lat, lng });
        map.setZoom(14);
      }
    },
  }));

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
      onLoad={onLoad}
      onUnmount={onUnmount}
      
      

    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

const GMap = React.memo(React.forwardRef(MapComp));
export default GMap;
