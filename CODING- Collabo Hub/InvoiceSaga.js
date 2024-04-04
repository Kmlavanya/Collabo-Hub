import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FETCH_INVOICES_REQUEST,
  FETCH_INVOICES_SUCCESS,
  FETCH_INVOICES_FAILURE,
  // Import other action types here
} from './invoiceActions';
import { fetchInvoicesApi } from './invoiceApi';
function* fetchInvoicesSaga() {
  try {
    const response = yield call(fetchInvoicesApi);
    yield put({ type: FETCH_INVOICES_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_INVOICES_FAILURE, payload: error.message });
  }
}
export default function* invoiceSaga() {
  yield takeLatest(FETCH_INVOICES_REQUEST, fetchInvoicesSaga);
}