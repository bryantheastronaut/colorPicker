import React, {Component} from 'react';
import {ColorPicker} from '../components/ColorPicker';
import COLORPRESETS from '../../COLORPRESETS';
import {validateHex} from '../functions';

class ColorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      selectedColor: '',
      color: {
        r: 91,
        g: 215,
        b: 193,
        hex: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.setColor = this.setColor.bind(this);
  }
  handleOpen() {
    this.setState({isOpen: !this.state.isOpen});
  }
  handleChange(e, id = e.target.name, val = e.target.value) {
    // let id = e.target.name;
    // let val = e.target.value;
    let newColorState = {...this.state.color};
    newColorState[id] = val;
    console.log(newColorState);
    this.setState({ color: newColorState });
  }
  setColor() {
    let {r, g, b, hex} = this.state.color;
    (validateHex(hex))
      ? this.setState({ selectedColor: hex })
      : this.setState({ selectedColor: `rgb(${r}, ${g}, ${b})`});
  }
  render() {
    let {r, g, b, hex} = this.state.color;
    let style = {
      button: {
        backgroundColor: this.state.selectedColor || '#12daaa',
        height: '50px',
        display: 'block',
        margin: '20px auto',
        width: '150px',
        borderRadius: '5px',
        color: '#fafafa'
      }
    }
    return (
      <div>
      <button
        style={style.button}
        onClick={this.handleOpen}>
          {(this.state.isOpen) ? 'Close' : 'Open'} color picker
      </button>
      {
        (this.state.isOpen)
          ? <ColorPicker
              color={this.state.color}
              onHandleChange={this.handleChange}
              onSetColor={this.setColor}
              presets={COLORPRESETS}/>
          : null
      }
      </div>
    )
  }
}

export default ColorContainer;
