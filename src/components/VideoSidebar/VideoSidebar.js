import React, { useState } from "react";
import "./VideoSidebar.css";
import {
  Favorite as FavoriteIcon,
  Message as MessageIcon,
  Share as ShareIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from "@material-ui/icons";

const VideoSidebar = ({ likes, shares, messages }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon onClick={(e) => setLiked(false)} fontSize="large" />
        ) : (
          <FavoriteBorderIcon
            onClick={(e) => setLiked(true)}
            fontSize="large"
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
