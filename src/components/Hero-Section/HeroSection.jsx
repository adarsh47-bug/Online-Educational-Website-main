import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";
import { Link } from "react-router-dom";
import Typed from "typed.js";

const HeroSection = () => {
  useEffect(() => {
    const options = {
      strings: ["Anytime Anywhere <br/> Learn on your  <br/> Suitable Schedule", "Learn from the <br/> Best Instructors <br/> & Get Certified", "Learn from the <br/> Best Instructors <br/> &Get Certified"],
      typeSpeed: 20,
      backSpeed: 20,
      loop: true,
    };

    const typed = new Typed("#typed-element", options);

    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                <span id="typed-element" style={{ height: "300px" }}></span>
              </h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Aut saepe voluptatum earum delectus <br /> deserunt id iste,
                quas officiis et repellat!
              </p>
            </div>
            <div className="w-50 text-end text-center">
              <Link to="/courses">
                <button className="btn" style={{ width: '20rem', padding: '1rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                  See All Courses
                </button>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img style={{ borderRadius: "20px", boxShadow: '0 8px 10px rgba(0, 0, 0, 0.3)' }} src={'https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?t=st=1727686527~exp=1727690127~hmac=2cef7e2e11321a2dfe6b2b09718fc2c4e393da450342b3102b73faedc2645bf4&w=1060'} alt="Hero" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;