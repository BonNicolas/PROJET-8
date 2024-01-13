import React from 'react';


function Card({image, title}) {
    return (
      <div className="card-content">
        <img src={image} alt={title} className="card-content__image" />
        <div></div>
        <h2>{title}</h2>
      </div>
    );
}

export default Card;
