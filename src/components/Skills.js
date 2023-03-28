import "./Skills.css";
import skillsData from "../data/items.json";

import { Card, Col, Container, Row } from "react-bootstrap";

const Skills = () => {
  return (
    <Container fluid className="skill-container">
      <Row>
        {skillsData.map((skill) => (
          <Col key={skill.id} xs={4} sm={4} md={4} lg={3} xl={2} xxl={2}>
            <Card className="card-custom">
              <Card.Img variant="top" src={skill.imgUrl} />
              <Card.Body>
                <Card.Title>{skill.name}</Card.Title>
                <Card.Text>{skill.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
