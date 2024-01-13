import React from "react";
import { Link } from "react-router-dom";
import logements from "../../data/logements.json";
import Card from "../../components/Cards/card";

function Gallery() {
  return (
    <section className="gallery">
      {logements.map((logement) => {
        return (
          <article className="gallery__card" key={logement.id}>
            <Link className="cta cta--gallery-card" to={`/logements/${logement.id}`}>
              <Card image={logement.cover} title={logement.title} />
            </Link>
          </article>
        );
      })}
    </section>
  );
};

export default Gallery;