import { renderComponent,renderComponentWithRoute , expect } from '../test_helper';
import SelectPractitioner from '../../src/components/SelectPractitioner';

describe('SelectPractitioner' , () => {
  let component;
  
  beforeEach(() => {
    component = renderComponent(SelectPractitioner,{practitioners:[{'bookingTypeName':'GP',isSelected:true},{'bookingTypeName':'Dentist',isSelected:false}],currentPractitioner:{'bookingTypeName':'GP',isSelected:true,Clinics:[{clinicName:'clinic 1'},{clinicName:'clinic 2'}]}});
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('shows a class clinic-item',() => {    
  	expect(component).to.have.class('select-practitioner');
  });

  it('has 2 search practitioners button component',() => {    
    expect(component.find('button[type="button"]').length).to.equal(2);
  });
  
});
