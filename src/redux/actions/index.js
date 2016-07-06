import  * as types from './types';
import store from '../store';
import axios from 'axios';
import moment from 'moment';
import io from 'socket.io-client';
let apiUrl = 'https://localhost:3001';//'https://192.168.36.56:3001'

/*let socket = io(apiUrl);

socket.on('connect', function () { console.log("socket connected"); });

socket.on('welcome', function (data) {
	console.log("socket connected welcome = ",data);
});

socket.on('APPOINTMENT_RESERVE',function(data){
	console.log('APPOINTMENT_RESERVE = ',data);
	otherUsersReserveAppt(data);
});

socket.emit('msg', { user: 'me', msg: 'whazzzup?' });
*/
export function otherUsersReserveAppt(calendar){
	return {
		type: types.OTHER_USERS_RESERVE_APPT,
		calendar
	};
}

export function	loadPractitionerFromServer(){
	//socket.emit('msg', { user: 'me', msg: 'loadPractitionerFromServer' });
	//const request = axios.get('https://0.0.0.0:3001/api/BBookingTypes');
	const request = axios.get(apiUrl + '/api/BBookingTypes');
	return {
		type: types.LOAD_PRACTITIONER_FROM_SERVER,
		payload: request
	}
}

export function	selectPractitioner(practitioner){
	//socket.emit('msg', { user: 'me', msg: 'selectPractitioner' });
	return {
		type: types.SELECT_PRACTITIONER,
		practitioner: practitioner
	}
};

export function	loadClinicsFromServer(pBookingTypeId){
	//socket.emit('msg', { user: 'me', msg: 'loadClinicsFromServer' });
	const request = axios.post(apiUrl + '/api/BClinics/filterClinic',{bookingTypeId:pBookingTypeId,time:'Today',long:1,lat:1});
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
	const request = axios.post(apiUrl + '/api/BClinics/filterClinic',{bookingTypeId:pBookingTypeId,time:'Today',long:1,lat:1});

	return {
		type: types.INITIAL_TIME,
		payload: request
	}
};

export function	selectTime(time){
	//socket.emit('msg', { user: 'me', msg: 'selectTime' });
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
        const request = axios.post(apiUrl + '/api/BClinics/filterClinic',{bookingTypeId:pBookingTypeId,time:date,long:1,lat:1});
		return [{type: types.CLOSE_DATEPICKER_DIALOG,date},{type: types.LOAD_CLINICS_FROM_SERVER,payload: request}]
      }

      return {type: types.CLOSE_DATEPICKER_DIALOG,date}
};

export function	setCalendarForCurrentBooking(calendar,clinic){
	//socket.emit('APPOINTMENT_RESERVE', { user: 'me', msg: 'setCalendarForCurrentBooking',calendar });
	return {
		type: types.CURRENT_BOOKING_SET_CALENDAR,
		calendar,
		clinic
	}
};

export function	setPatientForCurrentBooking(patient){
	return {
		type: types.CURRENT_BOOKING_SET_PATIENT,
		patient
	}
};

export function	submitCurrentBooking(currentBooking){

	var apptTime = currentBooking.calendarDateInStr+' '+currentBooking.calendarTimeInStr;
	console.log('submit currentBooking = ',apptTime,moment(apptTime,'DD/MM/YYYY HH:mm').format('YYYY-MM-DD HH:mm:ss'));

	var bookingObject = {
		"apptId": 0,
    "firstName": currentBooking.patientFirstName,
    "lastName": currentBooking.patientLastName,
    "dob": currentBooking.patientDOB,
    "reason": currentBooking.patientReason,
    "mobile": currentBooking.patientMobile,
    "email": currentBooking.patientEmail,
    "companyId": currentBooking.companyId,
    "clinicId": currentBooking.clinicId,
    "bookingTypeId": currentBooking.bookingTypeId,
    "doctorId": currentBooking.doctorId,
    "personId": currentBooking.personId,
    "rosterId": currentBooking.rosterId,
    "calendarId": currentBooking.calendarId,
    "appointmentTime": moment(apptTime,'DD/MM/YYYY HH:mm').format('YYYY-MM-DD HH:mm:ss'),
    "creationDate": moment().format('YYYY-MM-DD HH:MM:SS'),
    "source": "string"
	};
	console.log('will make the booking = ',bookingObject);

	const request = axios.post(apiUrl + '/api/BAppointments',bookingObject);
	return {
		type: types.CURRENT_BOOKING_SUBMIT,
		payload: request
	}

};
