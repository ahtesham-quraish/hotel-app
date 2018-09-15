import React from 'react';
import ReactDOM from 'react-dom';
// import Enzyme, { shallow, render, mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import fetchHotelList from '../../../__mocks__/fetchHotels';
import { URL } from '../../uls';
import reducer from './MainContainerReducer';
// Enzyme.configure({ adapter: new Adapter() });
import configureStore from '../../configureStore';
//const store = configureStore();
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import MainContainer from './MainContainer';
import ACTIONS from './actionTypes';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import fetchHotelListAction from './actions/fetchHotelListAction'; 
import expect from 'expect'
const middlewares = [thunk]
import moxios from 'moxios';
const mockStore = configureMockStore(middlewares)

describe('getPosts actions', () => {
  beforeEach(function () {
    moxios.install();
  });
 it('creates GET_POSTS_SUCCESS after successfuly fetching postse', () => {
  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status: 200,
      response: [{'name': 'Media One Hotel'}],
    });
  });
    const expectedActions = [
     { type: ACTIONS.FETCH_HOTEL_REQUEST },
     { type: ACTIONS.FETCH_HOTEL_SUCCESS, 
      response : [{'name': 'Media One Hotel'}]
     }  
   ]
   const store = mockStore({ hotels: [] })
   return store.dispatch(fetchHotelListAction(URL)).then(() => {
     expect(store.getActions()).toEqual(expectedActions)
  })
})})

describe('getPosts actions', () => {
  beforeEach(function () {
    moxios.install();
  });
 it('creates GET_POSTS_SUCCESS after successfuly fetching postse', () => {
  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status: 400,
      response: [{'name': 'Media One Hotel'}],
    });
  });
    const expectedActions = [
     { type: ACTIONS.FETCH_HOTEL_REQUEST },
     { type: ACTIONS.FETCH_HOTEL_FAILED, 
      response : 'error'
     }  
   ]
   const store = mockStore({ hotels: [] })
   return store.dispatch(fetchHotelListAction('/wrongUrl')).then(() => {
    expect(store.getActions()).toEqual(expectedActions)
  })
})
it('should handle ADD_TODO', () => {
  expect(
    reducer([], {
      type: ACTIONS.FETCH_HOTEL_SUCCESS,
      response: {"hotels" :[{'name': 'Media One Hotel'}]}
    })
  ).toEqual({
    "hotelList" : [{'name': 'Media One Hotel'}] 
  })
})
it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(
    {
      "hotelList" : []
    }
  )
})
})