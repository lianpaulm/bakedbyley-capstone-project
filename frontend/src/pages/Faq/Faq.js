import React, { useState } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Question from './Question';

import { dataQuestions } from '../../data';

import './Faq.css';

const Faq = () => {
  const [questions, setQuestions] = useState(dataQuestions);
  return (
    <>
      <Header />
      <main>
        <section className="faq-section">
          <h3>Frequently asked questions</h3>
          <div className="question-info">
            {questions.map((question) => {
              return <Question key={question.id} {...question} />;
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Faq;
