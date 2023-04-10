import React from 'react'

function VideoPlayer(){
  return (
    <div className="App">
      <iframe
        width="300"
        height="200"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        allowFullScreen
        title="Thinking in React"
      />
    </div>
  )
}

export default VideoPlayer

