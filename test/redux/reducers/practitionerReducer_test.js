import {expect,assert} from '../../test_helper';
import {LOAD_PRACTITIONER_FROM_SERVER,SELECT_PRACTITIONER,LOAD_CLINICS_FROM_SERVER} from '../../../src/redux/actions/types';
import practitionerReducer from '../../../src/redux/reducers/practitionerReducer';

describe('practitionerReducer',()=>{
	it('handles action with unknow type',()=>{
		expect(practitionerReducer([],{})).to.be.instanceof(Array);
		expect(practitionerReducer([],{})).to.eql([]);
	});

	it('LOAD_PRACTITIONER_FROM_SERVER',()=>{
		const action = { type: LOAD_PRACTITIONER_FROM_SERVER, payload: { data: [{bookingTypeName:'GP'},{bookingTypeName:'Dentist'}]} };
		expect(practitionerReducer([],action)).to.be.instanceof(Array);
	});

});