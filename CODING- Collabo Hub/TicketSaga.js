import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FETCH_TICKETS_REQUEST,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
} from './ticketAction'
import { fetchTicketsApi } from './ticketApi';

function* fetchTicketsSaga() {
  try {
    const response = yield call(fetchTicketsApi);
    yield put({ type: FETCH_TICKETS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_TICKETS_FAILURE, payload: error.message });
  }
}

// Define sagas for other CRUD operations similarly

export default function* ticketSaga() {
  yield takeLatest(FETCH_TICKETS_REQUEST, fetchTicketsSaga);
  // Add other watchers for different actions
}