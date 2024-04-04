import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FETCH_ASSETS_REQUEST,
  FETCH_ASSETS_SUCCESS,
  FETCH_ASSETS_FAILURE,
} from './assetActions';
import { fetchAssetsApi } from './assetApi';
function* fetchAssetsSaga() {
  try {
    const response = yield call(fetchAssetsApi);
    yield put({ type: FETCH_ASSETS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_ASSETS_FAILURE, payload: error.message });
  }
}
export default function* assetSaga() {
  yield takeLatest(FETCH_ASSETS_REQUEST, fetchAssetsSaga);
}