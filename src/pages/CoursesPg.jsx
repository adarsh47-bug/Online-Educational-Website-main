import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import courseImg1 from "../assests/images/web-design.png";
import courseImg2 from "../assests/images/graphics-design.png";
import courseImg3 from "../assests/images/ui-ux.png";
import "../components/Courses-section/courses.css";
import CourseCard from "../components/Courses-section/CourseCard";
import Typed from "typed.js";


const coursesData = [
  {
    id: "01",
    title: "Web Design BootCamp-2022 for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },
  {
    id: "02",
    title: "Professional Graphics Design, Adobe XD",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },
  {
    id: "03",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  const [visibleCourses, setVisibleCourses] = useState(9);
  const buttonRef = useRef(null);

  const showMoreCourses = () => {
    setVisibleCourses((prevVisibleCourses) => prevVisibleCourses + 3);
    if (buttonRef.current && typeof buttonRef.current.scrollIntoView === 'function') {
      buttonRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const options = {
      strings: ["Our Popular Courses"],
      typeSpeed: 20,
      backSpeed: 1000,
      loop: true,
      showCursor: false
    };

    const typed = new Typed("#typed-element2", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (

    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2 id="typed-element2">Our Popular Courses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>
            </div>
          </Col>
          {[...coursesData, ...coursesData, ...coursesData, ...coursesData, ...coursesData, ...coursesData, ...coursesData, ...coursesData, ...coursesData, ...coursesData].slice(0, visibleCourses).map((item) => (
            <Col lg="4" md="6" sm="6" key={item.id} className="mb-4">
              <CourseCard item={item} />
            </Col>
          ))}
          <Col lg="12" className="text-center mt-4">
            {visibleCourses < [...coursesData, ...coursesData, ...coursesData, ...coursesData, ...coursesData, ...coursesData, ...coursesData, ...coursesData, ...coursesData, ...coursesData].length && (
              <Button color="primary" onClick={showMoreCourses} ref={buttonRef}>
                Show More Courses
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Courses;