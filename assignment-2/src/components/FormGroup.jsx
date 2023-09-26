const FormGroup = (props) => {
  return (
    <>
      <div className="form-group">
        <label>{props.title}</label>
        <br />
        {props.children}
      </div>
    </>
  );
};

export default FormGroup;
