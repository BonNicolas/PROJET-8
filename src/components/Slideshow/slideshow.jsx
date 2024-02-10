import { useState } from 'react'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Slideshow(props) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevPicture = () => {
    setCurrentIndex(
      (currentIndex - 1 + props.pictures.length) % props.pictures.length,
    )
  }

  const nextPicture = () => {
    setCurrentIndex((currentIndex + 1) % props.pictures.length)
  }

  return (
    <div className="slideshow">
      {props.pictures.length > 0 && (
        <div
          className="slideshow__container"
          key={props.pictures[currentIndex]}
        >
          {props.pictures.length > 1 && (
            <FontAwesomeIcon
              className="slideshow__icon slideshow__icon--left"
              onClick={prevPicture}
              icon={faChevronLeft}
              size="6x"
              alt="Previous"
            />
          )}

          <img
            className="slideshow__image"
            src={props.pictures[currentIndex]}
            alt="lodging img"
          />

          {props.pictures.length > 1 && (
            <FontAwesomeIcon
              className="slideshow__icon slideshow__icon--right"
              onClick={nextPicture}
              icon={faChevronRight}
              size="6x"
              alt="Next"
            />
          )}

          {props.pictures.length > 1 && (
            <div className="slideshow__counter">
              {currentIndex + 1}/{props.pictures.length}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Slideshow
