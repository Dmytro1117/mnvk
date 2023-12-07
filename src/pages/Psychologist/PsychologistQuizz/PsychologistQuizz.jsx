import React from 'react';
import Start from './components/PsychologistStart';
import Quiz from './components/PsychologistQuiz';
import Result from './components/PsychologistResult';
import { DataProvider } from './context/PsychologistdataContext';
import { Link } from 'react-router-dom';
import { Button } from '../../Secretary/SecretaryLecture/SecretaryLecture.styled';

function CookQuizz() {
  return (
    <div
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '20px',
      }}
    >
      <Link to={'/psychologist'}>
        <Button type="button">Go back</Button>
      </Link>
      <DataProvider>
        <Start />

        <Quiz />

        <Result />
      </DataProvider>
    </div>
  );
}

export default CookQuizz;
