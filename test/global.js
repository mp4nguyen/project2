import jsdom from 'jsdom';
import chai, { expect,assert } from 'chai';
import chaiJquery from 'chai-jquery';
import _$ from 'jquery';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
const $ = _$(window);

chaiJquery(chai, chai.util, $);

export { $ };