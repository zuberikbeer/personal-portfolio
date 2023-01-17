import { Col } from "react-bootstrap";
import "./ProjectCards.css";

const ProjectCards = ({ title, description, imgUrl, projectlink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={projectlink}>
          <img src={imgUrl} />

          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  );
};

export default ProjectCards;
