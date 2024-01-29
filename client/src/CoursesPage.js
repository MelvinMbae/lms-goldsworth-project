import CoursesCollection from "./CoursesCollection";
import React from "react";

function CoursesPage({ coursesList }) {

    return (
        <div>
            <div className="courses-page">
                <div className="courses">
                    <CoursesCollection coursesList={coursesList} />
                </div>
            </div>
        </div>
    );
}
export default CoursesPage;