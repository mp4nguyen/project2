import  * as types from './types';

import axios from 'axios';

export function	loadPractitionerFromServer(){
	const request = axios.get('https://0.0.0.0:3001/api/BBookingTypes?filter[include]=Clinics');
	//console.log('loadPractitionerFromServer....', request);
	return {
		type: types.LOAD_PRACTITIONER_FROM_SERVER,
		payload: request
	}
}

export function	selectPractitioner(practitioner){
	return {
		type: types.SELECT_PRACTITIONER,
		practitioner: practitioner
	}
};

export function	loadClinicsFromServer(){
	const request = axios.get('https://0.0.0.0:3001/api/BClinics');
	//console.log('loadClinicsFromServer....');
	return {
		type: types.LOAD_CLINICS_FROM_SERVER,
		payload: request
	}
};	

export function	mouseEnterClinic(clinicIndex,clinic){
	
	return {
		type: types.MOUSE_ENTER_CLINIC,
		clinicIndex,
		clinic
	}
};	

export function	mouseLeaveClinic(clinicIndex,clinic){
	
	return {
		type: types.MOUSE_LEAVE_CLINIC,
		clinicIndex,
		clinic
	}
};	

export function	selectClinic(clinic){
	return {
		type: types.SELECT_CLINIC,
		clinic
	}
};	


