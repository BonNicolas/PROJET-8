import React from "react";
import { Link } from "react-router-dom";
import logements from "../../data/logements.json";
import Card from "../../components/Cards/card";

function Gallery() {
  return (
    <section className="gallery">
      {logements.map((logement) => {
        return (
          <Link key={logement.id} className="cta cta--gallery-card" to={`/logements/${logement.id}`}>
            <article className="gallery__card" key={logement.id}>
              <Card image={logement.cover} title={logement.title} />
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Gallery;