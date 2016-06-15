import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute} from 'react-router';
import { renderComponent,renderComponentWithRoute , expect } from '../test_helper';
import App from '../../src/containers/app';
import ClinicList from '../../src/containers/ClinicList';

describe('ClinicList' , () => {
  let component;
  
  beforeEach(() => {
    component = renderComponent(ClinicList,{},{practitioners:[{'bookingTypeName':'GP',isSelected:true},{'bookingTypeName':'Dentist',isSelected:false}],currentPractitioner:{'bookingTypeName':'GP',isSelected:true,Clinics:[{clinicId:1,clinicName:'clinic 1',latitude:30,longitude:30},{clinicId:2,clinicName:'clinic 2',latitude:30,longitude:30}]}});
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('shows a class clinic-list',() => {    
  	expect(component).to.have.class('clinic-list');
  });

  it('has a ClinicItem component',() => {
    expect(component.find('.clinic-item')).to.exist;
  });

  it('has 2 ClinicItem component',() => {
    expect(component.find('.clinic-item').length).to.equal(2);
  });

  it('has google map to display all current clinics',() => {
    expect(component.find('.all-clinics-on-map')).to.exist;
  });
});
