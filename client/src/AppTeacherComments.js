import React from 'react';
import TeacherComment from './AppTeacherComments'; // Import the TeacherComments component

const AppTeacherComments = () => { // Rename the constant
  return (
    <div className="app-container"> {/* Add a class for styling */}
      <h1>My Application</h1>
      <TeacherComment /> {/* Render the TeacherComments component */}
    </div>
  );
};

export default AppTeacherComments;
