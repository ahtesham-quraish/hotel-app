import ACTIONS from './actionTypes';

const initialChatState = {
  hotelList: [],
};

export default function(state = initialChatState, action) {
  const newState = { ...state };
  switch (action.type) {
    case ACTIONS.FETCH_HOTEL_SUCCESS:
      newState.hotelList  = action.response.hotels;
      return newState;
    default:
      return state;
  }
}
