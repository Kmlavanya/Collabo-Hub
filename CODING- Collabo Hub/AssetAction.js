export const FETCH_ASSETS_REQUEST = 'FETCH_ASSETS_REQUEST';
export const FETCH_ASSETS_SUCCESS = 'FETCH_ASSETS_SUCCESS';
export const FETCH_ASSETS_FAILURE = 'FETCH_ASSETS_FAILURE';
export const fetchAssetsRequest = () => ({
  type: FETCH_ASSETS_REQUEST
});
export const fetchAssetsSuccess = (assets) => ({
  type: FETCH_ASSETS_SUCCESS,
  payload: assets
});
export const fetchAssetsFailure = (error) => ({
  type: FETCH_ASSETS_FAILURE,
  payload: error
});