import React from 'react'

function VideoDescription({title,views,createdAt}){
  return (<div>
    <h1>{title}</h1>
    <div>Views: {views} | Created: {createdAt}</div>
  </div>)
}

export default VideoDescription

