// this.mapAPIkey = 'AIzaSyD7_ODn8pty_Q3MHidYFjrPd4ey1T1GRlo'
//AIzaSyA8tLOd0hiXIHOCvQ1jJ5lpXfjqsp15fRs
//AIzaSyAxOeOO5IXuUjz2c4WfctJcjOp75fM43yA
import React from "react";
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

const Map = (props) => {
    const addMarker = (e) => {
        props.addMarker({
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
        })
    };

    const deleteMarker = marker => {
        props.deleteMarker(marker);
    };

    const getMarkers = () => { //use props instead of that?
        return props.places.map((place, index) => {
            return (<Marker
                key={index}
                position={place}
                onClick={() => {
                    deleteMarker(place);
                }}
            />)
        });
    };

    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={props.defaultCenter}
            onClick={(e) => addMarker(e)}
        >
            {getMarkers()}
        </GoogleMap>

    )
};

export default withScriptjs(withGoogleMap(Map));
