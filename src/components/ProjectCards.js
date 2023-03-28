import { Col } from "react-bootstrap";
import "./ProjectCards.css";

const ProjectCards = ({ title, description, imgUrl, projectlink }) => {
  return (
    <Col xs={12} sm={12} md={12} lg={4} xl={4} xxl={4} className="mx-auto">
      <div className="proj-imgbx">
        <a href={projectlink}>
          <img src={imgUrl} alt={title} />

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
