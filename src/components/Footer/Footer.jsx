import React from 'react';
import './Footer.css';
import ReactGA from 'react-ga';

function Footer() {
  return (
    <>
      {/* Socials */}
      <div className="footer__socials">
        <ReactGA.OutboundLink
          eventLabel="Instagram_toSocial"
          // to="https://www.instagram.com/djjosehernandez/"
          to="https://www.instagram.com/feldscarr/"
          target="_blank"
          rel="noopener noreferrer preload"
          className="fab fa-instagram"
          aria-label="Instagram"
        >
          {' '}
        </ReactGA.OutboundLink>
        <ReactGA.OutboundLink
          eventLabel="Twitch_toSocial"
          // to="https://www.twitch.tv/djjosehernandez_"
          to="https://www.twitch.tv/feldscarr"
          target="_blank"
          rel="noopener noreferrer preload"
          className="fab fa-twitch"
          aria-label="Twitch"
        >
          {' '}
        </ReactGA.OutboundLink>
        <ReactGA.OutboundLink
          eventLabel="Soundcloud_toSocial"
          // to="https://soundcloud.com/djjosehernandez"
          to="https://soundcloud.com/feld-scarr"
          target="_blank"
          rel="noopener noreferrer preload"
          className="fab fa-soundcloud"
          aria-label="Soundcloud"
        >
          {' '}
        </ReactGA.OutboundLink>
        {/* <ReactGA.OutboundLink
          eventLabel="Mixcloud_toSocial"
          to="https://www.mixcloud.com/DjJoseHernandez/"
          target="_blank"
          rel="noopener noreferrer preload"
          className="fab fa-mixcloud"
          aria-label="Mixcloud"
        >
          {' '}
        </ReactGA.OutboundLink> */}
      </div>
      <footer id="footer">
        <div className="footer-copyright text-center py-3">
          © 2022 A Nicholas Guerrero Project
        </div>
      </footer>
    </>
  );
}

export default Footer;
