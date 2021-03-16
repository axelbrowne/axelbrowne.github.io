import React from "react";
import "./Footer.css";

import { MdMailOutline } from 'react-icons/md';
import { GrSpotify} from 'react-icons/gr';
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

import { IconButton } from '@material-ui/core';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
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