import React from "react";
import ModalVideo from "react-modal-video";

const VideoPopup = ({
  isVideoOpen,
  setIsVideoOpen,
  videoId 
  
}) => {
  return (
    <>
      <ModalVideo
        channel="custom"
        autoplay={true}
        isOpen={isVideoOpen}
        // videoId={videoId}
        url={videoId}
        onClose={() => setIsVideoOpen(false)}
      />
    </>
  );
};

export default VideoPopup;
