import React from "react";
import "./VideoFooter.css";
import { MusicNote as MusicNoteIcon } from "@material-ui/icons";
import Ticker from "react-ticker";

const VideoFooter = ({ channel, description, song }) => {
  return (
    <div className="videoFooter">
      <div div className="videoFooter__text">
        <h3>{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
};

export default VideoFooter;
