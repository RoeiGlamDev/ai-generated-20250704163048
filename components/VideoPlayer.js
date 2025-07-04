import Video from '../public/video.mp4';

const VideoPlayer = () => {
  return (
    <div>
      <video width="100%" height="auto" controls>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;