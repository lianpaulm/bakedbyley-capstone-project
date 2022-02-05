import React from 'react';
import SocialLinks from '../Hero/SocialLinks';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
          <p className="brand">BakedByLey</p>
          <div className="social-container">
            <SocialLinks />
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
              Blk 1, lot 60, Sampaguita street. Maligaya Park Subdivision,
              Novaliches Quezon City
            </p>
          </div>
        </div>
      </div>
      <p className="copyright">© 2022 BakebyLey. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
