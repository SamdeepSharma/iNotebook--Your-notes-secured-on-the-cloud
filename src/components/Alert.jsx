/* eslint-disable react/prop-types */
const Alert = (props) => {
  return (
    <div>
      <div className="alert alert-info" role="alert">
  {props.message}
</div>
    </div>
  )
}

export default Alert
