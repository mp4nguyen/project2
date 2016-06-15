import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute} from 'react-router';
import TestUtils from 'react-addons-test-utils';

import { renderComponent,renderComponentWithRoute , expect } from '../test_helper';
import App from '../../src/containers/app';
import SearchBooking from '../../src/containers/SearchBooking';
import ClinicList from '../../src/containers/ClinicList';

describe('SearchBooking without route' , () => {
  let component;
  
/*  const routes =  (<Route path="/" component={App}>  
    <IndexRoute component={SearchBooking}/>
  </Route>);
*/
  beforeEach(() => {
    component = renderComponent(SearchBooking,{},{practitioners:[{'bookingTypeName':'GP',isSelected:true},{'bookingTypeName':'Dentist',isSelected:false}],currentPractitioner:{'bookingTypeName':'GP',isSelected:true}});
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('shows a searchbooking',() => {
  	expect(component.find('#home_appointment_form')).to.exist;
  });

  it('has a SelectPractitioner component',() => {
    expect(component.find('.select-practitioner')).to.exist;
  });

  it('has 2 search practitioners button component',() => {    
    expect(component.find('button[type="button"]').length).to.equal(2);
  });

  it('has a search submit button component',() => {
    expect(component.find('button[type="submit"]')).to.exist;
  });


});


describe('SearchBooking with route' , () => {
  let component;
  
  const routes =  (
    <Route path="/" component={App}>  
      <IndexRoute component={SearchBooking}/>
      <Route path="/Clinics" component={ClinicList}/>
    </Route>
    );

  beforeEach(() => {

    component = renderComponentWithRoute(routes,{},{practitioners:[{'bookingTypeName':'GP',isSelected:true},{'bookingTypeName':'Dentist',isSelected:false}],currentPractitioner:{'bookingTypeName':'GP',isSelected:true,Clinics:[{clinicId:1,clinicName:'clinic 1',latitude:30,longitude:30},{clinicId:2,clinicName:'clinic 2',latitude:30,longitude:30}]}});
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('when submitted, go to clinic list route',() => {

    expect(component.find('.clinic-list')).to.not.exist;
    expect(component.find('#home_appointment_form')).to.exist;
    component.find('form').simulate('submit');
    expect(component.find('.clinic-list')).to.exist;
    expect(component.find('#home_appointment_form')).to.not.exist;

  });

});