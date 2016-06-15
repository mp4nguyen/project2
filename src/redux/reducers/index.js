import {combineReducers} from 'redux';
import practitionerReducer from './practitionerReducer';
import currentPractitionerReducer from './currentPractitionerReducer';
import clinicReducer from './clinicReducer';
import currentClinicReducer from './currentClinicReducer';

const rootReducer = combineReducers({
	practitioners: practitionerReducer,
	currentPractitioner: currentPractitionerReducer,
	currentClinic: currentClinicReducer
});

export default rootReducer;