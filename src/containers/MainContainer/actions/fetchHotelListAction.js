import ACTIONS from '../actionTypes';
import axios from 'axios';
export function fetchHotelListSuccess(response) {
  return (dispatch) => {
    dispatch({ response, type: ACTIONS.FETCH_HOTEL_SUCCESS });
  };
}
const fetchHotelListFailed = (response) => {
  return (dispatch) => {
    dispatch({ response, type: ACTIONS.FETCH_HOTEL_FAILED });
  };
};
const fetchHotelListRequest = () => {
  return {
    type: ACTIONS.FETCH_HOTEL_REQUEST,
  };
};

const fetchHotelListAction = (URL) => {
  return (dispatch) => {
    dispatch(fetchHotelListRequest());
    return axios(URL)
      .then((response) => dispatch(fetchHotelListSuccess(response.data)))
      .catch((ex) => dispatch(fetchHotelListFailed('error')));
  };
};

export default fetchHotelListAction;
