/*import jsdom from 'jsdom';
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;*/

/*import _$ from 'jquery';
const $ = _$(window);*/

//const React = require("react");
var React = require('react');
var { Component } = React;
/*import React from 'react';*/
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import chai, { expect,assert } from 'chai';
import chaiJquery from 'chai-jquery';
import { Provider } from 'react-redux';
import { createStore ,applyMiddleware, compose} from 'redux';
import reducers from '../src/redux/reducers';
import ReduxPromise from 'redux-promise';
import { Router,Route, browserHistory, createMemoryHistory } from "react-router";

import {$} from './global';



// Create history object to operate with in non-browser environment
const history = createMemoryHistory("/");

//chaiJquery(chai, chai.util, $);

function renderComponent(ComponentClass, props = {}, state = {}) {

  // Todo: add middleware
  const finalCreateStore = compose(applyMiddleware(ReduxPromise))(createStore);

  const componentInstance =  TestUtils.renderIntoDocument(
    <Provider store={finalCreateStore(reducers, state)}>      
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance));
}

function renderComponentWithRoute(routes, props = {}, state = {}) {

  const finalCreateStore = compose(applyMiddleware(ReduxPromise))(createStore);

  const componentInstance =  TestUtils.renderIntoDocument(
    <Provider store={finalCreateStore(reducers, state)}>      
      <Router history={history} routes={routes}> 
      </Router>
    </Provider>
  );

  //let a = TestUtils.findRenderedDOMComponentWithTag(componentInstance, 'a');
  //console.log('componentInstance=',componentInstance.props.children.props.routes.props.children);

  return $(ReactDOM.findDOMNode(componentInstance));
}

function renderComponentWithRoute2(routes, props = {}, state = {}) {

  const finalCreateStore = compose(applyMiddleware(ReduxPromise))(createStore);

  const componentInstance =  TestUtils.renderIntoDocument(
    <Provider store={finalCreateStore(reducers, state)}>      
      <Router history={history} routes={routes}> 
      </Router>
    </Provider>
  );

  return componentInstance;
}

$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

export {renderComponent, renderComponentWithRoute,renderComponentWithRoute2, expect,assert};
