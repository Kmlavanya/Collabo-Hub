import {
  FETCH_ONDUTIES_REQUEST,
  FETCH_ONDUTIES_SUCCESS,
  FETCH_ONDUTIES_FAILURE,
  // Import other action types here
} from './ondutyActions';
const initialState = {
  onduties: [],
  loading: false,
  error: null
};
const ondutyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ONDUTIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_ONDUTIES_SUCCESS:
      return {
        ...state,
        loading: false,
        onduties: action.payload,
        error: null
      };
    case FETCH_ONDUTIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
 default:
      return state;
  }
};
export default ondutyReducer;
