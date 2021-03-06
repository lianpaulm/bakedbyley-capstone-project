import React from 'react';
import { socialLinks } from '../../data';
import './SocialLinks.css';

const SocialLinks = () => {
  return (
    <div className="social-container">
      {socialLinks.map((link) => {
        const { id, url, icon } = link;
        return (
          <a href={url} key={id} target="_blank" rel="noreferrer">
            {icon}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
