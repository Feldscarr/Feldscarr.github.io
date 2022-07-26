import React from 'react';
import ReactPlayer from 'react-player/mixcloud';
import './Mixcloud.css';

function Mixcloud() {
  return (
    <div className="mixcloud-player">
      <ReactPlayer
        height="200px"
        width="100%"
        // url="https://www.mixcloud.com/DjJoseHernandez/makingprorgess-037/"
        url="https://soundcloud.com/feld-scarr/hyperdrive1"
        config={{
          options: {
            autoplay: true,
          },
        }}
      />
    </div>
  );
}

export default Mixcloud;
