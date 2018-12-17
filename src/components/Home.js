import React, {Component} from 'react';
import LikeButton from './LikeButton.js';
import GroceryList from './GroceryList.js';

import NewItemButton from './NewItemButton.js';
import store from '../redux/Store';
// Flux
import ButtonActions from '../flux/actions/ButtonActions';
import ListStore from '../flux/stores/ListStore';
import TodoButton from './TodoButton';
// Redux
import action from '../redux/Action';

//ant design
import {LocaleProvider, DatePicker, message} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');


class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      // FLux
      items: ListStore.getAll(),
      // Redux
      todoList: store.getState().TodoReducer.todoList,
      date: '',
    };
  }

  componentDidMount () {
    //Flux
    ListStore.addChangeListener(this._onChange.bind(this));
    //Redux
    this.unsubscribe = store.subscribe(this.onAddTodoCallback.bind(this));
  }

  componentWillUnmount () {
    //Flux
    ListStore.removeChangeListener(this._onChange.bind(this));
    //Redux
    this.unsubscribe();
  }

  _onChange () {
    this.setState({
      items: ListStore.getAll(),
    });
  }

  onAddTodoCallback () {
    this.setState({
      todoList: store.getState().TodoReducer.todoList,
    });
  }

  createNewItem (event) {
    ButtonActions.addNewItem('new item');
  }

  addTodo (event) {
    store.dispatch(action.addTodo('新Todo item'));
  }

  handleLocalePickerChange (date) {
    message.info('您的选择是：' + (date ? date.toString() : ''));
    this.setState({date});
  }

  render () {
    return (
      <div>
        <h2>Home</h2>
        <LikeButton/>
        <GroceryList items={['Apple', 'Banana', 'Cranberry']}/>
        <NewItemButton
          items={this.state.items}
          onClick={this.createNewItem}
        />
        <TodoButton
          todoList={this.state.todoList}
          onClick={this.addTodo}
        />
        <LocaleProvider locale={zhCN}>
          <div style={{width: 400, margin: '100px auto'}}>
            <DatePicker onChange={value => this.handleLocalePickerChange(value)}/>
            <div style={{marginTop: 20}}>当前日期：{this.state.date && this.state.date.toString()}</div>
          </div>
        </LocaleProvider>
      </div>
    );
  }
}

export default Home;