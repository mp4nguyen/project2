import React from 'react';
import {render} from 'react-dom';
import configureStore from '../redux/store';
import {Provider} from 'react-redux';
import { Router, browserHistory } from "react-router";
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

injectTapEventPlugin();

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
	<MuiThemeProvider muiTheme={muiTheme}>
		<Provider store = {store}>
			<Router history={browserHistory} routes={routes}>
			</Router>
		</Provider>		
	</MuiThemeProvider> 
	,
	document.getElementById('app')
);
