import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function ContactUs(props) {
  return (
    <section id="contact" className={props.className}>
      <Container>
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={8} lg={6}>
            <div className="section-title text-center">
              <h3>Contact Us</h3>
              <p>We're here to help – send us a message and we'll get back to you soon.</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Form>
              <Form.Group controlId="contactEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                />
              </Form.Group>

              <Form.Group controlId="contactMessage" className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Type your message here"
                />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
