import { renderComponent , expect } from '../test_helper';
import App from '../../src/containers/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('calls loadPractitionerFromServer action',()=>{
  	//expect(component.props.loadPractitionerFromServer)
  });

});
