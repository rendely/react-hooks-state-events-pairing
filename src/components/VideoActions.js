import React from 'react'

function VideoActions({upvotes, downvotes, onChangeUpvotes, onChangeDownvotes, toggleComments, showComments}){

  return (<div>
    <button onClick={() => onChangeUpvotes(upvotes+1)}>👍 {upvotes}</button>
    <button onClick={() => onChangeDownvotes(downvotes-1)}>👎 {downvotes}</button>
    <br></br>
    <button onClick={() => toggleComments(!showComments)}>{showComments ? "Hide comments" : "Show comments"}</button>
  </div>)
}

export default VideoActions

