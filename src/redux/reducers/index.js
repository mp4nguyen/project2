import {combineReducers} from 'redux';
import todoReducer from './todoReducer';
import userReducer from './userReducer';
import practitionerReducer from './practitionerReducer';
import currentPractitionerReducer from './currentPractitionerReducer';
import clinicReducer from './clinicReducer';

const rootReducer = combineReducers({
	practitioners: practitionerReducer,
	currentPractitioner: currentPractitionerReducer
});

export default rootReducer;