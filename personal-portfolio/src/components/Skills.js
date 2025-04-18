import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Below are the following my skills which i have little bit knowledge  in you can say  <br></br>But i am conteniously learning these also and also i am trying to master other skills also because i want to becoma a full stack developer </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} />
                                <h5>FRONT END DEVELOPER</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} />
                                <h5>REACT</h5>
                            </div>
                            <div className="item">
                                <img src={meter3}/>
                                <h5>HTML & CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} />
                                <h5>CANVA & FIGMA</h5>
                            </div>
                            <div className="item">
                                <img src={meter2}  />
                                <h5>GITHUB & VERCEL</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
