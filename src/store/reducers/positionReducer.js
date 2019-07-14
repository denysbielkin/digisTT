import {SET_CURRENT_POSITION} from "../actions/positionActions";

const initialState = {
    coords: {},
};

const positionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_POSITION: {
            const coords = {
                lat: action.payload.latitude,
                lng: action.payload.longitude,
            };

            return {...state, coords};
        }

        default:
            return state;
    }
};

export default positionReducer;
