import React, { useState } from 'react';
import { Container, Row, Col, Form, Alert, Spinner } from 'react-bootstrap';

export default function ContactUs(props) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null); // { type: 'success' | 'error', text: string }

  // Your Formspree endpoint (e.g. NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/abcd1234)
  const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback(null);

    if (!email.trim() || !message.trim()) {
      setFeedback({ type: 'error', text: 'Both email and message are required.' });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          message: message.trim(),
        }),
      });

      if (res.ok) {
        setFeedback({ type: 'success', text: 'Message sent successfully!' });
        setEmail('');
        setMessage('');
      } else {
        const data = await res.json();
        const errorText = data?.error || 'Failed to send message. Please try again.';
        setFeedback({ type: 'error', text: errorText });
      }
    } catch (err) {
      setFeedback({ type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

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
            {feedback && (
              <Alert
                variant={feedback.type === 'success' ? 'success' : 'danger'}
                onClose={() => setFeedback(null)}
                dismissible
                className="feedback-alert"
              >
                {feedback.text}
              </Alert>
            )}

            <Form onSubmit={handleSubmit} noValidate>
              <Form.Group controlId="contactEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={submitting}
                  className="custom-input"
                />
              </Form.Group>

              <Form.Group controlId="contactMessage" className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Type your message here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  disabled={submitting}
                  className="custom-textarea"
                />
              </Form.Group>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={submitting}
                  className="send-btn"
                >
                  {submitting ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />{' '}
                      Sending…
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        #contact {
          padding: 4rem 0;
          background: #f7f9fc;
        }

        .section-title h3 {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .section-title p {
          color: #6c757d;
          font-size: 1rem;
          margin-bottom: 2rem;
        }

        .feedback-alert {
          margin-bottom: 1.5rem;
        }

        .custom-input,
        .custom-textarea {
          border-radius: 6px;
          border: 1px solid #ced4da;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .custom-input:focus,
        .custom-textarea:focus {
          border-color: #66afe9;
          box-shadow: 0 0 0 0.2rem rgba(102, 175, 233, 0.25);
        }

        /* ALWAYS visible blue button */
        .send-btn {
          background-color: #007bff !important;
          border: none !important;
          border-radius: 6px !important;
          padding: 0.6rem 2rem !important;
          font-size: 1rem !important;
          font-weight: 500 !important;
          color: #ffffff !important;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .send-btn:hover,
        .send-btn:focus {
          background-color: #0056b3 !important;
          transform: translateY(-1px);
        }

        .send-btn:disabled {
          background-color: #6c757d !important;
          cursor: not-allowed !important;
        }
      `}</style>
    </section>
  );
}
