import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard.jsx";
import projImg1 from "../assets/img/ecommerce.jpg";
import projImg2 from "../assets/img/tik-tak.png";
import projImg3 from "../assets/img/food.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Tic-Tac-Toe",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Food Order App",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I’ve built scalable apps using React.js, Node.js, and
                    PostgreSQL, including a Quiz App, Travel Tracker, and
                    Project Management App, focusing on responsive UI, smooth
                    performance, and real-world usability.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
}
