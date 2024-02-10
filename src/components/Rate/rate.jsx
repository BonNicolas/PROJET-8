import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Rate(props) {
  const rating = [1, 2, 3, 4, 5]

  return (
    <div>
      {rating.map((rate) => (
        <FontAwesomeIcon
          key={rate.toString()}
          icon={faStar}
          className={props.score >= rate ? 'rate--full' : 'rate--empty'}
          size="xl"
        />
      ))}
    </div>
  )
}

export default Rate
