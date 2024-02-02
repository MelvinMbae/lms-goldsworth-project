import React from 'react';
import ParentComponent from './ParentComponent';
import './Comments.css';

function ParentComments() {
  return (
    <div className="ParentComment">
      <div className="container">
        <ParentComponent />
      </div>
    </div>
  );
}

export default ParentComments;
