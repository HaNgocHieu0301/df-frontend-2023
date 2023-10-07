const FormGroup = (props) => {
  const myClassName: string = 'form_group text-black';
  return (
    <div className={myClassName}>
      <p>{props.title}</p>
      <br />
      {props.children}
    </div>
  );
};

export default FormGroup;
