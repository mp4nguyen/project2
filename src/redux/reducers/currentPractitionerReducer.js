
var clone = require('clone');
import {SELECT_PRACTITIONER,LOAD_PRACTITIONER_FROM_SERVER,MOUSE_ENTER_CLINIC,MOUSE_LEAVE_CLINIC} from '../actions/types';

let currentPractitionerReducer = function(currentPractitioner = {Clinics:[]}, action) {
  switch (action.type) {
    case LOAD_PRACTITIONER_FROM_SERVER:
		let isSelected = true;    
		return Object.assign({},action.payload.data[0],{isSelected});
    case SELECT_PRACTITIONER:
    	return action.practitioner;
    case MOUSE_ENTER_CLINIC:
      	let newObject = clone(currentPractitioner);
      	newObject.Clinics[action.clinicIndex-1].isMouseEnter = true;
    	return newObject;
    case MOUSE_LEAVE_CLINIC:
      	let newObject2 = clone(currentPractitioner);
      	newObject2.Clinics[action.clinicIndex-1].isMouseEnter = false;
    	return newObject2;
    default: 
      	return currentPractitioner;
  }
};

export default currentPractitionerReducer;
