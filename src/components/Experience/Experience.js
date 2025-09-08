import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const experiences = [
    {
      title: "DevOps Intern",
      company: "Glazer Capital",
      location: "New York City, New York",
      date: "March 2025 – May 2025",
      details: [
        "Developed a full-stack financial trading dashboard using React.js and Django, featuring real-time data updates and interactive Material UI data tables.",
        "Implemented secure user authentication and role-based access control for different user groups.",
        "Engineered a responsive web interface with dynamic data visualizations for multiple trading strategies."
      ]
    },
    {
      title: "Undergraduate Research Assistant",
      company: "Rutgers University",
      location: "New Brunswick, New Jersey",
      date: "May 2023 – Dec 2023",
      details: [
        "Analyzed data from 15+ behavioral experiments using R, increasing research accuracy by 30%.",
        "Applied the Conditional Associative Accuracy (CAA) Model to recognize memory data using Python.",
        "Conducted analysis using Python and SQL to identify trends, influencing experimental design by 40%."
      ]
    },
    {
      title: "Web Developer",
      company: "VadtalDham Temple",
      location: "Franklin Park, New Jersey",
      date: "July 2023 – May 2024",
      details: [
        "Engineered a responsive web platform serving 10,000+ users with React.js, Node.js, and Tailwind CSS.",
        "Developed an automated event management system with RESTful APIs, reducing admin workload by 50%.",
        "Implemented a modular content management system, increasing update efficiency by 70%."
      ]
    }
  ];
  
  const Experience = () => {
    return (
      <section className="bg-white px-6 py-12 md:px-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Work Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
              <p className="text-gray-600">{exp.company} — {exp.location}</p>
              <p className="text-sm text-gray-500 italic mb-4">{exp.date}</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {exp.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Experience;