import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function CoursesPage() {
  const [courseList, setCourseList] = useState([]);
 

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5555/courses');
        const data = await response.json();
        setCourseList(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div>
      <div className="course-cont">
        <h1 className="course-header">All Courses</h1>
      </div>
      <div className='course-list'>
        {courseList.map((course) => (
          <div className='course-card-content' key={course.id}>
            <img
              id='courses-img'
              src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
            />
            <h3 id='course-header'>{course.course_name}</h3>
            {/* <p>{course.description}</p> */}
            <Link to={`/courses/${course.id}`}>
              <button className='courses-btn' >View Course</button>
              </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesPage;
