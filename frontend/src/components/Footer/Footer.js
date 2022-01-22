import React from 'react';
import { socialLinks } from '../../data';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
          <p className="brand">BakedByLey</p>
          <div className="social-container">
            {socialLinks.map((link) => {
              const { id, url, icon } = link;
              return (
                <a href={url} key={id}>
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <div className="flex">
            <FaPhoneAlt />
            <p>0915 608 0665</p>
          </div>
          <div className="flex">
            <FaEnvelope />
            <p>portugueslea65@gmail.com</p>
          </div>
        </div>
        <div>
          <div className="flex location">
            <FaMapMarkerAlt />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
        </div>
      </div>
      <p className="copyright">© 2022 BakebyLey. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
