import { useState } from 'react';
// Change the import statement to the correct path
import './Reportcard.css'; // Import the CSS file

const ReportCard = () => {
  const [grades, setGrades] = useState({
    math: { marks: '', grade: '', remarks: '' },
    science: { marks: '', grade: '', remarks: '' },
    english: { marks: '', grade: '', remarks: '' },
  });

  const [studentInfo, setStudentInfo] = useState({
    studentID: '',
    studentName: '',
    attendance: '',
  });

  const [teacherRemarks, setTeacherRemarks] = useState({
    aggregatedMarks: '',
    finalGrade: '',
  });

  // Simple aggregation function (sum of marks)
  const calculateAggregatedMarks = () => {
    const { math, science, english } = grades;
    const aggregatedMarks =
      parseInt(math.marks) + parseInt(science.marks) + parseInt(english.marks);
    return isNaN(aggregatedMarks) ? 'N/A' : aggregatedMarks;
  };

  // Simple function to calculate the final grade
  const calculateFinalGrade = () => {
    const aggregatedMarks = calculateAggregatedMarks();
    if (aggregatedMarks !== 'N/A') {
      const average = aggregatedMarks / 3;
      if (average >= 90) return 'A';
      if (average >= 80) return 'B';
      if (average >= 70) return 'C';
      return 'F';
    }
    return 'N/A';
  };

  return (
    <div>
      {/* Student Report Card Header */}
      <div className="header">
        <h1>Student Report Card</h1>
      </div>

      {/* Academic Year Top Bar */}
      <div className="top-bar">
        <h3>Academic Year: 2024-2025</h3>
      </div>

      {/* Term One Top Bar */}
      <div className="top-bar">
        <h3>Term: One</h3>
      </div>

      {/* Student Information Section */}
      <div className="student-info">
        <div>
          <label>Student ID:</label>
          <br />
          <input
            type="text"
            value={studentInfo.studentID}
            onChange={(e) => setStudentInfo({ ...studentInfo, studentID: e.target.value })}
          />
        </div>
        <div>
          <label>Student Name:</label>
          <br />
          <input
            type="text"
            value={studentInfo.studentName}
            onChange={(e) => setStudentInfo({ ...studentInfo, studentName: e.target.value })}
          />
        </div>
        <div>
          <label>Attendance:</label>
          <br />
          <input
            type="text"
            value={studentInfo.attendance}
            onChange={(e) => setStudentInfo({ ...studentInfo, attendance: e.target.value })}
          />
        </div>
      </div>

      {/* Student Report Card Table */}
      <table className="report-card-table">
        <thead>
          <tr>
            <th>Unit Code</th>
            <th>Subject</th>
            <th>Marks Obtained</th>
            <th>Subject Grade</th>
            <th>Teacher's Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SD001</td>
            <td>Mathematics</td>
            <td>
              <input
                type="text"
                value={grades.math.marks}
                onChange={(e) =>
                  setGrades({
                    ...grades,
                    math: { ...grades.math, marks: e.target.value },
                  })
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={grades.math.grade}
                onChange={(e) =>
                  setGrades({
                    ...grades,
                    math: { ...grades.math, grade: e.target.value },
                  })
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={grades.math.remarks}
                onChange={(e) =>
                  setGrades({
                    ...grades,
                    math: { ...grades.math, remarks: e.target.value },
                  })
                }
              />
            </td>
          </tr>
          {/* Repeat the above row structure for other subjects */}
          <tr>
            <td>SD002</td>
            <td>Science</td>
            <td>
              <input
                type="text"
                value={grades.science.marks}
                onChange={(e) =>
                  setGrades({
                    ...grades,
                    science: { ...grades.science, marks: e.target.value },
                  })
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={grades.science.grade}
                onChange={(e) =>
                  setGrades({
                    ...grades,
                    science: { ...grades.science, grade: e.target.value },
                  })
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={grades.science.remarks}
                onChange={(e) =>
                  setGrades({
                    ...grades,
                    science: { ...grades.science, remarks: e.target.value },
                  })
                }
              />
            </td>
          </tr>
          {/* Repeat the above row structure for other subjects */}
          <tr>
            <td>SD004</td>
            <td>English</td>
            <td>
              <input
                type="text"
                value={grades.english.marks}
                onChange={(e) =>
                  setGrades({
                    ...grades,
                    english: { ...grades.english, marks: e.target.value },
                  })
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={grades.english.grade}
                onChange={(e) =>
                  setGrades({
                    ...grades,
                    english: { ...grades.english, grade: e.target.value },
                  })
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={grades.english.remarks}
                onChange={(e) =>
                  setGrades({
                    ...grades,
                    english: { ...grades.english, remarks: e.target.value },
                  })
                }
              />
            </td>
          </tr>
        </tbody>
      </table>

      {/* Placeholders for Teacher Input */}
      <div className="teacher-input">
        <p>Teacher's Input:</p>
        <label>Aggregated Marks:</label>
        <input
          type="text"
          value={teacherRemarks.aggregatedMarks}
          onChange={(e) => setTeacherRemarks({ ...teacherRemarks, aggregatedMarks: e.target.value })}
        />
        <label>Final Grade:</label>
        <input
          type="text"
          value={teacherRemarks.finalGrade}
          onChange={(e) => setTeacherRemarks({ ...teacherRemarks, finalGrade: e.target.value })}
        />
      </div>
    </div>
  );
};

export default ReportCard;


