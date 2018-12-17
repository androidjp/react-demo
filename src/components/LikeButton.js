import React, {Component} from 'react';

class LikeButton extends Component {

  constructor (props) {
    super(props);
    this.state = {
      liked: false,
    };
  }

  handleClick (e) {
    this.setState({liked: !this.state.liked});
  }

  render() {
    const text = this.state.liked? 'like' : 'haven\'t liked';
    return (
      <p onClick={this.handleClick.bind(this)}>
        You {text} this. click to toggle
      </p>
    )
  }
}

LikeButton.defaultProps = {};

export default LikeButton;