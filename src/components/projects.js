import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./Card";
import projImg1 from "../assets/img/react.png";
import projImg2 from "../assets/img/react.png";
import projImg3 from "../assets/img/react.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const UIprojects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
  
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div className="skill-box">

            <TrackVisibility>
              {({ isVisible }) =>
              <div >
                <h2 className={isVisible ? "animate__animated animate__tada": ""}>Meine Projekte</h2>
                <p>Bei folgenden Projekten hatte ich entweder meine Finger mit im Spiel oder habe diese alleine umgesetzt:</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">UI/UX Kram</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Backend</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Hardware</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          UIprojects.map((project, index) => {
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
                        <p>Hier kommen in Zukunft die Projekte hin die ich im Backend umgesetzt habe :)</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Hier kommen in Zukunft die Projekte hin die ich Hardwaretechnisch umgesetzt habe :)</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
