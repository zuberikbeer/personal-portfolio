import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";
import projImg4 from "../assets/images/project-img4.png";
import "./Projects.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  // Changed the variable name to a more descriptive name 'projectData'
  const projectData = [
    {
      title: "Shopping-Cart",
      description:
        "Front-End Shopping Application build with TypeScript, BootStrap, React",
      imgUrl: projImg4,
      projectlink: "https://react-ts-shopping-cart-2023.web.app",
    },
    {
      title: "Celestial-Typer",
      description:
        "Full Stack Application using MongoDb, Express, React, Node.js",
      imgUrl: projImg1,
      projectlink: "https://celestial-typer.web.app/",
    },
    {
      title: "Recipe-Project",
      description:
        "Recipe Book that id derviced from an API and used React and TypeScript",
      imgUrl: projImg2,
      projectlink: "https://recipe-project-10da8.web.app/home",
    },
  ];
  const projectData2 = [
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
  const renderProjects2 = () => {
    return (
      <Container>
        <Row>
          {projectData2.map((project, index) => (
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
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
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
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content className="tab-container">
                      <Tab.Pane eventKey="first">{renderProjects()}</Tab.Pane>
                      {/* Updated Tab.Pane content */}
                      <Tab.Pane eventKey="second">{renderProjects2()}</Tab.Pane>
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
