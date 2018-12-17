import ActionTypes from './ActionTypes';

function changeName (name) {
  return {
    type: ActionTypes.CHANGE_NAME,
    data: name,
  };
}

function changePassword (password) {
  return {
    type: ActionTypes.CHANGE_PASSWORD,
    data: password,
  };
}

function addTodo(todo) {
  return {
    type: ActionTypes.ADD_TODO,
    data: todo
  }
}

export default {
  changeName,
  changePassword,
  addTodo
};

