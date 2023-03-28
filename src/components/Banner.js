import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Banner.css";
import "animate.css";
import TrackVisibility from "react-on-screen";
import profilePic from "../assets/images/profile-pic.svg";

const useTypingEffect = (toRotate, period) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    const ticker = setInterval(tick, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return text;
};

export const Banner = () => {
  const toRotate = [
    "Full Stack JavaScript Developer",
    "Web Developer",
    "React Developer",
  ];
  const period = 3000;
  const text = useTypingEffect(toRotate, period);

  return (
    <Container className="banner-container" id="home" fluid>
      <Row className="align-items-center">
        <Col xs={12} sm={12} md={7} lg={7} xl={7} xxl={7}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <span className="tagline">Welcome to my Portfolio</span>

                {window.matchMedia("(max-width: 575.98px)").matches ? (
                  <h1>{`Jordan Khalil`}</h1>
                ) : (
                  <h1>{`Greetings Traveler I'm Jordan Khalil `}</h1>
                )}

                <span className="wrap">{text}</span>

                <p>
                  Grand Circus coding bootcamp graduate with a certificate in
                  full stack JavaScript.{" "}
                </p>
              </div>
            )}
          </TrackVisibility>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__zoomIn" : ""}
              >
                <img src={profilePic} alt="Profile-Pic" />
              </div>
            )}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
