import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/stock-predictor.jpeg";
import resume from "../../Assets/Projects/resume.jpeg";
import emotion from "../../Assets/Projects/chess.jpeg";
import editor from "../../Assets/Projects/to-do List.jpeg";
import graph from "../../Assets/Projects/graph.jpeg";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/chess.jpeg";
import bitsOfCode from "../../Assets/Projects/shivpicks.jpeg";
import DSA from "../../Assets/Projects/DSA.png";
import Music from "../../Assets/Projects/Music.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/shivam041/Chatbot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ShivPicks"
              description="My personal website that can predict each players predicted points. You enter two teams and the type of model you would to run and runs anlysis using historical data. Built using Python and streamlit to deploy the website."
              ghLink="https://github.com/shivam041/shivpicks"
              demoLink="https://shivpicks.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="To-Do List"
              description="Built a to-Do list application using a MERN stack. Allows users to set reminders for upcoming events and deadlines resembling Notion."
              ghLink="https://github.com/shivam041/To_DO-List"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Stock Analyzer"
              description="stocksight is an open source stock market analysis software that uses Elasticsearch to store Twitter and news headlines data for stocks. stocksight analyzes the emotions of what the author writes and does sentiment analysis on the text to determine how the author feels about a stock."
              ghLink="https://github.com/shivam041/Stock-Analyzer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Chess"
              description="Fully built chess application using Java. Using advanced Java concepts such as Object Oriented Programming, Inheritance, and JavaFX"
              ghLink="https://github.com/shivam041/Chess"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title="Resume Analyzer"
              description="A tool which parses information from a resume using natural language processing and finds the keywords, cluster them onto sectors based on their keywords. And lastly show recommendations, predictions, analytics to the applicant / recruiter based on keyword matching."
              ghLink="https://github.com/shivam041/Resume-Analyzer"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={graph}
              isBlog={false}
              title="knowledge-graph-search-engine"
              description="A web-based Knowledge Graph Search Engine that constructs a knowledge graph from text documents and provides contextual answers to user queries."
              ghLink="https://github.com/shivam041/knowledge-graph-search-engine"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DSA}
              isBlog={false}
              title="Data Structures and Algorithms Visualizer"
              description="An interactive web application for visualizing data structures and algorithms"
              ghLink="https://github.com/shivam041/Data-Stuctures-and-Algorithms-Visualizer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Music}
              isBlog={false}
              title="Music Studio"
              description="A modern, web-based Digital Audio Workstation built with Next.js and TypeScript"
              ghLink="https://github.com/shivam041/music-studio"
            />
          </Col>

  

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
