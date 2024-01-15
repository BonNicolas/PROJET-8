import React from 'react';


function Card({image, title}) {
    return (
      <div className="card-content">
        <img src={image} alt={title} className="card-content__image" />
        <h3>{title}</h3>
      </div>
    );
}

export default Card;
