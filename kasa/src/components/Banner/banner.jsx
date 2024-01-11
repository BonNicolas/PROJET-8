import image from '../../assets/home_image.jpg';
    
function Banner() {
    return (
        <div className='home-container'>
            <img className='home-container__image' src={image} alt='Home img'/>
            <div className='home-container__hover'>Chez vous, partout et ailleurs</div>
        </div>
    )
}

export default Banner