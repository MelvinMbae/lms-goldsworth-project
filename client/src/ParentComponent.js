// ParentComponent.js

import React, { useState } from 'react';
import CommentForm from './CommentForm';

const ParentComponent = () => {
  const [comments, setComments] = useState([]);
  const [currentParentID, setCurrentParentID] = useState(1);

  const handleCommentSubmit = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
    setCurrentParentID((prevID) => prevID + 1);
  };

  return (
    <div>
      <h1>Leave Comment:</h1>
      <CommentForm parentID={currentParentID} onCommentSubmit={handleCommentSubmit} />
      <div>
        <h2>Comments:</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <strong>Parent ID: {comment.parentID}</strong>
              <p>{comment.commentText}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ParentComponent;
