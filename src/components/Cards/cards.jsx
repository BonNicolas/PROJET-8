function Cards(props) {
    return (
      <div className="card-content">
        <img src={props.image} alt={props.title} className="card-content__image" />
        <h3>{props.title}</h3>
      </div>
    );
}

export default Cards;
