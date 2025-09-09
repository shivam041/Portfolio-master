import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shivam Patel </span>
            from <span className="purple"> Franklin Park, New Jersey.</span>
            <br />
            <br />
            I am currently a Senior at Rutgers University-New Brunswick, pursuing a 
            <span className="purple"> B.S. in Computer Science and Data Science</span> 
            with an expected graduation in May 2026.
            <br />
            <br />
            My coursework includes Data Structures & Algorithms, Discrete Math, 
            Regression Methods, Statistical Learning, and Software Methodology.
            <br />
            <br />
            I'm actively involved in the Rutgers University Mobile App Development Club, 
            Undergraduate Student Alliance of Computer Science, and HackRU.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Mobile App Development
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shivam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
