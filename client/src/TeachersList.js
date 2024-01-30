import React, { useState, useEffect } from 'react';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5555/teachers'); // Assuming your API endpoint is /api/teachers or adjust accordingly
        const data = await response.json();
        setTeachers(data);
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    };

    fetchTeachers();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <h2>Teachers</h2>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            <h3>{`${teacher.firstname} ${teacher.lastname}`}</h3>
            <p>Email: {teacher.email}</p>
            <p>Expertise: {teacher.expertise}</p>
            <p>Department: {teacher.department}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeacherList;
