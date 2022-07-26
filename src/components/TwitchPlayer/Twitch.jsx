import React from 'react';
import ReactPlayer from 'react-player/twitch';
import './Twitch.css';

function Twitch() {
  return (
    <div className="twitch-player">
      <ReactPlayer
        // url={'https://www.twitch.tv/djjosehernandez_'}
        url={'https://www.twitch.tv/feldscarr'}
        config={{
          options: {
            theme: 'dark',
            autoplay: true,
          },
        }}
      />
    </div>
  );
}

export default Twitch;
