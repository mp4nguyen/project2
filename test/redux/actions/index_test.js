import {expect,assert} from '../../test_helper';
import configureMockStore from 'redux-mock-store';
import ReduxPromise from 'redux-promise';
import nock from 'nock';

import {LOAD_PRACTITIONER_FROM_SERVER,SELECT_PRACTITIONER,LOAD_CLINICS_FROM_SERVER} from '../../../src/redux/actions/types';
import {loadPractitionerFromServer,selectPractitioner} from '../../../src/redux/actions';

const middlewares = [ ReduxPromise ]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {

	afterEach(() => {
		nock.cleanAll()
	})

	describe('loadPractitionerFromServer',()=>{
		it('has the correct type',()=>{
			const action = loadPractitionerFromServer();
			expect(action.type).to.equal(LOAD_PRACTITIONER_FROM_SERVER);
		});

		it('has the correct async payload',()=>{
		    nock('https://0.0.0.0:3001')
		      .get('/api/BBookingTypes?filter[include]=Clinics')
		      .reply(200, [{bookingTypeName:'GP'},{bookingTypeName:'Dentist'}])

		    const expectedActions = 
		      { type: LOAD_PRACTITIONER_FROM_SERVER, payload: { data: [{bookingTypeName:'GP'},{bookingTypeName:'Dentist'}]} }
		    
		    const store = mockStore({ todos: [] })

		    return store.dispatch(loadPractitionerFromServer())
		      .then(() => { // return of async actions
		      	let returnValue = store.getActions()[0].payload.data;		      	
		        expect(returnValue).to.deep.equal(expectedActions.payload.data);
		      })			
		});

	});

	describe('selectPractitioner',()=>{
		it('has the correct type',()=>{
			const action = selectPractitioner();
			expect(action.type).to.equal(SELECT_PRACTITIONER);
		});

		it('has the correct practitioner',()=>{
			const expectPractitioner = {bookingTypeName:'GP'};
			const action = selectPractitioner(expectPractitioner);
			expect(action.practitioner).to.equal(expectPractitioner);
		});

	});

})

