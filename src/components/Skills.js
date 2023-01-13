import "./Skills.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Technical Skills</h2>
              <p>
                Proficient in Full Stack Javascript Development which includes:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <h5>React</h5>
                </div>
                <div className="item">
                  <h5>MERN Stack</h5>
                </div>
                <div className="item">
                  <h5>REST(CRUD)</h5>
                </div>
                <div className="item">
                  <h5>Axios</h5>
                </div>
                <div className="item">
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <h5>API's</h5>
                </div>
                <div className="item">
                  <h5>Object Oriented Programming</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
