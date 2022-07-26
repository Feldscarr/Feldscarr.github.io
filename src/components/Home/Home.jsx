import React from 'react';
import './Home.css';
// import Background from './djjosehernandez.png';
import Background from './djfeldscarr.png';

var sectionStyle = {
  top: '0',
  bottom: '0',
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundImage: `url('${Background}')`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

function Home() {
  return (
    <>
      <div className="mixcloud-home">
        {/* <iframe
          title="mixcloud-home-player"
          width="100%"
          height="60"
          // src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&autoplay=1&feed=%2FDjJoseHernandez%2F"
          src="https://soundcloud.com/feld-scarr/hyperdrive1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          frameBorder="0"
          allow="autoplay"
        ></iframe> */}
        <iframe width="100%" height="166" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1277151628&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      </div>
      <div className="container-book-now">
        <a className="cta" href="mailto:nick16.guerrero@gmail.com?subject=Booking inquiry">
          <button className='book-now'>BOOK NOW</button>
        </a>
      </div>
      <section rel="preload" style={sectionStyle}>
        {' '}
      </section>
    </>
  );
}

export default Home;
