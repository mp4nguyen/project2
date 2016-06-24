import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import * as actions from '../redux/actions';
import SelectPractitioner from '../Components/SelectPractitioner';


class MakeABooking extends Component{

	static contextTypes = {
		router: React.PropTypes.object
	};

	constructor(props,context){
		super(props,context);

	}

  _fieldOnChange(fieldName,e,date){
    var object = {};
    //console.log('onchange = ',fieldName,e,date);

    if(e){
      object[fieldName] = {value: e.target.value};  
    }else if(date){
      object[fieldName] = {value: moment(date).format('DD/MM/YYYY')};  
    }

    this.props.setPatientForCurrentBooking(object);
  }
            
	_submit(){
		//this.props.loadClinicsFromServer(this.props.currentPractitioner.bookingTypeId);
    console.log('Submit....');
		this.props.submitCurrentBooking();

		//this.context.router.push('/Clinics');		
	}

	render(){

    //var defaultDate = moment('01/01/1990','DD/MM/YYYY');
    let DateTimeFormat = global.Intl.DateTimeFormat;
    const defaultDate = new Date();
    defaultDate.setFullYear(1990);
    defaultDate.setHours(0, 0, 0, 0);
    
    const maxDate = new Date();

    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 100);
    minDate.setHours(0, 0, 0, 0);

    console.log(minDate,' ',maxDate);

		return (
  <div > 
    <section id="home" className="divider  "  >
      <div className="container">
            <div className="row">
              <div className="col-md-3">
              </div>            	
              <div className="col-md-6">                
                <div className=" border-1px p-25">
                  <h2>Booking summary:</h2>
                  <h3>Booking for {this.props.currentBooking.calendarTimeInStr} {this.props.currentBooking.calendarDateInStr}</h3>
                  <h3>at {this.props.currentBooking.clinicName} {this.props.currentBooking.address} {this.props.currentBooking.ward} {this.props.currentBooking.suburbDistrict} {this.props.currentBooking.stateProvince}</h3>                
                  <h4 className="text-theme-colored text-uppercase m-0">Patient Details</h4>
                  <div className="line-bottom mb-30"></div>
                  <TextField
                    hintText="First name"
                    floatingLabelText="First name"
                    fullWidth={true}
                    errorText="This field is required"
                    onChange={this._fieldOnChange.bind(this,"patientFirstName")}
                  />                   
                  <TextField
                    hintText="Last name"
                    floatingLabelText="Last name"
                    fullWidth={true}
                    errorText=""
                    onChange={this._fieldOnChange.bind(this,"patientLastName")}
                  />                                                                                         
                  <DatePicker 
                    hintText="Date of Birth" 
                    floatingLabelText="Date of Birth"
                    fullWidth={true}
                    minDate={minDate}
                    maxDate={maxDate}
                    formatDate={ new DateTimeFormat('en-AU', {
                        day: 'numeric',
                        month: 'numeric',
                        year: 'numeric',
                        }).format
                    }                  
                    onChange={this._fieldOnChange.bind(this,"patientBOD")}                    
                  />   
                  <TextField
                    hintText="Reason for Appointment"
                    floatingLabelText="Reason for Appointment"
                    fullWidth={true}
                    multiLine={true}
                    rows={2}                   
                    onChange={this._fieldOnChange.bind(this,"patientReason")}
                  />                                                                                         
                  <h4 className="text-theme-colored text-uppercase m-0">Contact Information</h4>
                  <div className="line-bottom mb-30"></div>
                  <TextField
                    hintText="Mobile number"
                    floatingLabelText="Mobile number"
                    fullWidth={true}
                    onChange={this._fieldOnChange.bind(this,"patientMobile")}
                  />                   
                  <TextField
                    hintText="Email"
                    floatingLabelText="Email"
                    fullWidth={true}
                    onChange={this._fieldOnChange.bind(this,"patientEmail")}
                  />  
                  <br/>
                  <div  className="span7 text-center">
                    <FlatButton 
                      label="Book Now" 
                      primary={true} 
                      onClick={this._submit.bind(this)}
                    />                                                                                                         
                  </div>

                </div>
              </div>
            </div>
      </div>            
    </section>
  </div>

				)
	}
}

function mapStateToProps(state){
	return state;
}


export default connect(mapStateToProps,actions)(MakeABooking);
