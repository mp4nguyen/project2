import  * as types from './types';
import store from '../store';
import axios from 'axios';
import moment from 'moment';

export function	loadPractitionerFromServer(){
	const request = axios.get('https://0.0.0.0:3001/api/BBookingTypes');
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

export function	loadClinicsFromServer(pBookingTypeId){
	const request = axios.post('https://localhost:3001/api/BClinics/filterClinic',{bookingTypeId:pBookingTypeId,time:'Today',long:1,lat:1});	
	return (dispatch)=>{
		request.then(({data})=>{
			console.log('data =',data);
			//dispatch({type:types.LOAD_CLINICS_FROM_SERVER, payload: data});
			dispatch({type:types.INITIAL_TIME, payload: data});
		});
	};	
/*	return {
		type: types.LOAD_CLINICS_FROM_SERVER,
		payload: request
	}*/
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

export function	initialTime(pBookingTypeId){
	const request = axios.post('https://localhost:3001/api/BClinics/filterClinic',{bookingTypeId:pBookingTypeId,time:'Today',long:1,lat:1});	

	return {
		type: types.INITIAL_TIME,
		payload: request
	}	
};

export function	selectTime(time){
	return {
		type: types.SELECT_TIME,
		time
	}
};

export function	datePickerOnSelect(date){	
	return {
		type: types.DATEPICKER_ON_SELECT,
		date
	}
};

export function	openDatePickerDialog(){
	return {
		type: types.OPEN_DATEPICKER_DIALOG
	}
};

export function	closeDatePickerDialog(date,pBookingTypeId){
      console.log('closeDatePickerDialog = ',date,pBookingTypeId);
      let ptoday = moment().format('DD/MM/YYYY');
      let ptomorrow = moment().add(1,'d').format('DD/MM/YYYY');

      if(date == ptoday){
		return [{type: types.CLOSE_DATEPICKER_DIALOG,date},{type :types.SELECT_TIME, time: {name:'Today'}}]      	
      }else if(date == ptomorrow){
		return [{type: types.CLOSE_DATEPICKER_DIALOG,date},{type :types.SELECT_TIME, time: {name:'Tomorrow'}}]      	
      }else{
        //otherwise, have to connect to the server to get the data of the seleted date
        const request = axios.post('https://localhost:3001/api/BClinics/filterClinic',{bookingTypeId:pBookingTypeId,time:date,long:1,lat:1});	
		return [{type: types.CLOSE_DATEPICKER_DIALOG,date},{type: types.LOAD_CLINICS_FROM_SERVER,payload: request}]      	
      }

      return {type: types.CLOSE_DATEPICKER_DIALOG,date}
};


