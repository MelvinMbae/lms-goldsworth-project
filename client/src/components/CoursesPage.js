import React from 'react';

const CoursesPage = () => {
  return (
    <div className="courses-page">
      <h2>Courses Allocated</h2>
      <table>
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Subject/Course</th>
            <th>Mode and Year of study</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td><a href='/introduction'>Bio 4900</a></td>
            <td>Bio 4900</td>
            <td>Virtual-Y4</td>
          </tr>
          <tr>
            <td>Bio 1109</td>
            <td>Bio 4900</td>
            <td>B3(Physical-Y1</td>
          </tr>
          <tr>
            <td>Bio 5200</td>
            <td>Bio 4900</td>
            <td>Virtual-Y5</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesPage;