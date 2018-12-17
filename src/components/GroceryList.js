import React, {Component} from 'react';

class GroceryList extends Component {
  handleClick(i) {
    alert('You clicked: ' + this.props.items[i]);
  }

  render() {
    return (
      <div>
        {this.props.items.map((item, i) => {
          return (
            <div onClick={this.handleClick.bind(this, i)} key={i}> {item} </div>
          );
        })}
      </div>
    );
  }
}

export default GroceryList;