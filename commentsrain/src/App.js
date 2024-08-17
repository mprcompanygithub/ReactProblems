import React, { useState, useEffect } from "react";
import "./App.css";

const Comment = ({ text, username, profilePic, style }) => {
  return (
    <div className="comment" style={style}>
      <img src={profilePic} alt={username} className="profile-pic" />
      <div className="comment-content">
        <span className="username">{username}</span>
        <span className="comment-text">{text}</span>
      </div>
    </div>
  );
};

const App = () => {
  const commentList = [
    {
      username: "users",
      text: "Add as many users You want",
      profilePic: "https://via.placeholder.com/40",
    },
  ];

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const batchDuration = 40000; // 20 seconds in milliseconds
    const batchInterval = 40000; // 20 seconds between batches

    const displayBatch = (batch, delay) => {
      setTimeout(() => {
        const newComments = batch.map((comment, index) => ({
          ...comment,
          style: {
            left: Math.random() * 90 + "%",
            animationDuration: Math.random() * 3 + 2 + "s",
            animationDelay: index * 0.5 + "s", // Stagger start times
          },
        }));

        setComments(newComments);

        // Clear the comments after they fall off the screen
        setTimeout(() => {
          setComments([]);
        }, batchDuration);
      }, delay);
    };

    displayBatch(commentList.slice(0, 20), 0);
  }, []);

  return (
    <div className="chat-container">
      <img src="boy3.png" alt="Background" className="background-image" />
      {comments.map((comment, index) => (
        <Comment
          key={index}
          username={comment.username}
          text={comment.text}
          profilePic={comment.profilePic}
          style={comment.style}
        />
      ))}
    </div>
  );
};

export default App;
