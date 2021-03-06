import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'babel-polyfill';
import React from 'react';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import mountReactAppAt from './support/mountReactAppAt';
import { push, syncHistoryWithStore } from 'react-router-redux';

Object.assign(global, {
  jasmineEnzyme,
  mount,
  mountReactAppAt,
  push,
  React
})

beforeEach(() => {
  jasmineEnzyme();
})

afterEach(() => {
  if(global.page) { global.page.unmount(); }
  if(global.store) { global.store.dispatch(push('/')); }
});

Enzyme.configure({ adapter: new Adapter() });

// function to require all modules for a given context
let requireAll = requireContext => {
  requireContext.keys().forEach(requireContext);
};

// require all js files except testHelper.js in the test folder
requireAll(require.context('./', true, /^((?!testHelper).)*\.jsx?$/));

// require all js files except main.js in the src folder
requireAll(require.context('../src/', true, /^((?!main).)*\.jsx?$/));

// output to the browser's console when the tests run
console.info(`TESTS RAN AT ${new Date().toLocaleTimeString()}`);
