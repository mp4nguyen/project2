import { renderComponent,renderComponentWithRoute , expect } from '../test_helper';
import ClinicItem from '../../src/components/ClinicItem';

describe('ClinicItem' , () => {
  let component;
  let props = {};
  beforeEach(() => {    
    props = {
      clinic : {
                "clinicId": 1,
                "clinicName": "Clinic 123",
                "isenable": 1,
                "companyId": 1,
                "isbookable": 1,
                "istelehealth": 1,
                "iscalendar": 0,
                "description": "",
                "address": "14 Song Da St.",
                "suburbDistrict": "Tan Binh",
                "ward": "1",
                "postcode": "",
                "stateProvince": "Ho Chi Minh",
                "country": "Vietnam",
                "createdBy": null,
                "creationDate": null,
                "lastUpdatedBy": null,
                "lastUpdateDate": null,
                "latitude": null,
                "longitude": null
                }
    }  

    component = renderComponent(ClinicItem,props);

  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('shows a class clinic-item',() => {    
  	expect(component).to.have.class('clinic-item');
  });

  it('shows correct clinic name : "Clinic 123" on page',() => {    
    expect(component.find('#clinicName')).to.have.html(props.clinic.clinicName);
  });

  it('shows correct address on page',() => {    
    expect(component.find('#address')).to.have.html(props.clinic.address + ' ' + props.clinic.ward + ' ' + props.clinic.suburbDistrict + ' ' + props.clinic.stateProvince);
  });

  it('shows link to "Show on map" on page',() => {    
    expect(component.find('.fa-map-marker ')).to.have.html(' Show on map');
  });

});
