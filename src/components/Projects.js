import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";
import "./Projects.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  // Changed the variable name to a more descriptive name 'projectData'
  const projectData = [
    {
      title: "Celestial-Typer",
      description: "Full Stack Application using MERN",
      imgUrl: projImg1,
      projectlink: "https://celestial-typer.web.app/",
    },
    {
      title: "Recipe-Project",
      description: "Third party API displaying recipes to make.",
      imgUrl: projImg2,
      projectlink: "https://recipe-project-10da8.web.app/home",
    },
    {
      title: "Card-Matching-Game",
      description:
        "Demonstrate how to build a card flipping game using basic JavaScript DOM elements",
      imgUrl: projImg3,
      projectlink: "https://retromatching.surge.sh/",
    },
  ];

  // Extracted renderProjects function to make the code more modular and readable
  const renderProjects = () => {
    return (
      <Container>
        <Row>
          {projectData.map((project, index) => (
            <ProjectCards key={index} {...project} />
          ))}
        </Row>
      </Container>
    );
  };

  return (
    <section className="projects" id="project">
      <Container fluid>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Project</h2>
                  <p>These projects were made with love and care.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {/* Updated Nav.Link text to be more descriptive */}
                      <Nav.Item>
                        <Nav.Link eventKey="first">All Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">{renderProjects()}</Tab.Pane>
                      {/* Updated Tab.Pane content */}
                      <Tab.Pane eventKey="second">Content for Tab 2</Tab.Pane>
                      <Tab.Pane eventKey="third">Content for Tab 3</Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
