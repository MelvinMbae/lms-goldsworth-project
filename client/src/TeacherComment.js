import React, { useState } from 'react';
import './TeacherComments.css'; // Import CSS file

const TeacherComment = () => {
  // State to manage teacher comments
  const [comments, setComments] = useState([]);

  // Function to handle adding a new comment
  const addComment = () => {
    const newComment = prompt('Enter teacher comment:');
    if (newComment) {
      setComments([...comments, newComment]);
    }
  };

  return (
    <div className="teacher-comments-container"> {/* Add a class for styling */}
      <h2>Teacher's Comments</h2>
      <button onClick={addComment}>Add Comment</button>
      <ul className="comment-list"> {/* Add a class for styling */}
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherComment;
