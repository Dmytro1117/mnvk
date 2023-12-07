import React from 'react';
import Start from './components/CookStart';
import Quiz from './components/CookQuiz';
import Result from './components/CookResult';
import { DataProvider } from './context/CookdataContext';
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
      <Link to={'/cook'}>
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
