import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import comments from "./comments.reducer";
import posts from "./posts.reducer";


const rootReducers = combineReducers({posts, comments, routing: routerReducer});

export default rootReducers;
