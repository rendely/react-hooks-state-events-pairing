import React from 'react'
import Comment from './Comment';


function CommentSection({comments, showComments}){
  return (<div style={{ display: showComments ? "inline" : "none" }}>
    <h2>{comments.length} Comments</h2>
    {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
  </div>)
}

export default CommentSection

