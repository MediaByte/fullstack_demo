import { 
  REQUEST_DATA_PENDING, 
  REQUEST_DATA_SUCCESS, 
  REQUEST_DATA_FAILED
} from './constants';

import { apiCall } from './api/api';

export const requestUsers = (api, param, cb) => (dispatch) => {
  if (typeof cb === 'function') {
    cb()
  }
  dispatch({ type: REQUEST_DATA_PENDING });
  apiCall(api, param)
    .then(data => dispatch({ type: REQUEST_DATA_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_DATA_FAILED, payload: error }));

};

