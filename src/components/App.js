import React, {useState} from 'react';
import video from "../data/video.js";
import VideoPlayer from './VideoPlayer';
import VideoDescription from './VideoDescription';
import VideoActions from './VideoActions';
import CommentSection from './CommentSection';


function App() {
  console.log("Here's your data:", video);
  const {embedUrl, title, views, createdAt, comments} = video;
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  const [showComments, toggleComments] = useState(true);

  console.log(upvotes);
  return (

    <div className="App">
      <VideoPlayer url={embedUrl} />
      <VideoDescription title={title} views={views} createdAt={createdAt} />
      <VideoActions 
        upvotes={upvotes} 
        onChangeUpvotes={setUpvotes} 
        onChangeDownvotes={setDownvotes} 
        downvotes={downvotes} 
        toggleComments={toggleComments}
        showComments={showComments}
        />     
      <CommentSection comments={comments} showComments={showComments} />
    </div>
    
  );
}

export default App;
