import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import courseImg1 from "../assests/images/web-design.png";
import courseImg2 from "../assests/images/graphics-design.png";
import courseImg3 from "../assests/images/ui-ux.png";
import courseImg01 from "../assests/images/web-development.png";
import courseImg02 from "../assests/images/kids-learning.png";
import courseImg03 from "../assests/images/seo.png";
import courseImg04 from "../assests/images/ui-ux.png";
import "./EnrollPg.css";

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
  {
    id: "1",
    title: "Basic Web Development Course",
    imgUrl: courseImg01,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "2",
    title: "Coding for Junior Basic Course",
    imgUrl: courseImg02,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "3",
    title: "Search Engine Optimization - Basic",
    imgUrl: courseImg03,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "4",
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
  },
];

const EnrollPg = () => {
  const { courseId } = useParams();
  const nav = useNavigate();
  const course = coursesData.find((course) => course.id === courseId);

  if (!course) {
    return <div>Course not found</div>;
  }

  const handleEnroll = (text) => {
    alert(`Your Enrollment successful in ${text}!`);
    nav("/");
  };

  return (
    <div className="enroll-page">
      <h1 className="course-title">{course.title}</h1>
      <p className="course-details">Lessons: {course.lesson}</p>
      <p className="course-details">Students: {course.students}</p>
      <p className="course-details">Rating: {course.rating}</p>
      <img className="course-image" src={course.imgUrl} alt={course.title} />
      <div className="button-container">
        <button className="enroll-button" onClick={() => handleEnroll(course.title)}>Enroll</button>
        {/* <button className="home-button" onClick={handleGoHome}>Go to Home</button> */}
      </div>
    </div>
  );
};

export default EnrollPg;