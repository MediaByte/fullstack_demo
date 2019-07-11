import { 
    REQUEST_DATA_PENDING,
    REQUEST_DATA_SUCCESS,
    REQUEST_DATA_FAILED
} from './constants';

const users = {
    data: [
      {
        id: 0,
        email: "", 
        first_name: "",
        last_name: "",
        avatar: ""
      }
    ],
    dataReady: false,
  };

export const requestUsers = (state=users, action={}) => {
    switch (action.type) {
      case REQUEST_DATA_PENDING:
        return Object.assign({}, state, { dataReady: false })
      case REQUEST_DATA_SUCCESS:
        return Object.assign({}, state, { data: action.payload, dataReady: true })
      case REQUEST_DATA_FAILED:
        return Object.assign({}, state, {error: action.payload})
      default:
        return state
    };
  };
