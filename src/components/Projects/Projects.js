import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import insurance from "../../Assets/Projects/insurance.png";
import crypterNft from "../../Assets/Projects/crypterNft.webp";
import empImage from "../../Assets/Projects/images.jfif";
import { useNavigate } from "react-router-dom";

function Projects({ isProjectTab = true }) {
  const navigate =useNavigate()
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
          {!isProjectTab && <Col className="text-end fw-bold">
            <button className="btn text-white font-20px" onClick={()=>navigate('/project')}>View More</button>
          </Col>}
          {isProjectTab &&
            <>
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={insurance}
                  isBlog={false}
                  title="E-commerce"
                  description="Developed e-commerce application which is a dynamic software platform that empowers businesses and individuals to conduct the buying and selling of goods or services entirely online. These applications serve as the backbone of digital commerce, streamlining transactions over the internet and offering a seamless shopping experience for users across the globe."
                  ghLink="https://github.com/dev-faizal/E-commerce"
                  demoLink=""
                />
              </Col>
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={insurance}
                  isBlog={false}
                  title="The-Great-RGB-color-Game"
                  description="Developed an interactive and educational web-based game that challenges users to guess the correct color based on its RGB (Red, Green, Blue) values. Designed as both a fun and learning experience, players are presented with three RGB values and must choose the corresponding color from a set of options."
                  ghLink="https://github.com/dev-faizal/The-Great-RGB-color-Game"
                  demoLink=""
                />
              </Col>
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={insurance}
                  isBlog={false}
                  title="Socail Media application using MERN"
                  description="Built with a full-featured platform that enables users to create profiles, share posts, and interact with others through likes, comments, and real-time chat. It incorporates user authentication, a follow system,providing a dynamic social experience. Built with MongoDB, Express.js, React, and Node.js, the app offers scalability, real-time updates, and a mobile-friendly design."
                  ghLink="https://github.com/dev-faizal/Mern-social-media"
                  demoLink=""
                />
              </Col>
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={insurance}
                  isBlog={false}
                  title="Dashboard Application using React"
                  description="Devloped an interactive web application designed to visualize and represent revenue and various data metrics through tables, charts, and graphs. This application serves as a centralized platform for users to monitor key performance indicators (KPIs), track revenue trends, and analyze data in real-time."
                  ghLink="https://github.com/dev-faizal/Dashboard-Application-using-React.js"
                  demoLink=""
                />
              </Col>
            </>
          }

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
