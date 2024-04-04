import {
  FETCH_ASSETS_REQUEST,
  FETCH_ASSETS_SUCCESS,
  FETCH_ASSETS_FAILURE,
} from './assetActions';
const initialState = {
  assets: [],
  loading: false,
  error: null
};

const assetReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ASSETS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_ASSETS_SUCCESS:
      return {
        ...state,
        loading: false,
        assets: action.payload,
        error: null
      };
    case FETCH_ASSETS_FAILURE:
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
export default assetReducer;