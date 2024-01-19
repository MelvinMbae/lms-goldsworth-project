import React from "react";
import { Link } from "react-router-dom";

function CoursesCard({ course, addToEnrolledCourses }) {
  return (
    <div className="course-cards">
      <div className="course-image">
        <img
          src={course.imageUrl}
          alt="course-cover"
        />
        <h3>{course.course_name}</h3>
        <p>{course.description}</p>
      </div>
      <div className="view-add-btns">
        <button className="courseButton">
          <Link to={`/courses/${course.id}`}>View</Link>
        </button>
        <Like onClick={addToEnrolledCourses} className="iconButton"/>
      </div>
    </div>
  );
}

export default CoursesCard;
