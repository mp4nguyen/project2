import React,{Component} from 'react';

var classNames = require( 'classnames' ); 

class SelectPractitionerInClinicList extends Component{

	constructor(props,context){
		super(props,context);		
	}


	handleClick(event){
		console.log('event =',event);		
		this.props.selectPractitioner(event);
	}


	render(){
		
		return (
                <ul className="menuzord-menu">
			        {
				        this.props.practitioners.map(function(item, i) {
				          	var boundClick = this.handleClick.bind(this, item);
							var classes = classNames(
													    {
													        'active' : item.isSelected,
													    }
													);

							return (
									<li key={i} className={classes}>
										<a onClick={boundClick}>
											{item.bookingTypeName}
										</a>		                  		                	
									</li>			            
									);
				        },this)
			    	}                            			                			                	
                </ul>			
			)
	}
}

export default SelectPractitionerInClinicList;




