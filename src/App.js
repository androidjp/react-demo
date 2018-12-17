import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import action from './redux/Action';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    todoList: state.TodoReducer.todoList
  }
}

function mapDispatchProps(dispatch) {
  return {
    addTodo: (arg) => dispatch(action.addTodo(arg))
  };
}

class App extends Component {
  render() {
    const {todoList, addTodo} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={addTodo.bind(this, '加一')}>
            这是一个用了React-Redux的按钮
          </button>
          <Home/>
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchProps)(App);
