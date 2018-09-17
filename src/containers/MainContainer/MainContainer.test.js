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
import MainContainer, {MainContainer as PureMainContainer} from './MainContainer';
import ACTIONS from './actionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import fetchHotelListAction from './actions/fetchHotelListAction';
import expect from 'expect';
import fetchHotelList from '../../../__mocks__/fetchHotels';
const middlewares = [thunk];
import moxios from 'moxios';
const mockStore = configureMockStore(middlewares);

const Setup = (status) => {
  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status: status,
      response: [{ name: 'Media One Hotel' }],
    });
  });
};
const componentSetup = (hotelList) =>{
  return shallow(
    <MainContainer store={configureStore()} hotelList={hotelList.hotels[0]} />,
  );
  }
it('renders without crashing', async () => {
  const hotelList = await fetchHotelList();
  const wrapper = componentSetup(hotelList);
  expect(wrapper).toMatchSnapshot();
});
describe(' FETCH_HOTEL_SUCCESS actions', () => {
  beforeEach(function() {
    moxios.install();
  });
  it('creates GET_HOTEL_SUCCESS after successfuly fetching hotles', () => {
    Setup(200);
    const expectedActions = [
      { type: ACTIONS.FETCH_HOTEL_REQUEST },
      {
        type: ACTIONS.FETCH_HOTEL_SUCCESS,
        response: [{ name: 'Media One Hotel' }],
      },
    ];
    const store = mockStore({ hotels: [] });
    return store.dispatch(fetchHotelListAction(URL)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('fetchHotels actions', () => {
  beforeEach(function() {
    moxios.install();
  });
  it('creates GET_HOTEL_FAILED after successfuly fetching hotels', () => {
    Setup(400);
    const expectedActions = [
      { type: ACTIONS.FETCH_HOTEL_REQUEST },
      {
        type: ACTIONS.FETCH_HOTEL_FAILED,
        response: 'error',
      },
    ];
    const store = mockStore({ hotels: [] });
    return store.dispatch(fetchHotelListAction('/wrongUrl')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should handle FETCH_HOTELS_SUCCESS', () => {
    expect(
      reducer([], {
        type: ACTIONS.FETCH_HOTEL_SUCCESS,
        response: { hotels: [{ name: 'Media One Hotel' }] },
      }),
    ).toEqual({
      hotelList: [{ name: 'Media One Hotel' }],
    });
  });
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      hotelList: [],
    });
  });
  it('should return the initial state 1', () => {
    const fetchHotelList = jest.fn();
    const props = {fetchHotelList}
    const wrapper = mount(<PureMainContainer hotelList={[]} fetchHotelList={fetchHotelList}/>) 
    expect(fetchHotelList.mock.calls.length).toBe(1);
  });
});
