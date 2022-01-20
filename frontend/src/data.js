import React from 'react';

// nav links icons
import { AiOutlineHome } from 'react-icons/ai';
import { RiQuestionAnswerLine, RiCake2Line } from 'react-icons/ri';
// social links icons
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export const navLinks = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    url: '/products',
    text: 'products',
    icon: <RiCake2Line />,
  },
  {
    id: 3,
    url: '/faq',
    text: 'FAQ',
    icon: <RiQuestionAnswerLine />,
  },
];

export const socialLinks = [
  {
    id: 1,
    url: 'https://www.facebook.com',
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.instagram.com',
    icon: <FaInstagram />,
  },
];

export const dataSlider = [
  {
    id: '1',
    name: 'Vanilla cake',
    image: './images/cake1.jpg',
    price: '800',
  },
  {
    id: '2',
    name: 'Cinnamon cake',
    image: './images/cake2.jpg',
    price: '500',
  },
  {
    id: '3',
    name: 'abdul',
    image: './images/cake3.jpg',
    price: '1,100',
  },
  {
    id: '4',
    name: 'adf',
    image: './images/cake4.jpg',
    price: '1,100',
  },
];
