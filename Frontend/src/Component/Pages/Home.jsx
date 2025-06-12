import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styling/Home.css";

const Home = () => {
  const quizCategories = [
    {
      id: 1,
      name: "General Knowledge",
      description: "Test your knowledge about the world",
      icon: "🌍",
    },
    {
      id: 2,
      name: "Science",
      description: "Explore and learn the wonders of science",
      icon: "🔬",
    },
    {
      id: 3,
      name: "History",
      description: "Journey through historical events",
      icon: "🏛️",
    },
    {
      id: 4,
      name: "Programming",
      description: "Challenge your coding knowledge",
      icon: "💻",
    },
  ];

  

  return (
    <Container className="home-page">
      <section className="hero-section text-center py-5">
        <div className="typewriter-container">
          <h1 className="typewriter-text">
            Welcome to विद्यार्थी..!!
          </h1>
        </div>

        <p className="lead mb-4" id="title">
          " ज्ञानस्य दीपः विद्यर्थीणां कृते "

        </p>
        <div className="d-flex justify-content-center gap-3" id="btns">
          <Button as={Link} to="/signup" id="btn1">
            Get Started
          </Button>
          <Button as={Link} to="/about" id="btn2">
            Learn More
          </Button>
        </div>
      </section>

      <section className="features-section py-5">
        <h2 className="text-center mb-5">Why Choose Vidyarthi?</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 feature-card" id="card1">
              <Card.Body className="text-center">
                <div className="feature-icon mb-3">📊</div>
                <Card.Title className="title" id="t1">
                  Accessibility & Convenience
                </Card.Title>
                <br></br>
                <Card.Text>
                  Available 24/7 from any device with internet access So that
                  Users can take exams anytime, anywhere without physical
                  constraints.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 feature-card" id="card2">
              <Card.Body className="text-center">
                <div className="feature-icon mb-3">🏆</div>
                <Card.Title>Engaging Learning Experience</Card.Title>
                <br></br>
                <Card.Text>
                  Interactive formats increase user engagement. It keeps
                  learners actively involved and motivated, fostering a deep
                  connection to the learning process
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 feature-card" id="card3">
              <Card.Body className="text-center">
                <div className="feature-icon mb-3">📱</div>
                <Card.Title>Continuous Improvement</Card.Title>
                <br></br>
                <Card.Text>
                  Easily update & modify exam content to keep it aligned with 
                  current syllabus and learning goals.Supports repeated attempts, 
                  so learners can regularly refresh their knowledge.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <section className="quiz-categories py-4">
        <h2 className="text-center mb-5 category">Popular Exam Categories</h2>
        <Row className="g-4">
          {quizCategories.map((category) => (
            <Col key={category.id} md={3} sm={6}>
              <Card className="h-100 category-card" id="category1">
                <Card.Body className="text-center">
                  <div className="category-icon mb-3">{category.icon}</div>
                  <Card.Title>{category.name}</Card.Title>
                  <Card.Text>{category.description}</Card.Text>
                  <Button variant="outline-primary">Start Exam</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default Home;
