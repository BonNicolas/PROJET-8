  function Banner(props) {
    return (
        <div className='home-container'>
            <img className='home-container__image' src={props.image} alt='Banner'/>
            <div className='home-container__hover'>{props.title}</div>
        </div>
    )
}

export default Banner