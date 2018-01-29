import {createStore} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';

import rootReducer from './reducers/index.reducer'
import comments from './data/comments';
import posts from './data/posts';
import {browserHistory} from "react-router";

const defaultState = {
    posts,
    comments
};


const store = createStore(rootReducer, defaultState,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const history = syncHistoryWithStore(browserHistory, store);

export default store;