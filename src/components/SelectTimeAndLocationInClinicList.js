import React,{Component,PropTypes} from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
//import 'react-infinite-calendar/styles.css'; // Make sure to import the default stylesheet

var classNames = require( 'classnames' ); 

class SelectTimeAndLocationInClinicList extends Component{

	static propTypes = {
		times: PropTypes.array.isRequired,
		selectTime: PropTypes.func.isRequired,
		openDatePickerDialog: PropTypes.func.isRequired
	};

	constructor(props,context){
		super(props,context);		
	}


	handleClick(event){
		console.log('event =',event);
		if(event.name == 'Later'){
			this.props.openDatePickerDialog();
		}else{
			this.props.selectTime(event);
		}				
	}

	render(){


		return (
                <ul className="menuzord-menu pull-right flip hidden-sm hidden-xs">
			        {
				        this.props.times.map(function(item, i) {
				          	var boundClick = this.handleClick.bind(this, item);
							var classes = classNames({'active' : item.isSelected});

							return (
									<li key={i} className={classes}>
										<a onClick={boundClick}>
											{item.name}
										</a>		                  		                	
									</li>			            
									);
				        },this)
			    	}                
                </ul>			
			)
	}
}

export default SelectTimeAndLocationInClinicList;




