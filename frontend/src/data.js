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
    text: 'FAQs',
    icon: <RiQuestionAnswerLine />,
  },
];

export const socialLinks = [
  {
    id: 1,
    url: 'https://www.facebook.com/leaportugues30',
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.instagram.com/leeyahyahyah/',
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

export const dataQuestions = [
  {
    id: 1,
    title: 'Can I see a menu?',
    info: 'You can visit our social media networking sites for more menus.',
  },
  {
    id: 2,
    title: 'Can I make a reservation?',
    info: `Yes just contact us here:
    Email: @nettepasuquin@gmail.com
    Facebook: Raili's Sweet Things
    Instagram: @railissweethings
    Contact Number: 09055573484/09396516128`,
  },
  {
    id: 3,
    title: 'Where are you located?',
    info: 'Isaiah Street, 3023 San Jose del Monte, Bulacan, Philippines',
  },
  {
    id: 4,
    title: 'Do you deliver?',
    info: `Yes we deliver, just contact us at:
    Email: @nettepasuquin@gmail.com
    Facebook: Raili's Sweet Things
    Instagram: @railissweetthings
    Contact Number: 09055573484/09396516128`,
  },
  {
    id: 5,
    title: 'When do I recieve a password ordered by letter?',
    info: 'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ',
  },
];

export const dataProducts = [
  {
    _id: '1',
    name: 'Vanilla Chocolate',
    category: 'Birthday Cake',
    image: '/images/products/cake1.jpg',
    price: 420,
    description:
      'Enjoy this mouth-watery cake that will satisfy your taste and tummy. The sweet ingredients such as cookies and chocolates will let you feel the sweetness you need.',
  },
  {
    _id: '2',
    name: 'Barbie Themed Cake',
    category: 'Birthday Cake',
    image: '/images/products/cake2.jpg',
    price: 340,
    description:
      'Be your own Barbie girl by celebrating your birthday with the pink themed Barbie cake. Feel the princess aura by having this cake right now.',
  },
  {
    _id: '3',
    name: 'Disney Princess Belle Themed Cake',
    category: 'Birthday Cake ',
    image: '/images/products/cake3.jpg',
    price: 390,
    description:
      'Loving the yellow hue? Heres we got for you, cake inspired by Disney Princess Belle with the yellow color and red roses is perfect for you. Belle, a sweet princess is our inspiration for this sweet cake that will surely satisfied your sweet cravings.',
  },
  {
    _id: '4',
    name: 'Barbie Themed Cake',
    category: 'Birthday Cake',
    image: '/images/products/cake2.jpg',
    price: 340,
    description:
      'Be your own Barbie girl by celebrating your birthday with the pink themed Barbie cake. Feel the princess aura by having this cake right now.',
  },
  {
    _id: '5',
    name: 'Disney Princess Belle Themed Cake',
    category: 'Birthday Cake ',
    image: '/images/products/cake3.jpg',
    price: 390,
    description:
      'Loving the yellow hue? Heres we got for you, cake inspired by Disney Princess Belle with the yellow color and red roses is perfect for you. Belle, a sweet princess is our inspiration for this sweet cake that will surely satisfied your sweet cravings.',
  },
];
