import React from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { DataProvider } from './context/dataContext';
import { Link } from 'react-router-dom';
import { Button } from '../../Secretary/SecretaryLecture/SecretaryLecture.styled';

function Quizz() {
  return (
    <div
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '20px',
      }}
    >
      <Link to={'/secretary'}>
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

export default Quizz;
