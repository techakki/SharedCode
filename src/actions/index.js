import {ADD_PLACE, REMOVE_PLACE, REMOVE_ALL} from '../constant';

export const addPlace = place => {
    return {
        type: ADD_PLACE,
        place
    };
};

export const removePlace = ide => {
    return {
        type: REMOVE_PLACE,
        id
    };
};

export const removeAll = () => {
    return {
        type: REMOVE_ALL
    };
};
