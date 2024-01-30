import CoursesCard from "./CoursesCard";

function CoursesPage({ coursesList , setFavorite }) {

    return (
        <div>
            <div className="courses-page">
                <div className="courses">
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
                </div>
            </div>
        </div>
    );
}
export default CoursesPage;