function Host(props) {
  return (
    <div className="host">
      <div className="host__name">{props.name}</div>
      <img className="host__picture" src={props.picture} alt="Host" />
    </div>
  )
}

export default Host
