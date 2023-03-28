import { useState, useEffect, useCallback, memo } from "react";
import { Navbar, Container, Nav, Row, Button } from "react-bootstrap";
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

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

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
    <Navbar expand="sm" className={scrolled ? "scrolled" : ""}>
      <Container fluid>
        <Navbar.Brand href="/">
          <img className="logo" src={logo} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Row>
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
              disabled={isLoading}
              onClick={!isLoading ? handleClick : null}
            >
              {isLoading ? "Loading" : "Resume"}
            </Button>
            <HashLink to="#connect">
              <Button className="btn-lets-connect" variant="outline-light">
                Let's Connect
              </Button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
