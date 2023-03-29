import "./Skills.css";
import skillsData from "../data/items.json";

import { Card, Col, Container, Row } from "react-bootstrap";

const Skills = () => {
  return (
    <Container fluid className="skill-container">
      <Row className="align-items-center">
        <h2 className="stack">Stack</h2>

        {skillsData.map((skill) => (
          <Col
            key={skill.id}
            xs={4}
            sm={4}
            md={4}
            lg={3}
            xl={2}
            xxl={2}
            className="all-cards"
          >
            <Card className="card-custom card-gradient">
              <Card.Img variant="top" src={skill.imgUrl} />
              <Card.Body>
                <div className="card-content">
                  <Card.Title className="centered-title">
                    {skill.name}
                  </Card.Title>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
