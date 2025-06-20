import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

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
                        <p>Below are some of the skills I’m currently learning. While I have a basic understanding of them, <br></br>I am continuously working to improve and master more technologies as I strive to become a full-stack developer. </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Front End Developer" />
                                <h5>FRONT END DEVELOPER</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="React" />
                                <h5>REACT</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="HTML & CSS" />
                                <h5>HTML & CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Canva & Figma" />
                                <h5>CANVA & FIGMA</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="GitHub & Vercel" />
                                <h5>GITHUB & VERCEL</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
