import  {LOAD_PRACTITIONER_FROM_SERVER, SELECT_PRACTITIONER, LOAD_CLINICS_FROM_SERVER} from './types';

import axios from 'axios';

export function	loadPractitionerFromServer(){
	const request = axios.get('https://0.0.0.0:3001/api/BBookingTypes?filter[include]=Clinics');
	//console.log('loadPractitionerFromServer....', request);
	return {
		type: LOAD_PRACTITIONER_FROM_SERVER,
		payload: request
	}
}

export function	selectPractitioner(practitioner){
	return {
		type: 'SELECT_PRACTITIONER',
		practitioner: practitioner
	}
};

export function	loadClinicsFromServer(){
	const request = axios.get('https://0.0.0.0:3001/api/BClinics');
	//console.log('loadClinicsFromServer....');
	return {
		type: LOAD_CLINICS_FROM_SERVER,
		payload: request
	}
};	