import { useContext, Fragment, useState } from "react"
import { Link } from "react-router-dom"
import { appContext } from "../../utils/appContext"

function ParentDash() {

    const announcements = [
        { id: 1, title: "Important Notice", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { id: 2, title: "Upcoming Event", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 3, title: "Holiday Closure", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisUt enim ad minim veniam, quis nostrud exercitation ullamco laboris..." },
    ];


    const [selectedStudent, setSelectedStudent] = useState(null);

    const user = {
        child: [
            {
                "assignments": [],
                "courses": [{ "id": 1, "course_name": "Python fundamentals" }],
                "docs": [],
                "email": "Trevour.Kitavi@student.goldworth.com",
                "image_url": null,
                "name": "Trevour Kitavi",
                "report_card": [{ "id": 1, "topic": "Cyber_Security Discuss man before.", "grade": 80 },
                { "id": 2, "topic": "Machine Learning", "grade": 80 },
                { "id": 3, "topic": "Topic 2", "grade": 70 },
                { "id": 4, "topic": "React Native", "grade": 66 },
                { "id": 5, "topic": "Mobile Dev", "grade": 78 },
                { "id": 8, "topic": "Machine Learning for dummies", "grade": 99 }],
                "student_id": 11
            },
            {
                "assignments": [],
                "courses": [{ "id": 1, "course_name": "JavaScript Basics" }, { "id": 2, "course_name": "React Fundamentals" }],
                "docs": [],
                "email": "Alvin.Kitavi@student.goldworth.com",
                "image_url": null,
                "name": "Alvin Kitavi",
                "report_card": [{ "id": 1, "topic": "Data Structures", "grade": 80 }, { "id": 2, "topic": "Machine Learning", "grade": 80 }],
                "student_id": 12
            }
        ],
        email: 'melvin@gmail.com',
        image_url: null,
        name: 'Melvin Mbae',
        parent_id: 11
    };

    const handleStudentSelect = (event) => {
        const selectedStudentId = parseInt(event.target.value);
        const student = user.child.find(student => student.student_id === selectedStudentId);
        setSelectedStudent(student);
    };

    return (
        <div className="parentdash-contents">
            <h1>Parent Dashboard</h1>
            <div className="parentdash-banner">
                <div className="parentdash-message">
                    <h2>Welcome to Goldworth</h2>
                    <h3>Learn more about your child's learning and progress</h3>
                    <a href="https://www.youtube.com/watch?v=ezbJwaLmOeM&ab_channel=iSpring" ><b>Watch the video</b></a>
                </div>
               

            </div>

            <div className="announcement-title">
                <u><h3>Announcements</h3></u>
            </div>
            <div className="announcement-section">

                {announcements.map((announcement) => (
                    <div key={announcement.id} className="announcement">
                        <h3>{announcement.title}</h3>
                        <p>{announcement.content}</p>
                    </div>
                ))}
            </div>
            <div className="announcement-title">
                <u><h3>View Students</h3></u>
            </div>
            <div className="student-dropdown">
                <select id="student-select" onChange={handleStudentSelect}>
                    <option value="">Select a Student</option>
                    {user.child.map((student) => (
                        <option key={student.student_id} value={student.student_id}>{student.name}</option>
                    ))}
                </select>
            </div>

            <div className="viewstudent-section">
                {selectedStudent && (
                    <div className='parent-student-data'>
                        <u><h3>Student Details</h3></u>
                        <h4>Name: {selectedStudent.name}</h4>
                        <h4>Email: {selectedStudent.email}</h4>
                        <h4>Student ID: STD_{selectedStudent.student_id}</h4>
                    </div>

                )}
                {selectedStudent && (
                    <div className='parent-student-data'>
                        <u><h3>Courses Enrolled</h3></u>
                        {selectedStudent.courses.map((course) => (
                            <p key={course.id}>{course.course_name}</p>
                        ))}
                    </div>
                )}
                {selectedStudent && (
                    <div className='parent-student-data'>
                        <u><h3>Past Performance</h3></u>
                        {selectedStudent.report_card.map((report) => (
                            <div key={report.id}>
                                <p>{report.topic}: {report.grade}%</p>
                            </div>
                        ))}
                    </div>
                )}


            </div>
            {/* <div className="parent-section">
                <h2>Name: {user.name}</h2>
                <h3>Email: {user.email}</h3>
                <h3>Parent_ID: PTID_{user.parent_id}</h3>
            </div> */}

        </div>
    );
}

export default ParentDash;