import React from "react";
import { Link, useLocation } from "react-router-dom";

function CoursesCard({ course, addToEnrolledCourses }) {

  const location = useLocation()
  return (
    <div className="courselist-cards">
      <div>
        <h3 className="courselist-cards-h3">{course.course_name}</h3>
      </div>
      <div className="view-course-btns">
        <Link to={`/courses/${course.id}`} className="courseButton">View</Link>
        {location.pathname === "/courses" ? <button className="courseButton" onClick={addToEnrolledCourses}>Enroll</button> : null}
      </div>
    </div>
  );
}

export default CoursesCard;
