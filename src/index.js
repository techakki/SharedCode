import reducer from './state_management/reducers';
import {
    addPlace,
    removePlace,
    removeAll
} from './state_management/actions';

const actions = {
    addPlace,
    removePlace,
    removeAll
};

export {
    reducer,
    actions
};
