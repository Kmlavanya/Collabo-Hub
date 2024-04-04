import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FETCH_CUSTOMERS_REQUEST,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE,
  // Import other action types here
} from './customerActions';
import { fetchCustomersApi } from './customerApi';

function* fetchCustomersSaga() {
  try {
    const response = yield call(fetchCustomersApi);
    yield put({ type: FETCH_CUSTOMERS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_CUSTOMERS_FAILURE, payload: error.message });
  }
}
export default function* customerSaga() {
  yield takeLatest(FETCH_CUSTOMERS_REQUEST, fetchCustomersSaga);
}