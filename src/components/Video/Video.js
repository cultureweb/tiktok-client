import React, { useRef, useState } from "react";
import VideoFooter from "../VideoFooter/VideoFooter";
import VideoSidebar from "../VideoSidebar/VideoSidebar";
import "./Video.css";

const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  shares,
  messages,
}) => {
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef(false);

  const handleVideoPress = () => {
    // if video is playing
    if (playing) {
      // stop it..
      videoRef.current.pause();
      setPlaying(false);
    }
    // otherwise if it's not playing
    else {
      // play it
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        ref={videoRef}
        className="video__player"
        src={url}
        loop
        muted
        type="video/mp4"
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
};

export default Video;
