import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import multi from 'redux-multi';

// Todo: add middleware
let finalCreateStore = compose(
	applyMiddleware(ReduxPromise,thunk,multi,logger())
)(createStore);

export default function configureStore(initialState = {practitioners:[],currentPractitioner:{}}){
	return finalCreateStore(rootReducer,initialState);
}