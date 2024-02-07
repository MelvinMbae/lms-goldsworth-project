import React from 'react';
import TeacherComponent from './TeacherComponent';
import './Comments.css';

function TeacherComment() {
  return (
    <div className="ParentComment">
      <div className="container">
        <TeacherComponent />
      </div>
    </div>
  );
}

export default TeacherComment;
