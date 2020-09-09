import React from 'react';

export default function CommentBox() {
  return (
    <form className="comment-box">
      <textarea></textarea>
      <button style={{ display: 'block' }}>Add comment</button>
    </form>
  );
}
