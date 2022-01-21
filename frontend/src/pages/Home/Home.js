import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Featured from '../../components/Featured/Featured';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Featured />
      </main>
      <Footer />
    </>
  );
};

export default Home;
