// ParentComponent.js

import React, { useState } from 'react';
import CommentForm from './CommentForm';

const ParentComponent = () => {
  const [comments, setComments] = useState([]);
  const [currentParentID, setCurrentParentID] = useState(1);
  const [editIndex, setEditIndex] = useState(null);
  const [editedComment, setEditedComment] = useState('');

  const handleCommentSubmit = (newComment) => {
    if (editIndex !== null) {
      // If in edit mode, update the comment
      const updatedComments = [...comments];
      updatedComments[editIndex].commentText = newComment.commentText;
      setComments(updatedComments);
      setEditIndex(null);
      setEditedComment('');
    } else {
      // Otherwise, add a new comment
      setComments((prevComments) => [...prevComments, newComment]);
      setCurrentParentID((prevID) => prevID + 1);
    }
  };

  const handleDeleteComment = (index) => {
    setComments((prevComments) => {
      const updatedComments = [...prevComments];
      updatedComments.splice(index, 1);
      return updatedComments;
    });
  };

  const handleEditComment = (index) => {
    setEditIndex(index);
    setEditedComment(comments[index].commentText);
  };

  return (
    <div>
      <h1>Leave Comment:</h1>
      <CommentForm
        parentID={currentParentID}
        onCommentSubmit={handleCommentSubmit}
        editedComment={editedComment}
        setEditedComment={setEditedComment}
      />
      <div>
        <h2>Comments:</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <strong>Parent ID: {comment.parentID}</strong>
              {editIndex === index ? (
                <input
                  type="text"
                  value={editedComment}
                  onChange={(e) => setEditedComment(e.target.value)}
                />
              ) : (
                <p>{comment.commentText}</p>
              )}
              {editIndex === index ? (
                <button onClick={() => handleCommentSubmit({ parentID: comment.parentID, commentText: editedComment })}>
                  Save
                </button>
              ) : (
                <>
                  <button onClick={() => handleEditComment(index)}>Edit Comment</button>
                  <button onClick={() => handleDeleteComment(index)}>Delete Comment</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ParentComponent;


