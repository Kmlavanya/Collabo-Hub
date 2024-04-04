export const FETCH_TICKETS_REQUEST = 'FETCH_TICKETS_REQUEST';
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS';
export const FETCH_TICKETS_FAILURE = 'FETCH_TICKETS_FAILURE';
export const CREATE_TICKET_REQUEST = 'CREATE_TICKET_REQUEST';
export const CREATE_TICKET_SUCCESS = 'CREATE_TICKET_SUCCESS';
export const CREATE_TICKET_FAILURE = 'CREATE_TICKET_FAILURE';
export const UPDATE_TICKET_REQUEST = 'UPDATE_TICKET_REQUEST';
export const UPDATE_TICKET_SUCCESS = 'UPDATE_TICKET_SUCCESS';
export const UPDATE_TICKET_FAILURE = 'UPDATE_TICKET_FAILURE';
export const DELETE_TICKET_REQUEST = 'DELETE_TICKET_REQUEST';
export const DELETE_TICKET_SUCCESS = 'DELETE_TICKET_SUCCESS';
export const DELETE_TICKET_FAILURE = 'DELETE_TICKET_FAILURE';
export const fetchTicketsRequest = () => ({
  type: FETCH_TICKETS_REQUEST
});
export const fetchTicketsSuccess = (tickets) => ({
  type: FETCH_TICKETS_SUCCESS,
  payload: tickets
});
export const fetchTicketsFailure = (error) => ({
  type: FETCH_TICKETS_FAILURE,
  payload: error
});