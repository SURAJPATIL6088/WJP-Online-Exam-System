import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 text-white">
      <Container>
        <Row>
          <Col md={4} className="footer-col">
            <h5>Vidyarthi</h5>
            <p className='footpara'>Your ultimate online exam platform for testing knowledge and learning new things.</p>
          </Col>
          <Col md={4} className="footer-col">
            <h5>Quick Links</h5>
            <ul className="list-unstyled" >
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/feedback">Feedback</a></li>
            </ul>
          </Col>
          <Col md={3} className="footer-col">
            <h5>Contact Info</h5>
            <address>
              <p className='footpara'>Email: info@vidyarthi.com</p>
              <p className='footpara'>Phone: +91 111-222-3344</p>
              <p className='footpara'>Address: CDAC- Kharghar, Mumbai</p>
            </address>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-0">
            <h5 style={{ color: 'white' }}>Made with ❤️ from Aarya, Suraj & Nikhil</h5>

          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;