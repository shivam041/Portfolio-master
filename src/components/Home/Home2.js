import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/img.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am currently a Senior at Rutgers University studying Computer Science
              and Data Science with an expected graduation in May 2026.
              <br />
              <br />I am fluent in programming languages like
              <i>
                <b className="purple"> Java, Python, JavaScript, TypeScript, C++, and SQL. </b>
              </i>
              <br />
              <br />
              I am also experienced in modern frameworks and technologies like 
              <i>
                <b className="purple"> React.js, Node.js, Django, TensorFlow, and Machine Learning. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Full-Stack Applications </b> and
                also in areas related to{" "}
                <b className="purple">
                  Data Science and Machine Learning.
                </b>
              </i>
              <br />
              <br />
              I have experience in financial technology, research, and web development,
              with a passion for creating impactful solutions using{" "}
              <b className="purple">AI and Data Analytics</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONTACT & CONNECT</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <div className="contact-info" style={{ 
              marginBottom: "20px",
              background: "rgba(255, 255, 255, 0.1)",
              padding: "1.5rem",
              borderRadius: "10px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)"
            }}>
              <p style={{ fontSize: "1.1em", marginBottom: "10px", color: "#fff" }}>
                <strong style={{ color: "#cd5ff8" }}>Email:</strong> shivamkp57@gmail.com
              </p>
              <p style={{ fontSize: "1.1em", marginBottom: "10px", color: "#fff" }}>
                <strong style={{ color: "#cd5ff8" }}>Phone:</strong> (551)-263-7691
              </p>
            </div>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shivam041"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shivam-patel-1a9b2625a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/shivamp_13/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
