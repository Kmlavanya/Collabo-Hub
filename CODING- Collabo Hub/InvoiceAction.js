export const FETCH_INVOICES_REQUEST = 'FETCH_INVOICES_REQUEST';
export const FETCH_INVOICES_SUCCESS = 'FETCH_INVOICES_SUCCESS';
export const FETCH_INVOICES_FAILURE = 'FETCH_INVOICES_FAILURE';
export const fetchInvoicesRequest = () => ({
  type: FETCH_INVOICES_REQUEST
});
export const fetchInvoicesSuccess = (invoices) => ({
  type: FETCH_INVOICES_SUCCESS,
  payload: invoices
});
export const fetchInvoicesFailure = (error) => ({
  type: FETCH_INVOICES_FAILURE,
  payload: error
});