import {
  FETCH_TICKETS_REQUEST,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
  // Import other action types here
} from './ticketActions';

const initialState = {
  tickets: [],
  loading: false,
  error: null
};

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKETS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        loading: false,
        tickets: action.payload,
        error: null
      };
    case FETCH_TICKETS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    // Add cases for other action types similarly

    default:
      return state;
  }
};
export default ticketReducer;