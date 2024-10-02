import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

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
              As a full-stack virtuoso, I orchestrate seamless digital experiences across the technological spectrum. From <b className="purple">C++</b> and <b className="purple">Python</b> to <b className="purple">JavaScript</b> and <b className="purple">TypeScript</b>, I wield a diverse arsenal of programming languages, I think… 🤷‍♂️
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <p className="mt-4">
                My Web Development mastery with <i className="purple fw-bold">React.js, Next.js,</i> and modern <i className="purple  fw-bold">CSS</i> frameworks creates intuitive user interfaces, while my backend expertise in <i className="purple fw-bold">Node.js, Express.js</i>, and database technologies ensures robust, <i className="purple  fw-bold">scalable architectures</i>
              </p>
              <br />
              <br />
              
              <br />
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}
export default Home2;
