import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import insurance from "../../Assets/Projects/insurance.png";
import crypterNft from "../../Assets/Projects/crypterNft.webp";
import empImage from "../../Assets/Projects/images.jfif";

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
              imgPath={crypterNft}
              isBlog={false}
              title=" Crypter - NFT Token Trading Platform"
              description="Led the design and development of the front-end interface for the Crypter platform, enhancing user experience for seamless NFT token trading.Implemented features allowing users to efficiently purchase and manage their NFT assets within a responsive, intuitive interface."
              ghLink="https://github.com/dev-faizal/NFT-marketPlace"
              demoLink="https://crypterapp.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={empImage}
              isBlog={false}
              title="EmpTrack - Employee Management"
              description="Developed a comprehensive Employee Management System to streamline employee record keeping, performance tracking, and payroll management. Implemented automated calculations for tax deductions, leave without pay (LOP), and Provident Fund (PF) contributions, improving accuracy and reducing administrative workload by 30%."
              ghLink="https://github.com/dev-faizal/EmpTrack.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={insurance}
              isBlog={false}
              title="Multi Sphere – Insurance Policy Comparison App "
              description="Built an insurance web app to compare existing and new health and life insurance policies. Built app with help of React, Typescript, Material-UI, and TailwindCSS to enhance the design of an application"
              ghLink="https://github.com/dev-faizal/Multisphere.git"
              demoLink=""
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
