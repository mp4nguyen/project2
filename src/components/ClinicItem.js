import React,{Component} from 'react';


class ClinicItem extends Component{

	handleComplete(){
		console.log('complete');		
	}

	handleDelete(){
		console.log('delete');	
	}

	render(){

    const address = this.props.clinic.address + ' ' + this.props.clinic.ward+ ' ' + this.props.clinic.suburbDistrict+ ' ' + this.props.clinic.stateProvince;
		return (							
			<div className="services-tab border-10px bg-white-light clinic-item">
    		<div className="tab-content">
			    <div className="tab-pane fade in active" id="tab11">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="thumb">
                        <img className="img-fullwidth" src="images/services/1.jpg" alt=""/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="service-content">                        
                        <h1 id="clinicName" className="title">{this.props.clinic.clinicName}</h1>
                        <h3 id="address" className="sub-title mb-0 mt-30">{address}</h3>  
                        <p>test test</p>
                        <div className="row mt-30 mb-20">
                         <div className="col-xs-6">
                          <ul className="mt-10">
                            <li className="mb-10"><i className="fa fa-angle-double-right text-theme-colored font-15"></i>&emsp;Qualified Doctors</li>
                            <li className="mb-10"><i className="fa fa-angle-double-right text-theme-colored font-15"></i>&emsp;24×7 Emergency Services</li>
                            <li className="mb-10"><i className="fa fa-angle-double-right text-theme-colored font-15"></i>&emsp;General Medical</li>
                          </ul>
                         </div>
                         <div className="col-xs-6">
                          <ul className="mt-10">
                            <li className="mb-10"><i className="fa fa-angle-double-right text-theme-colored font-15"></i>&emsp;Feel like Home Services</li>
                            <li className="mb-10"><i className="fa fa-angle-double-right text-theme-colored font-15"></i>&emsp;Outdoor Checkup</li>
                            <li className="mb-10"><i className="fa fa-angle-double-right text-theme-colored font-15"></i>&emsp;Easy and Affordable Billing</li>
                          </ul>
                         </div>
                        </div>
                        <a className="btn btn-lg btn-dark btn-theme-colored" href="#">View Details</a>
                      </div>
                    </div>
                  </div>
                </div>
        	</div>
        	</div>
				)
	}
}

export default ClinicItem;