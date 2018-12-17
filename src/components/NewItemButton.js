import React, {Component} from 'react';

class NewItemButton extends Component {
  render() {
    let items = this.props.items;
    let itemHtmls = items.map((listItem,  i) => {
      return <li key={i}>{listItem}</li>
    });
    return <div>
      <ul>{itemHtmls}</ul>
      <button onClick={this.props.onClick}>
        New Item
      </button>
    </div>;
  }
}

export default NewItemButton;