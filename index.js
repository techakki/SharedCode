import reducer from './src/state_management/reducers';
import {
    addPlace,
    removePlace,
    removeAll
} from './src/state_management/actions';

const actions = {
    addPlace,
    removePlace,
    removeAll
};

export {
    reducer,
    actions
};
