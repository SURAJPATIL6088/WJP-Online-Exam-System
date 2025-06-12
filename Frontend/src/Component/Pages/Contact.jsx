import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../Styling/Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Container className="contact-page py-5">
      <Row className="g-4">
        <Col md={6}>
          {!submitted ? (
            <>
              <div className="contact-info">
                <h2 className="mb-4 h2">Get in Touch</h2>
                <p className="mb-4 para">
                  Have questions, suggestions, or feedback? We'd love to hear
                  from you! Fill out the form or use the contact information
                  below.
                </p>

                <div className="contact-details">
                  <div className="contact-item mb-3">
                    <h5>
                      <i className="bi bi-geo-alt-fill me-2"></i>Address
                    </h5>
                    <p className="para">CDAC- Mumbai , Kharghar</p>
                  </div>

                  <div className="contact-item mb-3">
                    <h5>
                      <i className="bi bi-telephone-fill me-2"></i>Phone
                    </h5>
                    <p className="para">+91 (11) 222-3344</p>
                  </div>

                  <div className="contact-item mb-3">
                    <h5>
                      <i className="bi bi-envelope-fill me-2"></i>Email
                    </h5>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=info@quizmaster.com"
                      target="_blank"
                      rel="noreferrer"
                      style={{ marginRight: "15px" }}
                      id="emaillink"
                      className="para"
                    >
                      info@vidyarthi.com
                    </a>
                  </div>

                  <div className="contact-item">
                    <h5>
                      <i className="bi bi-clock-fill me-2"></i>Working Hours
                    </h5>
                    <p className="para">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div id="thanks">
              <h2 className="text-danger mb-4">
                🎉 Thank you for reaching out!
              </h2>
              <br></br>
              <p className="para">
                We’ve received your message and our team will get back to you
                shortly.
                <br />
                <br></br>
                <div style={{ marginLeft: "120px" }}>
                  Your interest means a lot to us ...!!!
                </div>
              </p>
            </div>
          )}
        </Col>

        <Col md={6}>
          <div className="contact-form">
            {!submitted ? (
              <Form onSubmit={handleSubmit}>
                <h2 className="mb-4 h2">Send Us a Message</h2>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="custom-password-input"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="custom-password-input"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter subject"
                    required
                    className="custom-password-input"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Enter your message"
                    required
                    className="custom-password-input"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Send Message
                </Button>
              </Form>
            ) : null}
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <div className="map-container">
            <div className="map-responsive">
              <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.745711132009!2d73.05222434175892!3d19.025776737481895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24cce39457b%3A0x8bd69eab297890b0!2sCentre%20for%20Development%20of%20Advanced%20Computing%20(CDAC)!5e0!3m2!1sen!2sin!4v1749063386894!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
