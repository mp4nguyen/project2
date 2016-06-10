import React from 'react';
import {render} from 'react-dom';
import configureStore from '../redux/store';
import {Provider} from 'react-redux';
import { Router, browserHistory } from "react-router";
import routes from './routes';


const  Greeting = () => {
	return <div>Greeting</div>;
};

let initialState = {
	practitioners:[

	],
	currentPractitioner: {}
};

let store = configureStore(initialState);


render(
	<Provider store = {store}>
		<Router history={browserHistory} routes={routes}>
		</Router>
	</Provider>		
	,
	document.getElementById('app')
);
