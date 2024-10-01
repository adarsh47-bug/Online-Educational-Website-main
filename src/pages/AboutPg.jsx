import React from "react";
import { Container, Row, Col } from "reactstrap";

import teamImg1 from "../assests/images/testimonial01.png";
import teamImg2 from "../assests/images/testimonial01.png";
import teamImg3 from "../assests/images/testimonial01.png";
import "./about.css";

const AboutPg = () => {
  return (
    <section className="about-section">
      <Container>
        <Row className="mb-5">
          <Col lg="12" className="text-center">
            <h2 className="section-title">About Us</h2>
            <p className="section-subtitle">
              Learn more about our company, our mission, and our team.
            </p>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col lg="6" md="6">
            <h3 className="about-title">Company Overview</h3>
            <p>
              We are a leading provider of online education, offering a wide
              range of courses to help you achieve your goals. Our mission is to
              make learning accessible to everyone, everywhere.
            </p>
          </Col>
          <Col lg="5" md="5">
            <img
              src={'https://img.freepik.com/free-photo/people-with-laptops-office_23-2147656717.jpg?t=st=1727688920~exp=1727692520~hmac=39f7ec9b39ffdc01dc7b238f0ed83db9791e92695147289ec3a048342403358a&w=1060'}
              alt="Company"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col lg="5" md="5">
            <img
              src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?t=st=1727689194~exp=1727692794~hmac=0e65af01dc13974175e3654570a87f322845bf7cf92856ddc01188c3c7460ab1&w=1060"
              alt="Mission"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col lg="6" md="6">
            <h3 className="about-title">Our Mission</h3>
            <p>
              Our mission is to empower individuals through education. We
              believe that knowledge is the key to unlocking potential and
              achieving success. We are committed to providing high-quality
              courses that are accessible and affordable.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h3 className="about-title">Meet Our Team</h3>
          </Col>
          <Col lg="4" md="4" className="text-center">
            <img
              src={teamImg1}
              alt="Team Member"
              className="img-fluid rounded-circle mb-3"
            />
            <h5>John Doe</h5>
            <p>CEO</p>
          </Col>
          <Col lg="4" md="4" className="text-center">
            <img
              src={teamImg2}
              alt="Team Member"
              className="img-fluid rounded-circle mb-3"
            />
            <h5>Jane Smith</h5>
            <p>CTO</p>
          </Col>
          <Col lg="4" md="4" className="text-center">
            <img
              src={teamImg3}
              alt="Team Member"
              className="img-fluid rounded-circle mb-3"
            />
            <h5>Mike Johnson</h5>
            <p>COO</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPg;