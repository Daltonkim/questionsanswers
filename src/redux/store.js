import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'; // remove on deployment
import rootReducer from './reducer';

const loggerMiddleware = createLogger();
const persistedState = {};

// Redux debug tools
export const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware)),
);
