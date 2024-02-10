import { Link } from 'react-router-dom'
import logements from '../../data/logements.json'
import Cards from '../Cards/cards'

function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery__container">
        {logements.map((props) => {
          return (
            <Link
              key={props.id}
              className="cta cta--gallery-card"
              to={`/lodging/${props.id}`}
            >
              <article className="gallery__card">
                <Cards image={props.cover} title={props.title} />
              </article>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Gallery
