import React from 'react';
import Start from './components/webDesignStart';
import Quiz from './components/webDesignQuiz';
import Result from './components/webDesignResult';
import { DataProvider } from './context/webDesigndataContext';
import { Link } from 'react-router-dom';
import { Button } from '../../Secretary/SecretaryLecture/SecretaryLecture.styled';

function WebQuizz() {
  return (
    <div
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '20px',
      }}
    >
      <Link to={'/web'}>
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

export default WebQuizz;
