const Button = (props) => {
  const multiClass: string = `btn ${props.className}`
  return (
    <button className={multiClass} onClick={props.handler}>
      {props.title}
    </button>
  )
}

export default Button
