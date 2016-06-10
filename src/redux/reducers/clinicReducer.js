
import {LOAD_CLINICS_FROM_SERVER} from '../action';

let clinicReducer = function(clinics = [], action) {
  switch (action.type) {
  	case LOAD_CLINICS_FROM_SERVER:
  		console.log(action);

  		return action.payload.data;

    default: 
      return clinics;
  }
};

export default clinicReducer;
