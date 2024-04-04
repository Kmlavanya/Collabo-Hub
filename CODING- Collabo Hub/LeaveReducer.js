import {
  FETCH_LEAVES_REQUEST,
  FETCH_LEAVES_SUCCESS,
  FETCH_LEAVES_FAILURE,
} from './leaveActions';
const initialState = {
  leaves: [],
  loading: false,
  error: null
};
const leaveReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LEAVES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_LEAVES_SUCCESS:
      return {
        ...state,
        loading: false,
        leaves: action.payload,
        error: null
      };
    case FETCH_LEAVES_FAILURE:
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
export default leaveReducer;