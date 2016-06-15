import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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

	componentWillReceiveProps(nextProps) {
/*		console.log('componentWillReceiveProps',this.props.currentClinic);
		if(this.props.currentClinic.index){
			scroller.scrollTo(this.props.currentClinic.index, {
													  duration: 1500,
													  delay: 100,
													  smooth: true,
													})			
		}*/

	}

	componentWillUpdate(nextProps, nextState){
	    // perform any preparations for an upcoming update
	    console.log('nextProps = ',nextProps);
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

		return (
		    <section className="divider parallax layer-overlay overlay-white clinic-list" 
		    	
		    	>
				<div className="row">
					<div className="col-md-12">                       		    	
						<div className="container">
								<div className="row">
									<div className="col-md-9">       
										{
											this.props.currentPractitioner.Clinics.map((clinic,index) => {
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

function mapStateToProps(state){
	return state;
}


export default connect(mapStateToProps,actions)(ClinicList);


