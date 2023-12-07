import React, { useContext } from 'react';
import DataContext from '../context/CookdataContext';
import { HomeLink } from '../../../Home/Home.styled';

const Result = () => {
  const { showResult, quizs, marks, startOver } = useContext(DataContext);
  return (
    <section
      className="bg-dark text-white"
      style={{ display: `${showResult ? 'block' : 'none'}` }}
    >
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-6">
            <div
              className={`text-light text-center p-5 rounded ${
                marks * 2 > (quizs.length * 10) / 2 ? 'bg-success' : 'bg-danger'
              }`}
            >
              <h1 className="mb-2 fw-bold">
                {marks * 2 > (quizs.length * 10) / 2 ? 'Чудово!' : 'Невдало'}
              </h1>
              <h3 className="mb-3 fw-bold">
                Ваш результат {marks * 2}% з {quizs.length * 10}%
              </h3>

              <HomeLink to="/cook">Закінчити</HomeLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Result;
