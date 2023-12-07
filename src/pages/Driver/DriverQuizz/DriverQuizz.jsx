import React from 'react';
import Start from './components/DriverStart';
import Quiz from './components/DriverQuiz';
import Result from './components/DriverResult';
import { DataProvider } from './context/DriverdataContext';
import { Link } from 'react-router-dom';
import { Button } from '../../Secretary/SecretaryLecture/SecretaryLecture.styled';

function DriverQuizz() {
  return (
    <div
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '20px',
      }}
    >
      <Link to={'/driver'}>
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

export default DriverQuizz;
