import Banner from "../../components/Banner/banner";
import Gallery from "../../components/Gallery/gallery";
import BannerHomeImage from "../../assets/banner_home_image.jpg"



function Home() {
    return (
      <div>
        <Banner image={BannerHomeImage} title='Chez vous, partout et ailleurs'/>
        <Gallery />
      </div>
    )
  }
  
export default Home