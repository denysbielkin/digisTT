import findIndex from 'lodash/findIndex';
import {ADD_MARKER, REMOVE_MARKER, SAVE_MARKERS} from "../actions/markersActions";

const initialState = {
    markers: []
};

const markersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MARKER: {
            const newMarker = {
                lat: parseFloat(action.payload.lat.toFixed(7)),
                lng: parseFloat(action.payload.lng.toFixed(7)),
            };

            const markers = [...state.markers];

            markers.push(newMarker);

            return {...state, markers};
        }
        case REMOVE_MARKER: {
            const markerToRemove ={
                lat: parseFloat(action.payload.lat.toFixed(7)),
                lng: parseFloat(action.payload.lng.toFixed(7)),
            };
            const markers = [...state.markers];
            const index = findIndex(markers, (marker) => marker.lng === markerToRemove.lng && marker.lat === markerToRemove.lat);

            markers.splice(index, 1);

            return {...state, markers};
        }
        case SAVE_MARKERS:
            return { ...state, markers: action.payload };
        default:
            return state;
    }
};

export default markersReducer;
