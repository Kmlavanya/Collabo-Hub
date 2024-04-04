export const FETCH_LEAVES_REQUEST = 'FETCH_LEAVES_REQUEST';
export const FETCH_LEAVES_SUCCESS = 'FETCH_LEAVES_SUCCESS';
export const FETCH_LEAVES_FAILURE = 'FETCH_LEAVES_FAILURE';
export const fetchLeavesRequest = () => ({
  type: FETCH_LEAVES_REQUEST
});
export const fetchLeavesSuccess = (leaves) => ({
  type: FETCH_LEAVES_SUCCESS,
  payload: leaves
});
export const fetchLeavesFailure = (error) => ({
  type: FETCH_LEAVES_FAILURE,
  payload: error
});