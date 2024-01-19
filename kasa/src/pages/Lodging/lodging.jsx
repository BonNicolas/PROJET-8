import { useParams, Navigate } from 'react-router-dom'
import DataFichLogement from '../../data/logements.json'
import Tag from '../../components/Tag/tag'
import Collapse from '../../components/Collapse/collapse'
import Slideshow from '../../components/Slideshow/slideshow'

function Lodging() {
  const { id } = useParams()

  const ficheLogement = DataFichLogement.find((logement) => logement.id === id)

  const tags = ficheLogement?.tags.map((tag, index) => {
    return <Tag key={index} title={tag} />
  })

  const equipements = ficheLogement?.equipments.map((equipment, index) => {
    return (
      <ul className="collapse__list" key={index}>
        <li>{equipment}</li>
      </ul>
    )
  })

  return ficheLogement ? (
    <div>
      <Slideshow pictures={ficheLogement?.pictures} />
      <section className="lodging">
        <h1 className="lodging__title">{ficheLogement?.title}</h1>
        <p className="lodging__subtitle">{ficheLogement?.location}</p>
        <div>{tags}</div>
        <div className="lodging__collapses">
          <div className="lodging__collapse">
            <Collapse
              title="Description"
              content={ficheLogement?.description}
            />
          </div>
          <div className="lodging__collapse">
            <Collapse title="Equipements" content={equipements} />
          </div>
        </div>
      </section>
    </div>
  ) : (
    <Navigate replace to="/404" />
  )
}

export default Lodging
