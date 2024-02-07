import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './IndividualStudent.css';
import { appContext } from './utils/appContext';

const StudentList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { students } = useContext(appContext);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredStudents = students.filter((student) =>
        student.firstname.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="student-container">
                <h1 className="student-list-header">Students</h1>
            </div>
            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <div className='student-list'>
                {filteredStudents.map((student) => (
                    <div className="student-info" key={student.id}>
                        <Link to={`/student-view/${student.id}`} className="student-card">
                            <div>
                                <h3>{`${student.firstname} ${student.lastname}`}</h3>
                                <p>Student ID: {student.id}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudentList;
