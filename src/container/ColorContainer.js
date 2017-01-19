import React, {Component} from 'react';
import {ColorPicker} from '../components/ColorPicker';

class ColorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      color: {
        r: 0,
        g: 0,
        b: 0,
        hex: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleOpen() {
    this.setState({isOpen: !this.state.isOpen});
  }
  handleChange(e) {
    let id = e.target.name;
    let val = e.target.value;
    let newColorState = {...this.state.color};
    newColorState[id] = val;
    console.log(newColorState);
    this.setState({ color: newColorState });
  }
  render() {
    return (
      <ColorPicker color={this.state.color} onHandleChange={this.handleChange} />
    )
  }
}

export default ColorContainer;
