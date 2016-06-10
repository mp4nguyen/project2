import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../redux/actions';

import ClinicItem from '../Components/ClinicItem';

class ClinicList extends Component{

	constructor(props,context){
		super(props,context);
		this.state = {
			inputText : ''
		};
	}

	handleChange(event){
		console.log('change detected',event.target.value);
		this.setState({
			inputText: event.target.value
		});
	}

	handleSubmit(event){
		event.preventDefault();
		console.log('submit clicked');
		this.props.actions.loadClinicsFromServer();
		//this.props.addTodo(this.state.inputText);
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
		    	style={{'backgroundImage':'url(images/bg/bg1.jpg)', width:'100%', height: '100%'}}		    	
		    	>
		      <div className="container pb-80">
			      <div className="section-centent">
						<div className="row">
				          	<div className="col-md-12">                       
								{
									this.props.currentPractitioner.Clinics.map(clinic => {
										return <ClinicItem key={clinic.clinicId} clinic={clinic}></ClinicItem>
									})
								}
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


