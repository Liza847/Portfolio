import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Calculator from "./../../Assets/Projects/calculator.png";
import Quiz from "./../../Assets/Projects/Quiz.png"
import ToDo from "./../../Assets/Projects/ToDo.png"

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
              imgPath={Calculator}
              isBlog={false}
              title="Calculator"
              description="This project is a simple yet functional calculator built using HTML, CSS, and JavaScript. It provides basic arithmetic operations such as addition, subtraction, multiplication, and division. The calculator features a user-friendly interface with a responsive design, making it accessible on various devices."
              ghLink="https://github.com/Liza847/Calculator"
              demoLink="https://liza847.github.io/Calculator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Quiz}
              isBlog={false}
              title="Quiz"
              description="This project is an interactive quiz application built using React. It allows users to take quizzes on various topics, track their progress, and see instant results. The app features a dynamic interface, smooth navigation, and responsive design for optimal user experience on both desktop and mobile devices."
              ghLink="https://github.com/Liza847/quiz"
              demoLink="https://liza847.github.io/quiz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDo}
              isBlog={false}
              title="ToDo"
              description="This project is a simple and functional To-Do List application built using HTML, SASS, and JavaScript. It allows users to add, remove, and mark tasks as completed, helping them organize their daily activities efficiently. The application features a clean UI with smooth animations and a responsive layout for a seamless user experience."
              //ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
