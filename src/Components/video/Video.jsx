import { useRef } from "react";
import Button from "../common/Button";

function VideoPlayer() {
  const videoref=useRef(null)

  const handleVideoPlay=(e)=>{

   videoref.current.Play();
   
   console.log("video",videoref)
   
  }
  const handleVideoPause =()=>{
    videoref.current.Pause();
  }
  return (
    <div>
      <video ref={videoref} data-testid="video-container" width="400" controls>
        <source
          src="https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/28028/guf8bBRwEwJsL01geZELebV0BmSX3jqkKNPVpLNV.mp4"
          type="video/mp4"
        />
      </video>
      <div>
        <Button onClick={handleVideoPlay}>
          PLAY
        </Button>
        <Button onClick={handleVideoPause}>
          PAUSE
        </Button>
        <Button>
          SKIP 30 SECONDS
        </Button>
      </div>
    </div>
  );
}

export default VideoPlayer;
