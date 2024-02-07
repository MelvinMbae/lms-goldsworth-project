// CommentForms.js

import React, { useState } from 'react';

const CommentForm = ({ parentID, onCommentSubmit }) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      onCommentSubmit({
        parentID,
        commentText: comment,
      });
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Comment:
        <textarea value={comment} onChange={handleCommentChange} />
      </label>
      <button type="submit">Submit Comment</button>
    </form>
  );
};

export default CommentForm;