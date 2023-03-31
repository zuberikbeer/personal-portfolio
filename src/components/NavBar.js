import { useState, useEffect, useCallback, memo } from "react";
import { Navbar, Container, Nav, Row, Button, Modal } from "react-bootstrap";
import logo from "../assets/images/logo.svg";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";
import navIcon4 from "../assets/images/github.svg";

import { HashLink } from "react-router-hash-link";
import "./NavBar.css";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

const SocialIcon = memo(({ href, src }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img src={src} alt="" />
  </a>
));

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const onScroll = useCallback(() => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <>
      <Navbar expand="sm" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Row>
            <Navbar.Brand href="/">
              <img className="logo" src={logo} alt="Logo" />
            </Navbar.Brand>
            <Nav className="ms-auto left-nav"></Nav>
          </Row>
          <span className="navbar-text">
            <div className="social-icon">
              <SocialIcon
                href="https://www.linkedin.com/in/jordan-khalil/"
                src={navIcon1}
              />
              <SocialIcon
                href="https://github.com/zuberikbeer"
                src={navIcon4}
              />
              <SocialIcon
                href="https://www.facebook.com/jordan.khalil.5/"
                src={navIcon2}
              />
              <SocialIcon
                href="https://www.instagram.com/jordan_khalil/"
                src={navIcon3}
              />
            </div>
            <Button
              className="btn-resume"
              variant="outline-light"
              disabled={isLoading || showModal}
              onClick={!isLoading ? handleShowModal : null}
            >
              {isLoading ? "Loading" : "Resume"}
            </Button>
            <HashLink to="#connect" style={{ textDecoration: "none" }}>
              <Button
                className="btn-lets-connect"
                variant="outline-light"
                disabled={showModal}
              >
                Let's Connect
              </Button>
            </HashLink>
          </span>
        </Container>
      </Navbar>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        size="lg"
        className="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <embed
            src="/document/resume.pdf"
            type="application/pdf"
            width="100%"
            height="600px"
          />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default NavBar;
