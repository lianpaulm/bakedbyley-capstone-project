import React from 'react';

// nav links icons
import { AiOutlineHome } from 'react-icons/ai';
import { RiQuestionAnswerLine, RiCake2Line } from 'react-icons/ri';
// social links icons
import { FaFacebookF, FaFacebookMessenger, FaInstagram } from 'react-icons/fa';

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
    text: 'cakes',
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
    url: 'https://www.facebook.com/leaportugues30/?refid=17',
    icon: <FaFacebookMessenger />,
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
    image:
      'https://res.cloudinary.com/dspuu6dpz/image/upload/v1645698968/uploads/pxhilg1odxjirr0aqpgm.jpg',
    price: '800',
  },
  {
    id: '2',
    name: 'Cinnamon cake',
    image:
      'https://res.cloudinary.com/dspuu6dpz/image/upload/v1645699324/uploads/mbwqjhbyqoo74az0wrny.jpg',
    price: '500',
  },
  {
    id: '3',
    name: 'abdul',
    image:
      'https://res.cloudinary.com/dspuu6dpz/image/upload/v1645698030/uploads/z9bxxq2hxq3xdybvnjwc.jpg',
    price: '1,100',
  },
  {
    id: '4',
    name: 'adf',
    image:
      'https://res.cloudinary.com/dspuu6dpz/image/upload/v1645697828/uploads/ark3zfjktrjfbgpqxods.jpg',
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

export const testimonials = [
  {
    _id: '1',
    name: 'Joshua Tanael Bernardo',
    image:
      'https://res.cloudinary.com/dspuu6dpz/image/upload/v1647098595/testimonials%20user/testimonial-img-1_itahfm.jpg',
    testimony:
      'Highly recommended! Thank you for  the budget friendly cake and cupcakes. Maganda ang design ng cake/cupcakes at ang sarap pa! Definitely, will order again. God bless to your business maaa! 👏😊',
  },
  {
    _id: '2',
    name: 'Ana Marie Medina',
    image:
      'https://res.cloudinary.com/dspuu6dpz/image/upload/v1647098595/testimonials%20user/271838354_2121208124700567_5275564418955711103_n_zjc4pc.jpg',
    testimony:
      'Pag mabait ka may freebies na cupcake ka hahaha char. Bait ni seller, syempre masarap yung cake and cupcakes and designss syempre super nice and gandaaa!!✨🤎🤎🤎',
  },
  {
    _id: '3',
    name: 'Jholenz Antonio',
    image:
      'https://res.cloudinary.com/dspuu6dpz/image/upload/v1647098595/testimonials%20user/151208219_1288305071555718_1994082708347678621_n_plgfa0.jpg',
    testimony:
      'Highly recommended! Thank you for  the budget friendly cake and cupcakes. Maganda ang design ng cake/cupcakes at ang sarap pa! Definitely, will order again. God bless to your business maaa! 👏😊',
  },
  {
    _id: '4',
    name: 'Ess X Zor',
    image:
      'https://res.cloudinary.com/dspuu6dpz/image/upload/v1647098595/testimonials%20user/224723221_2932889463695428_3463513414640846836_n_kygqej.jpg',
    testimony:
      'HIGHLY RECOMMEND ❤️ KUNG GUSTO NYO NG MASARAP,AT SWAK SA BUDGET DITO KAYO BUMILI.',
  },
  {
    _id: '5',
    name: 'Maria Rose Patotoy',
    image:
      'https://res.cloudinary.com/dspuu6dpz/image/upload/v1647098595/testimonials%20user/271667847_4846630322097697_1074258931605638657_n_oqgioz.jpg',
    testimony:
      'Super recommended ❤️ Hindi nakakaumay ung tamis nya dahil sakto lang talaga , pati bisita namin nasarapan din 😊😊 Soon order ulit ❤️',
  },
];
