import React from 'react';

export const ColorSamples = props => {
  let style = {
    main: {
      color:'red',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-between',
      margin: '75px auto',
      width: '60%',
      zIndex: '999'
    },
    colorSwatch: {
      width: '25px',
      height: '25px',
      margin: '15px',
      borderRadius: '25px',
      listStyle: 'none'
    }
  };
  let {presets} = props;
  let colorCircles = presets.map(color => (
    <div
      style={{backgroundColor: color, height: '25px', width: '25px', borderRadius: '25px', margin: '5px 10px', border: '1px solid #666'}}
      key={color}
      onClick={() => props.onHandleChange(this, 'hex', color)}></div>
  ))
  return (
    <div style={style.main}>
      {colorCircles}
    </div>
  );
};
