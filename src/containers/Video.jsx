import React, { useState, useRef, useEffect } from 'react';
import { usePageVisibility } from '../hooks/usePageVisibility';
import { Link } from 'react-router-dom';

// Components
import Button from '../components/Button/Button';
import RailsSVG from '../components/RailsSVG';
// Styles
import '../styles/components/Video.scss';

const Video = () => {
  const videoPlayer = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const isVisible = usePageVisibility();

  useEffect(() => {
    videoPlayer.current.playing
      ? isVisible === false
        ? videoPlayer.current.pause()
        : videoPlayer.current.play()
      : '';
  }, [isVisible]);

  return (
    <>
      <div className="video">
        <h1 className="video__title">Termina el Video Para Continuar</h1>
        <video
          className="video__player"
          ref={videoPlayer}
          onEnded={() => {
            setShowButton(true);
          }}
          width="1035px"
          height="503px"
          controls
          src="../assets/video.mp4"
          type="video/mp4"
        ></video>
        {showButton && (
          <Link to="/data-page">
            <Button text="Iniciar" />
          </Link>
        )}
        <div className="video__rails">
          <RailsSVG />
        </div>
      </div>
    </>
  );
};

export default Video;
