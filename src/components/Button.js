import React from 'react';

function Button(props) {
  return (
    <>
      <button
        // id={'btn-' + Date.now()}
        type='submit'
        className={`btn ${props.class}`}
        style={{backgroundColor: props.BgColor}}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </>
  );
}

export default Button;
