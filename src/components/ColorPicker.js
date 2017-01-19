import React from 'react';
import {ColorSamples} from './ColorSamples';

export const ColorPicker = props => {
  let {r, g, b, hex} = props.color;
  let style = {
    main:{
      fontSize: '1.25rem',
      boxShadow: '1px 1px 2px #333',
      fontFamily: 'Helvetica, sans-serif',
      fontWeight: '100',
      backgroundColor: hex || `rgb(${r},${g},${b})`,
      borderRadius: '10px',
      height: '300px',
      width: '600px',
      margin: '50px auto',
      textAlign: 'center'
    },
    colorInput: {
      backgroundColor: '#fafafa',
      padding: '20px',
      position: 'relative',
      top: '24px',
      borderRadius: '25px',
      width: '70%',
      margin: '20px auto'
    },
    flexStyle: {
      width: '75%',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    inputBox: {
      textAlign: 'center',
      padding: '5px',
      width: '175px',
      height: '7px'
    }
  }
  return (
    <div style={style.main}>
      <div style={style.colorInput}>
        <div style={style.flexStyle}>
          Red: <input
                 style={style.inputBox}
                 type='text'
                 name='r'
                 value={r}
                 placeholder='0-255'
                 onChange={props.onHandleChange} />
        </div>
        <div style={style.flexStyle}>
          Green: <input
                   style={style.inputBox}
                   type='text'
                   name='g'
                   value={g}
                   placeholder='0-255'
                   onChange={props.onHandleChange} />
        </div>
        <div style={style.flexStyle}>
          Blue: <input
                  style={style.inputBox}
                  type='text'
                  name='b'
                  value={b}
                  placeholder='0-255'
                  onChange={props.onHandleChange} />
        </div>
        <hr />
        <div style={style.flexStyle}>
          Hex: <input
                 style={style.inputBox}
                 type='text'
                 name='hex'
                 value={hex}
                 placeholder='#123456'
                 onChange={props.onHandleChange} />
        </div>
      </div>
      <ColorSamples onHandleChange={props.onHandleChange} presets={props.presets}/>
      <button onClick={() => props.onSetColor()}> Set color!</button>
    </div>
  );
};
