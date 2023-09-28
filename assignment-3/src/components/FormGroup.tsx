const FormGroup = (props) => {
  return (
    <div className="form-group">
      <p>{props.title}</p>
      <br />
      {props.children}
    </div>
  )
}

export default FormGroup
