import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";

const experiences = [
  {
    title: "Full Stack Intern",
    company: "Glazer Capital",
    location: "New York City, New York",
    date: "March 2025 – May 2025",
    icon: <FaBriefcase />,
    details: [
      "Developed a full-stack financial trading platform by architecting a React/MUI frontend with Django REST framework backend, resulting in real-time monitoring of merger arbitrage, SPAC, and convertible bond positions for portfolio managers.",
      "Engineered a real-time data processing pipeline that integrated Bloomberg and spreadsheet data sources by utilizing Django Channels WebSocket's for instant price updates, which reduced market risk by providing immediate visibility into position P&L and exposure.",
      "Designed and built customizable dashboard interfaces using Material React Table and TailwindCSS, enabling users to personalize views of portfolio data, which improved trading decision-making efficiency by 40% through focused data visualization."
    ]
  },
  {
    title: "Undergraduate Research Assistant",
    company: "Rutgers University",
    location: "New Brunswick, New Jersey",
    date: "May 2023 – Dec 2023",
    icon: <FaGraduationCap />,
    details: [
      "Leveraged statistical algorithms and iterative parameter optimization to implement a Python-based Conditional Associative Accuracy model for predicting memory recognition performance, improving data processing efficiency and research precision by 25%",
      "Performed comprehensive statistical analyses on data from 15+ behavioral experiments using Python (Pandas, NumPy, Linear Regression), R, and SQL, effectively identifying data trends, refining experimental protocols, and enhancing predictive accuracy by up to 40%.",
      "Designed and executed complex data modeling for untimed recognition tasks, implementing probabilistic source-memory models in Python and R to analyze confidence-level responses, significantly advancing the accuracy of psychological experiment outcomes and insights into human cognitive processes."
    ]
  },
  {
    title: "Web Developer",
    company: "VadtalDham Temple",
    location: "Franklin Park, New Jersey",
    date: "July 2023 – May 2024",
    icon: <FaCode />,
    details: [
      "Engineered a responsive web platform serving 10,000+ monthly users by implementing React.js, Node.js, and modern CSS frameworks, such as Tailwind CSS, resulting in a 40% improvement in mobile user engagement.",
      "Developed an automated event management system that reduced administrative workload by 50% by integrating Node.js backend services and RESTful APIs for real-time updates.",
      "Implemented a scalable content management solution that increased content update efficiency by 70% by utilizing modular React components and optimizing database queries with SQL."
    ]
  }
];

function Experience() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12}>
            <h1 className="project-heading">
              Professional <strong className="purple">Experience</strong>
            </h1>
            <p style={{ color: "white", textAlign: "center", marginBottom: "3rem" }}>
              Here are some of my professional experiences and achievements
            </p>
          </Col>
        </Row>
        
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={10}>
            {experiences.map((exp, index) => (
              <div key={index} className="resume-item" style={{ marginBottom: "3rem" }}>
                <div className="resume-card" style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  padding: "2rem",
                  borderRadius: "10px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}>
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    marginBottom: "1rem",
                    flexWrap: "wrap"
                  }}>
                    <div style={{ 
                      fontSize: "2rem", 
                      color: "#cd5ff8", 
                      marginRight: "1rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "50px",
                      height: "50px",
                      background: "rgba(205, 95, 248, 0.1)",
                      borderRadius: "50%"
                    }}>
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="resume-title" style={{ 
                        color: "#cd5ff8", 
                        fontSize: "1.5rem", 
                        margin: "0 0 0.5rem 0",
                        fontWeight: "bold"
                      }}>
                        {exp.title}
                      </h3>
                      <h4 style={{ 
                        color: "#fff", 
                        fontSize: "1.2rem", 
                        margin: "0 0 0.25rem 0",
                        fontWeight: "600"
                      }}>
                        {exp.company}
                      </h4>
                      <p style={{ 
                        color: "#ccc", 
                        margin: "0 0 0.5rem 0",
                        fontSize: "1rem"
                      }}>
                        {exp.location}
                      </p>
                      <p style={{ 
                        color: "#cd5ff8", 
                        margin: "0",
                        fontSize: "0.9rem",
                        fontStyle: "italic"
                      }}>
                        {exp.date}
                      </p>
                    </div>
                  </div>
                  
                  <ul style={{ 
                    listStyle: "none", 
                    padding: "0",
                    margin: "0"
                  }}>
                    {exp.details.map((item, idx) => (
                      <li key={idx} style={{
                        color: "#fff",
                        marginBottom: "1rem",
                        paddingLeft: "1.5rem",
                        position: "relative",
                        lineHeight: "1.6"
                      }}>
                        <span style={{
                          position: "absolute",
                          left: "0",
                          top: "0.5rem",
                          width: "6px",
                          height: "6px",
                          background: "#cd5ff8",
                          borderRadius: "50%"
                        }}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;