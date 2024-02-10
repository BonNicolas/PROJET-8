function Host(props) {
  const nameParts = props.name.split(' ')

  return (
    <div className="host">
      <div className="host__name">
        {nameParts.map((part, index) => (
          <div key={index}>{part}</div>
        ))}
      </div>
      <img className="host__picture" src={props.picture} alt="Host" />
    </div>
  )
}

export default Host
