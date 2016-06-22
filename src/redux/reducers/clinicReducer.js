
import {LOAD_CLINICS_FROM_SERVER,MOUSE_ENTER_CLINIC,MOUSE_LEAVE_CLINIC,SELECT_TIME,INITIAL_TIME,CLOSE_DATEPICKER_DIALOG} from '../actions/types';
import moment from 'moment';

var clone = require('clone');

/*var strToDate = function(dateSTR){
    if(dateSTR){
        var t = dateSTR.split(/[- : T .]/);               
        var d = new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);
        return d; // No TZ subtraction on this sample
    }
    return "";    
};*/

let clinicReducer = function(clinics = [], action) {

  switch (action.type) {
  	case LOAD_CLINICS_FROM_SERVER:      
  		return action.payload.clinics;
    case MOUSE_ENTER_CLINIC:
      let newObject = clone(clinics);
      newObject[action.clinicIndex-1].isMouseEnter = true;
    	return newObject;
    case MOUSE_LEAVE_CLINIC:
		  let newObject2 = clone(clinics);
      newObject2[action.clinicIndex-1].isMouseEnter = false;
    	return newObject2;  		      
    case INITIAL_TIME:
      //when search button pressing; the app will connect to the server to get the data and set the date = today
      console.log('clinicReducer = ',action);
      let newObject3 = clone(action.payload.data.clinics);
      let ptoday = moment().format('DD/MM/YYYY');

      console.log('ptoday = ',ptoday);
            
      for(var i in newObject3){
        var clinicObject = newObject3[i];
        //run through all rosters and find the roster day is today
        for(var j in clinicObject.Rosters){
          if(clinicObject.Rosters[j].calendarDateInStr == ptoday){
            //newObject3[i].currentCalendars = newObject3[i].Rosters[j].Calendars;  
            clinicObject.currentCalendars = clinicObject.Rosters[j].Calendars;  
          }
        }
      }
      return newObject3;                  
    case SELECT_TIME:
      console.log('clinicReducer.SELECT_TIME = ',action);      
      let newObject4 = clone(clinics);
      let ptoday2 = moment().format('DD/MM/YYYY');
      let ptomorrow2 = moment().add(1,'d').format('DD/MM/YYYY');
      console.log('ptoday = ',ptoday2,ptomorrow2);

      for(var i in newObject4){
        var clinicObject = newObject4[i];
        //run through all rosters and find the roster day is today
        for(var j in clinicObject.Rosters){
          if(action.time.name == 'Today' && clinicObject.Rosters[j].calendarDateInStr == ptoday2){
            //newObject3[i].currentCalendars = newObject3[i].Rosters[j].Calendars;  
            clinicObject.currentCalendars = clinicObject.Rosters[j].Calendars;  
          }else if(action.time.name == 'Tomorrow' && clinicObject.Rosters[j].calendarDateInStr == ptomorrow2){
            clinicObject.currentCalendars = clinicObject.Rosters[j].Calendars;  
          }
        }
      }      
      return newObject4;            
    case CLOSE_DATEPICKER_DIALOG:
      console.log('clinicReducer.CLOSE_DATEPICKER_DIALOG = ',action);
      let ptoday3 = moment().format('DD/MM/YYYY');
      let ptomorrow3 = moment().add(1,'d').format('DD/MM/YYYY');

      if(action.date == ptoday3 || action.date == ptomorrow3){
        //if selectDate is today or tomorrow => no need to connect to server to get the data; just using the current data
        let newObject5 = clone(clinics);
        console.log('ptoday = ',ptoday3,ptomorrow3);

        for(var i in newObject5){
          var clinicObject = newObject5[i];
          //run through all rosters and find the roster day is today
          for(var j in clinicObject.Rosters){
            if(clinicObject.Rosters[j].calendarDateInStr == action.date){
              clinicObject.currentCalendars = clinicObject.Rosters[j].Calendars;  
            }
          }
        }      
        return newObject5;                    
      }else{
        //otherwise, have to connect to the server to get the data of the seleted date

      }

      return clinics; 
    default: 
      return clinics;
  }
};

export default clinicReducer;
