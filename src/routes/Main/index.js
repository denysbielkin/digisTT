import {connect} from 'react-redux';

import Main from './components';

import {ADD_MARKER, REMOVE_MARKER, SAVE_MARKERS} from '../../store/actions/markersActions';
import {SET_CURRENT_POSITION} from '../../store/actions/positionActions';

const mapStateToProps = (state) => ({
    places: state.markers.markers,
    currentPosition: state.position.coords,
});

const mapDispatchToProps = (dispatch) => ({
    addMarker: marker => dispatch({type: ADD_MARKER, payload: marker}),
    removeMarker: marker => dispatch({type: REMOVE_MARKER, payload: marker}),
    saveMarkers: markers => dispatch({type: SAVE_MARKERS, payload: markers}),
    setCurrentPosition: geolocation => dispatch({type: SET_CURRENT_POSITION, payload: geolocation.coords}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);