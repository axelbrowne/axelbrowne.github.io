import React, {useRef} from "react";
import "./Footer.css";

import { MdMailOutline } from 'react-icons/md';
import { GrSpotify} from 'react-icons/gr';
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

import { IconButton } from '@material-ui/core';
// import EmailIcon from '@material-ui/icons/Email';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import SpotifyIcon from '@material-ui/icons/Spotify';

function Footer() {
  return (
    <div className="footer">
      {/* <hr /> */}
      <div className="footer-container">
          {/* <p>
            &copy; {new Date().getFullYear()} Damián Browne
          </p> */}
        <div className="button-links">
          <MdMailOutline className="icon mail" onClick={() => window.open("mailto:damianabrowne@gmail.com", "_blank")}/>
          <FaLinkedinIn className="icon linkedin" onClick={() => window.open("https://www.linkedin.com/in/damianbrowne/", "_blank")}/>
          <FaGithub className="icon github" onClick={() => window.open("https://github.com/damianbrowne", "_blank")}/>
          {/* <FaInstagram className="icon instagram" onClick={() => window.open("https://www.instagram.com/damianbrowne/", "_blank")}/>
          <GrSpotify className="icon spotify" onClick={() => window.open("https://github.com/damianbrowne", "_blank")}/> */}
        </div>
        <div style={{clear: 'both'}}></div>
      </div>
    </div>
  );
}

export default Footer;