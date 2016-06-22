import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Affix ,AutoAffix} from 'react-overlays';
import {Modal,ModalHeader,ModalBody,Button,OverlayTrigger,Popover,Tooltip} from 'react-bootstrap';
import InfiniteCalendar from 'react-infinite-calendar';

import SelectPractitionerInClinicList from '../components/SelectPractitionerInClinicList';
import SelectTimeAndLocationInClinicList from '../components/SelectTimeAndLocationInClinicList';
import DatePickerDialog from '../components/DatePickerDialog';

var Scroll  = require('react-scroll'); 
var Infinite = require('react-infinite');

var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scroller = Scroll.scroller;

import * as actions from '../redux/actions';

import ClinicItem from '../Components/ClinicItem';
import AllClinicsOnMap from '../containers/AllClinicsOnMap';

class ClinicList extends Component{

	constructor(props,context){
		super(props,context);

	}



  close() {
    this.props.closeDatePickerDialog();
  }

  open() {
  	this.props.openDatePickerDialog();   
  }

	componentWillReceiveProps(nextProps) {

	}

	componentWillUpdate(nextProps, nextState){
	    // perform any preparations for an upcoming update
		if(nextProps.currentClinic.index){
			scroller.scrollTo(nextProps.currentClinic.index, {
													  duration: 1500,
													  delay: 100,
													  smooth: true,
													});
		}				    
	}

	render(){

		var style3 = {
			display: 'inline-block',
		    position:'absolutex',
		    top: '200',
		    left: '0',
		    right: '0',
		    bottom: '0',
		    width:'800px',
		    height:'300px',
		    margin: 'auto',
		    border: 'rgba(0, 0, 0, 0)',
		    'backgroundColor': 'rgba(200, 200, 200, 0.8)'
		};

		let popover = <Popover title="popover">very popover. such engagement</Popover>;
    	let tooltip = <Tooltip>wow.</Tooltip>;

		return (
		    <section className="clinic-list">
		    	<DatePickerDialog datePickerDialog={this.props.datePickerDialog} closeDatePickerDialog={this.props.closeDatePickerDialog} datePickerOnSelect={this.props.datePickerOnSelect}/>
				<AutoAffix viewportOffsetTop={70} container={this}>
					<div className="navbar navbar-default navbar-static-top gray-light">
		              <div className="container">
		                <nav id="menuzord" className="menuzord blue gray-light">
		                  <SelectPractitionerInClinicList practitioners={this.props.practitioners} selectPractitioner={this.props.selectPractitioner}/>
		                  <SelectTimeAndLocationInClinicList  times={this.props.timeSelection.times} selectTime={this.props.selectTime} openDatePickerDialog={this.props.openDatePickerDialog}/>
		                </nav>
		              </div>					
					</div> 
				</AutoAffix>		    
				<div className="row">
					<div className="col-md-12">                       		    	
						<div className="container">
								<div className="row">
									<div className="col-md-9">       
										{
											this.props.clinics.map((clinic,index) => {
											return (   
												<Element name={index + 1} className="element">
													<ClinicItem key={clinic.clinicId} index={index} clinic={clinic} onMouseEnter={this.props.mouseEnterClinic} onMouseLeave={this.props.mouseLeaveClinic} ></ClinicItem>
													<p/>
        										</Element>
												)
											})
										}				
									</div>
									<div className="col-md-3">     						
										<div style={{position: 'absolute', width: '400px', height: '400px'}}>
											<AllClinicsOnMap/>
										</div>    	
									</div>														
								</div>      								
						</div>					
					</div>
				</div>
		    </section>
			)
	}
}

/*				        <Modal show={this.props.datePickerDialog.showDialog} onHide={this.close.bind(this)}>
				          <Modal.Header closeButton>
				            <Modal.Title>Modal heading</Modal.Title>
				          </Modal.Header>
				          <Modal.Body>
				            <h4>Text in a modal</h4>
				            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

				            <h4>Popover in a modal</h4>
				            <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

				            <h4>Tooltips in a modal</h4>
				            <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

				            <hr />

				            <h4>Overflowing text to show scroll behavior</h4>
							<InfiniteCalendar
							   min={'2016-04-21'}
							   minDate={'2016-06-22'}
							/>
				          </Modal.Body>
				          <Modal.Footer>
				            <Button onClick={this.close.bind(this)}>Close</Button>
				          </Modal.Footer>
				        </Modal>*/

function mapStateToProps(state){
	return state;
}


export default connect(mapStateToProps,actions)(ClinicList);


