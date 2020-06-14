import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import reducer from './reducers/index';

const middleware = [thunk];
const initialState = {
    "search_text": "",
    "users": [],
    "loading": false,
    "user": {},
    repos : []

}
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;
