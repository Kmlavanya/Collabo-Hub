import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FETCH_LEAVES_REQUEST,
  FETCH_LEAVES_SUCCESS,
  FETCH_LEAVES_FAILURE,
} from './leaveActions';
import { fetchLeavesApi } from './leaveApi';
function* fetchLeavesSaga() {
  try {
    const response = yield call(fetchLeavesApi);
    yield put({ type: FETCH_LEAVES_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_LEAVES_FAILURE, payload: error.message });
  }
}
export default function* leaveSaga() {
  yield takeLatest(FETCH_LEAVES_REQUEST, fetchLeavesSaga);
}