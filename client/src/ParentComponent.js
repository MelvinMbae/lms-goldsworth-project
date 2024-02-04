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

  const handleDeleteComment = (index) => {
    setComments((prevComments) => {
      const updatedComments = [...prevComments];
      updatedComments.splice(index, 1);
      return updatedComments;
    });
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <CommentForm parentID={currentParentID} onCommentSubmit={handleCommentSubmit} />
      <div>
        <h2>Comments:</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <strong>Parent ID: {comment.parentID}</strong>
              <p>{comment.commentText}</p>
              <button onClick={() => handleDeleteComment(index)}>Delete Comment</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ParentComponent;

