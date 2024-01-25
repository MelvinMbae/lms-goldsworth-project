import React from "react";
import { Link } from "react-router-dom";

function CoursesCard({ course, addToEnrolledCourses }) {
  return (
    <div className="courselist-cards">
      <div>
        <h3 className="courselist-cards-h3">{course.course_name}</h3>
        <p className="courselist-cards-p">{course.description}</p>
      </div>
      <div className="view-course-btns">
        <Link to={`/courses/${course.id}`} className="courseButton">View</Link>
        <button className="courseButton" onClick={addToEnrolledCourses}>Enroll
        </button>
      </div>
    </div>
  );
}

export default CoursesCard;
