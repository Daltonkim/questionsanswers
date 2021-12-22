import { combineReducers } from 'redux';
import { questions } from '../modules/home/redux/_reducer'
import { modals } from '../modules/modals/_reducer'

const rootReducer = combineReducers({
    questions,
    modals
});

export default rootReducer;
