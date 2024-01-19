const Alert = ({color, msg}) => {
  return (
    <div>
      <p className={color}>{msg} </p>
    </div>
  )
}

export default Alert
