import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FETCH_ONDUTIES_REQUEST,
  FETCH_ONDUTIES_SUCCESS,
  FETCH_ONDUTIES_FAILURE,
} from './ondutyActions';
import { fetchOndutiesApi } from './ondutyApi';
function* fetchOndutiesSaga() {
  try {
    const response = yield call(fetchOndutiesApi);
    yield put({ type: FETCH_ONDUTIES_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_ONDUTIES_FAILURE, payload: error.message });
  }
}
export default function* ondutySaga() {
  yield takeLatest(FETCH_ONDUTIES_REQUEST, fetchOndutiesSaga);
}