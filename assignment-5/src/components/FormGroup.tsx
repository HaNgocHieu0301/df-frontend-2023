'use client'

const FormGroup = (props) => {
  const myClassName: string = `form-group text-black`
  return (
    <div className={myClassName}>
      <p className="font-semibold inline-block mb-3">{props.title}</p>
      <br />
      {props.children}
    </div>
  )
}

export default FormGroup
