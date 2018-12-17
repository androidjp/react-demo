import ActionTypes from '../ActionTypes';

const initialState = {
  todoList: []
};

export function TodoReducer (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      state.todoList.push(action.data);
      return state;
    default:
      return state;
  }
}