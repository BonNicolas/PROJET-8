import { useParams, Navigate } from 'react-router-dom'
import DataInfoLodging from '../../data/logements.json'
import Tag from '../../components/Tag/tag'
import Rate from '../../components/Rate/rate'
import Host from '../../components/Host/host'
import Collapse from '../../components/Collapse/collapse'
import Slideshow from '../../components/Slideshow/slideshow'

function Lodging() {
  const { id } = useParams()

  const infoLodging = DataInfoLodging.find((lodging) => lodging.id === id)

  const tags = infoLodging?.tags.map((tag, index) => {
    return <Tag key={index} title={tag} />
  })

  const equipements = infoLodging?.equipments.map((equipment, index) => {
    return (
      <ul className="collapse__list" key={index}>
        <li>{equipment}</li>
      </ul>
    )
  })

  return infoLodging ? (
    <div>
      <Slideshow pictures={infoLodging?.pictures} />
      <section className="lodging">
        <div className="lodging__container">
          <div>
            <div>
              <h1 className="lodging__title">{infoLodging?.title}</h1>
              <p className="lodging__subtitle">{infoLodging?.location}</p>
            </div>
            <div className="tag__container">{tags}</div>
          </div>
          <div className="lodging__host-rate">
            <Host
              name={infoLodging?.host.name}
              picture={infoLodging?.host.picture}
            />
            <Rate score={infoLodging.rating} />
          </div>
        </div>
        <div className="lodging__collapses">
          <div className="lodging__collapse">
            <Collapse title="Description" content={infoLodging?.description} />
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
