export const FETCH_ONDUTIES_REQUEST = 'FETCH_ONDUTIES_REQUEST';
export const FETCH_ONDUTIES_SUCCESS = 'FETCH_ONDUTIES_SUCCESS';
export const FETCH_ONDUTIES_FAILURE = 'FETCH_ONDUTIES_FAILURE';
export const fetchOndutiesRequest = () => ({
  type: FETCH_ONDUTIES_REQUEST
});

export const fetchOndutiesSuccess = (onduties) => ({
  type: FETCH_ONDUTIES_SUCCESS,
  payload: onduties
});
export const fetchOndutiesFailure = (error) => ({
  type: FETCH_ONDUTIES_FAILURE,
  payload: error
});