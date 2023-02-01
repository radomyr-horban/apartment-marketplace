import React, {useState} from 'react';

function Button(props) {
  // TODO change button color and text via props

  const [btnText, setBtnText] = useState('Button');
  // const [btnColor, setBtnColor] = useState('black');

  return (
    <>
      <button
        type='submit'
        className='btn'
        style={{backgroundColor: props.BgColor}}
      >
        {props.text}
      </button>
    </>
  );
}

export default Button;
