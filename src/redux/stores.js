import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import * as types from './types';

let isLoading = false;
const showLoading = (state = isLoading, action)=>{
    if(action.type === types.SHOW_LOADING){
        if(action.name === 'SHOW') isLoading = true;
        else isLoading = false;
        return isLoading;
    }
    return isLoading;
};

const reducer = combineReducers({
    // showGuide: showGuide,
    showLoading: showLoading
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;