import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/my3.png";
import projImg2 from "../assets/img/my5.png";
import projImg3 from "../assets/img/my4.png";
import projImg4 from "../assets/img/my2.png";
import projImg5 from "../assets/img/my6.png";
import projImg6 from "../assets/img/my7.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "MY FIRST HTML BASED WEBSITE",
      description: "it is the website based on new and lastest product release can be reach fastest to the public ",
      imgUrl: projImg1,
    },
    {
      title:"RESTUARENT MANAGEMENT SYSTEM",
      description: "it is the website  to reduce wastage of restuarent by analysing crowd comes in restuarent daily and also analyse the quantity of food to order for the storage ",
      imgUrl: projImg2,
    },
    {
      title: "TRUTH SEEKER PORTAL",
      description: "it is the website for telling the news is fake or real ",
      imgUrl: projImg3,
    },
    {
      title: "LUNCH BOX ORDERING SYSTEM AT DOOR STEP",
      description: "it is the food ordering system from where you can customize your lunch and place the order to your door step",
      imgUrl: projImg4,
    },
    {
      title: "LIBERARY MNAGEMENT SYSTEM ",
      description: "it is the liberary management system ,it is used to manage the books and record data og books and also the students who are taking the books from the liberary",
      imgUrl: projImg6,
    },
    {
      title: "SOFT SKILL TRAINER",
      description: "it is the website which help you to train in your soft skill during interview and other crowd speaking skills to build confidence in yourself  ",
      imgUrl: projImg5,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Below are my till now projects in which some of them i have made entire by my self and some of them i have contributed in team to completed it  .
                  you and see the main page of the project and drag on it to read it in bried   </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Tab 4</Nav.Link>    
                  </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p> Apart From my projects I have many Certificate of hackathons which i went in previous time like - SAVEETHA HACKATHON ,IDEATHON2025 , NEXATHON25 VIT AND 
                        MIT HACKATHON 2025  </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p> Apart from projects and hackathon certificate i have many course course which i have completed recently such as - SCALER,UDEMY,INFORSIS cerfificate i have you can go to my linkedin and see thatcertificate  </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <p> Apart from my projects and hackathon certificate i have done a software intership in the company DLD SOFTWARE  situated in chennai . You can go to my linkedin account to see my certifuicate of that  </p>  
                      </Tab.Pane>     
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background design" />
    </section>
  )
}
