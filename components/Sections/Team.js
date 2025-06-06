import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const CoachCard = ({ imgSrc, name, position, bio }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <style jsx>{`
        .coach-card-container {
          perspective: 1000px;
          margin-bottom: 2rem;
        }

        .coach-card {
          border: none;
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          border-radius: 12px;
          transform-style: preserve-3d;
          width: 100%;
          max-width: 320px;
        }

        /* 3D tilt + lift on hover */
        .coach-card-container:hover .coach-card {
          transform: perspective(1000px) rotateY(6deg) translateY(-10px);
          box-shadow: 0 12px 20px rgba(0,0,0,0.2);
        }

        .coach-img-wrapper {
          overflow: hidden;
          height: 240px;
        }
        .coach-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        /* Slight zoom on image hover */
        .coach-card-container:hover .coach-img-wrapper img {
          transform: scale(1.05);
        }

        .coach-card-body {
          background: #fff;
          padding: 1rem 1.25rem;
        }
        .coach-card-body .card-title {
          margin-bottom: 0.25rem;
          font-weight: 600;
          font-size: 1.25rem;
        }
        .coach-card-body .card-subtitle {
          font-size: 0.95rem;
          color: #555;
          margin-bottom: 0.75rem;
        }

        .bio-snippet {
          position: relative;
          max-height: 4.5em; /* roughly 3 lines */
          overflow: hidden;
          transition: max-height 0.4s ease;
          line-height: 1.5;
          color: #333;
          white-space: pre-wrap; /* preserve line breaks */
        }
        .bio-snippet.expanded {
          max-height: 100vh;
        }
        .bio-snippet:not(.expanded)::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1.5em;
          background: linear-gradient(transparent, #fff);
        }

        .read-more-btn {
          background: none;
          border: none;
          padding: 0;
          color: #007bff;
          font-weight: 500;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          margin-top: 0.5rem;
          cursor: pointer;
        }
        .read-more-btn:hover {
          text-decoration: underline;
        }
        .read-more-btn.open i {
          transform: rotate(180deg);
        }
        .read-more-btn i {
          margin-left: 0.25rem;
          transition: transform 0.3s ease;
        }
      `}</style>

      <div className="coach-card-container">
        <Card className="coach-card">
          <div className="coach-img-wrapper">
            <Card.Img variant="top" src={imgSrc} alt={name} />
          </div>
          <Card.Body className="coach-card-body">
            <Card.Title as="h5">{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{position}</Card.Subtitle>

            <div className={`bio-snippet ${expanded ? 'expanded' : ''}`}>
              {bio}
            </div>
            <button
              className={`read-more-btn ${expanded ? 'open' : ''}`}
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              {expanded ? 'Show Less' : 'Read More'}
              <i className={`fas fa-chevron-${expanded ? 'up' : 'down'}`}></i>
            </button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

const Coaches = () => {
  const coaches = [
    {
      imgSrc: '/images/team/b.webp', // replace with actual path
      name: 'Coach Chad Chop',
      position: 'Head Coach',
      bio: `Chad grew up in Orange County, California and played baseball at Tustin High School. He earned a scholarship to play baseball at San Diego State University where he led the team in hitting his freshman year while starting 48 games at 1st Base. He then played his junior and senior years at Vanguard University where he was an All-American and the Great Southwest Athletic Conference player of the year in 2002. He was drafted in the 6th round of the 2002 MLB draft by the Montreal Expos. In his first full season he led the South Atlantic league in hits and finished the year as the number 2 overall prospect in the Montreal Expos organization.

After a 5-year playing career, Chad spent the better part of eight years on the staff of the San Francisco Giants and the Los Angeles Dodgers. He was on the staff of two World Series Championship teams (2014 and 2020) and has the first ever successful challenge in World Series history with a challenge in game 7 of the 2014 World Series. After the 2021 season with the Los Angeles Dodgers, he returned home to Oro Valley, Arizona to raise his 4 boys and lead the Pusch Ridge Christian Academy (PRCA) Lions to their first ever 3A South Region Championship. Most recently, Coach Chop coached at Ironwood Ridge High School. Coach Chop currently cohosts the “Talking Shop Podcast” with Coach Ballgame where guests come on to talk about the importance of character in sports. The podcast has 100+ episodes and includes household names talking about how important character is to success.`,
    },
    {
      imgSrc: '/images/team/b.webp', // replace with actual path
      name: 'Coach Will Nicholas',
      position: 'Assistant Coach',
      bio: `Will grew up in Juneau, Alaska and played baseball at Juneau Douglas High School. He earned a scholarship to play baseball at Orange Coast College in Costa Mesa, California. Will played in the Alaska Summer League before finishing his playing career at Eastern Washington University.

Will has been coaching high school and club baseball in Washington and Arizona since 2010. Will has coached high school baseball alongside Coach Chop at Pusch Ridge Christian Academy and at Ironwood Ridge High School. Over their span coaching high school together, Will and Chad have a winning percentage of .720, with their teams making it to at least the state quarterfinals in all three years.

Coach Chop and Coach Will focus on developing young men of high character, with a high baseball IQ, elite fundamentals, a spirit of resiliency, and a desire to be a great teammate. Process over results is the daily focus for their teams.`,
    },
  ];

  return (
    <section id="coaches">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col className="col-12 col-md-10 col-lg-6 text-center">
            <div className="section-title">
              <h3>Our Coaches</h3>
              <p>Learn more about the men shaping our program on and off the field.</p>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          {coaches.map((coach, idx) => (
            <Col
              key={idx}
              className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
            >
              <CoachCard
                imgSrc={coach.imgSrc}
                name={coach.name}
                position={coach.position}
                bio={coach.bio}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Coaches;
