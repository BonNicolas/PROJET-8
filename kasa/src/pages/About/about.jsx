import Banner from "../../components/Banner/banner";
import BannerAboutImage from "../../assets/banner_about_image.jpg";
import Collapse from "../../components/Collapse/collapse";
import collapses from "../../data/collapses.json";


function About() {
  return (
    <div>
      <Banner image={BannerAboutImage}/>
      <section className="collapse">
        {collapses.map((collapse) => {
          return (
            <Collapse key={collapse.id} title={collapse.title} content={collapse.content}/>
          );
        })}
      </section>
    </div>
  )
}

export default About