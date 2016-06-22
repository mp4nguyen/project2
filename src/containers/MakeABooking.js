import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../redux/actions';

import SelectPractitioner from '../Components/SelectPractitioner';


class MakeABooking extends Component{

	static contextTypes = {
		router: React.PropTypes.object
	};

	constructor(props,context){
		super(props,context);

	}



	handleChange(event){
		this.setState({
			inputText: event.target.value
		});
	}

	handleSubmit(event){
		event.preventDefault();
		//this.props.loadClinicsFromServer(this.props.currentPractitioner.bookingTypeId);
		this.props.initialTime(this.props.currentPractitioner.bookingTypeId);
		this.context.router.push('/Clinics');		
	}

	render(){

		return (
				<section id="home" className="" >
					<div className="container">
						<h1>Make a booking !!!</h1>
					</div>
			    </section>
				)
	}
}

function mapStateToProps(state){
	return state;
}



export default connect(mapStateToProps,actions)(MakeABooking);
