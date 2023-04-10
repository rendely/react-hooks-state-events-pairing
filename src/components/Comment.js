import React from 'react'

function Comment({ comment }) {
  return (<div>
    <div>
      <strong>{comment.user}</strong>
    </div>
    <div>
      {comment.comment}
    </div>
  </div>)
}

export default Comment

