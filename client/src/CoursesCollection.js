import React from "react";

import CoursesCard from "./CoursesCard";

function CoursesCollection({ coursesList, setFavorite }) {
    console.log(coursesList)
    return (
        <div className="lms-course-collection">
            <div className="course-collection">
                {coursesList.map((course) => (
                    <CoursesCard
                        key={course.id}
                        course={course}
                        addToFavorite={() => setFavorite(course)}
                    />
                ))}
            </div>
        </div>
    );
}
export default CoursesCollection;
