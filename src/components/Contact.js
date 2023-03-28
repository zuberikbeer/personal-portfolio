import { useState } from "react";
import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";
import emblemImg from "../assets/images/emblem.svg";

const Result = () => {
  return (
    <p>Your message has been successfully sent. I will contact you soon!</p>
  );
};

const InputField = ({ type, name, value, placeholder, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const form = useRef(formInitialDetails);
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [result, showResult] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6oly3cc",
        "contact_form",
        form.current,
        "-0g46LWjBjQcktF2V"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  return (
    <section className="contact" id="connect">
      <Container fluid>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={emblemImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get in Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      {[
                        {
                          type: "text",
                          name: "user_name",
                          value: formDetails.firstName,
                          placeholder: "First Name",
                          category: "firstName",
                        },
                        {
                          type: "text",
                          name: "user_lastname",
                          value: formDetails.lastName,
                          placeholder: "Last Name",
                          category: "lastName",
                        },
                        {
                          type: "email",
                          name: "user_email",
                          value: formDetails.email,
                          placeholder: "Email Address",
                          category: "email",
                        },
                        {
                          type: "tel",
                          name: "user_phonenumber",
                          value: formDetails.phone,
                          placeholder: "Phone No.",
                          category: "phone",
                        },
                      ].map((field, index) => (
                        <Col key={index} size={12} sm={6} className="px-1">
                          <InputField
                            type={field.type}
                            name={field.name}
                            value={field.value}
                            placeholder={field.placeholder}
                            onChange={(e) =>
                              onFormUpdate(field.category, e.target.value)
                            }
                          />
                        </Col>
                      ))}
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          name="message"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>
                        <button type="submit">
                          <span>Send</span>
                        </button>
                        <div className="row">{result ? <Result /> : null}</div>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
