import React from 'react';
import Start from './components/LocksmithStart';
import Quiz from './components/LocksmithQuiz';
import Result from './components/LocksmithResult';
import { DataProvider } from './context/LocksmithdataContext';
import { Link } from 'react-router-dom';
import { Button } from '../../Secretary/SecretaryLecture/SecretaryLecture.styled';

function LocksmithQuizz() {
  return (
    <div
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '20px',
      }}
    >
      <Link to={'/locksmith'}>
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

export default LocksmithQuizz;
