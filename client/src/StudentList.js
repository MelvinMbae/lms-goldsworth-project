// src/components/StudentList.js
import React, { useState } from 'react';

const StudentList = ({ students, onSelectStudent }) => {
const [selectedGrade, setSelectedGrade] = useState('All');
const [searchInput, setSearchInput] = useState('');

const filterStudents = () => {
    let filteredStudents = students;

    // Filter by grade
    if (selectedGrade !== 'All') {
    filteredStudents = filteredStudents.filter(student => student.grade === selectedGrade);
    }

    // Filter by search input
    if (searchInput.trim() !== '') {
    const searchTerm = searchInput.toLowerCase();
    filteredStudents = filteredStudents.filter(student => student.name.toLowerCase().includes(searchTerm));
    }

    return filteredStudents;
};

const handleSelectChange = (e) => {
    setSelectedGrade(e.target.value);
};

const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
};

return (
    <div>
    <h2>Student List</h2>
    <div>
        <label>
        Filter by Grade:
        <select value={selectedGrade} onChange={handleSelectChange}>
            <option value="All">All</option>
            <option value="A">A</option>
            <option value="B">A-</option>
            <option value="B">B+</option>
            <option value="B">B</option>
            <option value="B">B-</option>
            </select>
        </label>

        <label>
        Search by Name:
        <input type="text" value={searchInput} onChange={handleSearchInputChange} />
        </label>

        <button onClick={() => onSelectStudent(null)}>Clear Selection</button>
    </div>

    <ul>
        {filterStudents().map((student) => (
        <li key={student.id} onClick={() => onSelectStudent(student)}>
            {student.name}
        </li>
        ))}
    </ul>
    </div>
);
};

export default StudentList;
