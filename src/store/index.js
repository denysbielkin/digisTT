import {combineReducers} from 'redux';

import markersReducer from './reducers/markersReducer';
import positionReducer from "./reducers/positionReducer";

export default combineReducers({
    markers: markersReducer,
    position: positionReducer,
});
