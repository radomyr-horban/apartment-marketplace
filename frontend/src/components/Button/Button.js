import './Button.css'

function Button(props) {
  return (
    <>
      <button
        type='submit'
        className={`btn ${props.className}`}
        style={{ backgroundColor: props.BgColor }}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </>
  )
}

export default Button
