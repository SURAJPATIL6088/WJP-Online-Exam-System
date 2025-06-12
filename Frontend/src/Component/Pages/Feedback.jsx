import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import "../Styling/Feedback.css";


const Feedback = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); 
  };

  return (
    <Container className="feedback-page py-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="feedback-card">
            <Card.Body>
              {!submitted ? (
                <>
                  <h1 className="text-center mb-4">Feedback Page</h1>

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="feedbackType">
                      <Form.Label>Feedback Type</Form.Label>
                      <Form.Select aria-label="Select feedback type" required className="custom-password-input">
                        <option value="">Select feedback type</option>
                        <option value="suggestion">Any Suggestion??</option>
                        <option value="bug">Report an issue</option>
                        <option value="compliment">Give Compliment</option>
                        <option value="general">General Feedback</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="feedbackEmail">
                      <Form.Label>Email Address (Optional)</Form.Label>
                      <Form.Control type="email" placeholder="Enter your email if you want to.." className="custom-password-input"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="feedbackMessage">
                      <Form.Label>Your Feedback</Form.Label>
                      <Form.Control as="textarea" rows={3} placeholder="Please provide detailed feedback" required className="custom-password-input"/>
                    </Form.Group>

                    <div className="rating-section mb-4">
                      <Form.Label>How would you rate your overall experience?</Form.Label>
                      <div className="d-flex justify-content-between gap-3">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <div key={num} className="d-flex align-items-center">
                            <Form.Check
                              type="radio"
                              id={`rating-${num}`}
                              name="rating"
                              value={num}
                              className="me-2"
                              required
                            />
                            <label htmlFor={`rating-${num}`} className="mb-0">{num}</label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="d-grid">
                      <Button variant="primary" type="submit" size="lg">
                        Submit Feedback
                      </Button>
                    </div>
                  </Form>
                </>
              ) : (
                <div className="text-center">
                  <h2 className="text-danger">Thank You for Your Feedback!</h2>
                  <p>
                    We appreciate you taking the time to help us improve Vidyarthi.<br />
                    Your input is valuable to us and will be carefully reviewed by our team.
                  </p>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Feedback;
