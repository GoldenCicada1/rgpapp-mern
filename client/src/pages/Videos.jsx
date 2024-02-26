import { useRef, useState } from "react";
import VideoFooter from "../components/videoComponents/VideoFooter";
import VideoSideBar from "../components/videoComponents/VideoSideBar";

export default function Videos() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      } else {
        videoRef.current.play();
        setPlaying(true);
      }
    }
  };

  return (
    <div className="relative flex">
    <div className="flex-1 relative">
      <video
        onClick={handleVideoPress}
        className="w-full h-auto object-cover"
        loop
        ref={videoRef}
        playsInline
        src="https://firebasestorage.googleapis.com/v0/b/rgpapp-mern.appspot.com/o/6.mp4?alt=media&token=a12dde1e-e55f-4140-b207-015042e4eef8"
      ></video>
      <VideoFooter />
      </div>
      <div className="absolute p-3 flex-row-1 right-0">
      <VideoSideBar />

      </div>
    </div>
  );
}
