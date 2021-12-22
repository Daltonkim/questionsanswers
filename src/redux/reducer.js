import { combineReducers } from 'redux';
import { questions } from '../modules/home/redux/_reducer'

const rootReducer = combineReducers({
    questions
});

export default rootReducer;
