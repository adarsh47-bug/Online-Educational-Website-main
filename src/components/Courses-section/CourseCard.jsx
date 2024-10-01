import React from "react";
import { Link } from "react-router-dom";

const CourseCard = (props) => {
  const { imgUrl, title, lesson, students, rating, id = '01' } = props.item;

  return (
    <div className="single__course__item" style={{ border: '1px solid black' }}>
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1">
            <i class="ri-book-open-line"></i> {lesson} Lessons
          </p>

          <p className="students d-flex align-items-center gap-1">
            <i class="ri-user-line"></i> {students}K
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1">
            <i class="ri-star-fill"></i> {rating}K
          </p>

          <p className="enroll d-flex align-items-center gap-1">
            <Link to={`/enroll/${id}`}>
              <button style={{ background: "white", border: '1px solid black', borderRadius: '10px', padding: '0 1rem', boxShadow: 'initial' }}>Enroll</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;


