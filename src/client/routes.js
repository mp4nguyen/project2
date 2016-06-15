import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '../containers/App';
import SearchBooking from '../containers/SearchBooking';
import ClinicList from '../containers/ClinicList';

const  Greeting = () => {
	return <div>Greeting</div>;
};

const  About = () => {
	return <div>About</div>;
};

export default (
	<Route path="/" component={App}>	
		<IndexRoute component={ClinicList}/>
		<Route path="Clinics" component={ClinicList} />
		<Route path="About" component={About} />
		<Route path="greet2" component={Greeting} />
		<Route path="greet3" component={Greeting} />
	</Route>
);
