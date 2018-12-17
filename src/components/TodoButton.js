import React, {Component} from 'react';

class TodoButton extends Component {
  render() {
    let todoList = this.props.todoList;
    let itemHtmls = todoList.map((listItem,  i) => {
      return <li key={i}>{listItem}</li>
    });
    return <div>
      <ul>{itemHtmls}</ul>
      <button onClick={this.props.onClick}>
        添加一个Todo项目
      </button>
    </div>;
  }
}

export default TodoButton;