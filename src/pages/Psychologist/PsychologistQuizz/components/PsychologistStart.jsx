import React, { useContext, useState, useEffect } from 'react';
import DataContext from '../context/PsychologistdataContext';

const Start = () => {
  const { startQuiz, showStart, quizStarted, setQuizStarted } =
    useContext(DataContext);
  const [hasTakenQuiz, setHasTakenQuiz] = useState(false);

  useEffect(() => {
    const hasTakenQuizFromStorage = localStorage.getItem(
      'hasTakenQuizCookPsychologist',
    );
    if (hasTakenQuizFromStorage) {
      setHasTakenQuiz(true);
    }
  }, []);

  const handleStartQuiz = () => {
    if (!quizStarted && !hasTakenQuiz) {
      startQuiz(setQuizStarted);
      setHasTakenQuiz(true);
      localStorage.setItem('hasTakenQuizCookPsychologist', 'true');
    }
  };
  return (
    <section
      className="text-white text-center bg-dark"
      style={{ display: `${showStart ? 'block' : 'none'}` }}
    >
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-8">
            <h1 className="fw-bold mb-4">Атестацiя</h1>
            <h1 className="fw-bold mb-4">
              "Основи психологічних знань - система особистісного росту"
            </h1>
            <button
              onClick={handleStartQuiz}
              className={`btn px-4 py-2 bg-light text-dark fw-bold ${
                quizStarted || hasTakenQuiz ? 'disabled' : ''
              }`}
              disabled={quizStarted || hasTakenQuiz}
            >
              {hasTakenQuiz ? 'Ви вже пройшли тест' : 'Розпочати тестування'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
