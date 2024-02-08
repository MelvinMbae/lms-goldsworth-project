// src/components/StudentList.js
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './StudentList.css'; 
import { appContext } from './utils/appContext';

const StudentList = () => {
const [searchTerm, setSearchTerm] = useState('');

const { students } = useContext(appContext)
// console.log(students)

const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
};

const filteredStudents = students.filter((student) =>
    student.firstname.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
    <div className="student-container">

            <h1 className="student-list-header">ENROLLED STUDENTS</h1>
        <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearchChange}
        />
        <div className='ag-courses_box'>
            {filteredStudents.map((student) => (
            <div className="ag-courses_item" key={student.id}>
                <Link className='ag-courses-item_link' to={`/student-view/${student.id}`}>
                <div class="ag-courses-item_bg"></div>
                    <h3 className='ag-courses-item_title'>{`${student.firstname} ${student.lastname}`}</h3>
                </Link>
                <div className='ag-courses-item_date-box'>
                    <span className='ag-courses-item_date'>Start:04.11.2022</span>
                </div>
            </div>
            ))}
        </div>
    </div>
);
};

export default StudentList;
