import React,{Component,PropTypes} from 'react';
import ClinicCalendars from './ClinicCalendars';

var classNames = require( 'classnames' ); 

class ClinicItem extends Component{
  
  static propTypes = {
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
    clinic: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
  };

  _onMouseEnter(){
    //this.props.onMouseEnter(this.props.index + 1,this.props.clinic);
  }

  _onMouseLeave(){
    //this.props.onMouseLeave(this.props.index + 1,this.props.clinic);
  }

	render(){

    const address = this.props.clinic.address + ' ' + this.props.clinic.ward+ ' ' + this.props.clinic.suburbDistrict+ ' ' + this.props.clinic.stateProvince;
    var calendars = this.props.clinic.currentCalendars;

/*    if(this.props.clinic.Rosters[0]){
      calendars = this.props.clinic.Rosters[0].Calendars;  
    }*/
    //'services-tab': true,
    var classes = classNames(
                {
                    
                    'bg-white-light' : !this.props.clinic.isMouseEnter,
                    'bg-success': this.props.clinic.isMouseEnter,
                    'clinic-item': true
                }
            );

		return (							
			<div className={classes} 
        onMouseEnter={this._onMouseEnter.bind(this)}
        onMouseLeave={this._onMouseLeave.bind(this)}
      >
    		<div className="tab-content">
			    <div className="tab-pane fade in active" id="tab11">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="thumb">
                        <img className="img-fullwidth" src="images/services/1.jpg" alt=""/>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="service-content">                        
                        <h1 id="clinicName" className="title">{this.props.clinic.clinicName}</h1>
                        <div className="row">
                          <div className="col-md-9">
                            <h3 id="address" className="mb-0 mt-30">{address}</h3>    
                          </div>
                          <div className="col-md-3">                          
                            <a className="pull-right mb-0 mt-30">
                              <i className="fa fa-map-marker" aria-hidden="true"> Show on map</i> 
                            </a> 
                          </div>                                                  
                        </div>                        
                        <p>test test</p>
                        <div className="row mt-30 mb-20">
                         <div className="col-xs-6">

                         </div>
                         <div className="col-xs-6">

                         </div>
                        </div>
                        
                        
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <ClinicCalendars calendars={calendars}/>
                  </div>
                </div>
        	</div>
        	</div>
				)
	}
}

export default ClinicItem;