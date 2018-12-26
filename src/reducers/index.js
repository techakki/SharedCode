import {ADD_PLACE, REMOVE_PLACE, REMOVE_ALL} from "../constant";

function addPlace(place) {
    return {
        id: Math.random(),
        name: place
    };
}

function removeById(state, id) {
    return state.filter(place => place.id != id);
}

export default function reducer(state = [], action) {
    switch(action.type) {
        case ADD_PLACE:
            return {
                ...state,
                addPlace(place)
            };
        case REMOVE_PLACE:
            return removeById(state, id);
        case REMOVE_ALL:
            return {
                ...state,
                places: []
            };
        default:
            return state;
    };
}
