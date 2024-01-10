import image from '../../assets/home_image.jpg'


function Home() {
    return (
      <div className='home-container'>
        <img className='home-container__image' src={image} alt='Home img'/>
      </div>
    )
  }
  
  export default Home