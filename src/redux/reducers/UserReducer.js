import ActionTypes from '../ActionTypes';

const initialState = {
  name: '',
  password: ''
};

/// store 和 dispatcher 解耦
export function UserReducer (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_NAME:
      return {...state, name: action.data};
    case ActionTypes.CHANGE_PASSWORD:
      return {...state, password: action.data};
    default:
      return state;
  }
}

