import React from 'react';
import { Img, Section, Title } from './LocksmithStartingPage.styled';
import hero from '../../../images/Locksmith/locksmith.png';
import { HomeLink } from '../../Home/Home.styled';
import reportWebVitals from '../../Locksmith/LocksmithQuizz/LocksmithreportWebVitals';

const StartingPageLocksmith = () => {
  return (
    <Section>
      <Title>Слюсар механоскладальних робіт</Title>
      <HomeLink to="/locksmith/about">Про професію</HomeLink>
      <HomeLink to="/locksmith/gallery">Галерея</HomeLink>
      <HomeLink to="/locksmith/lec">Лекційний матеріал</HomeLink>
      <HomeLink to="/locksmith/test">Атестація</HomeLink>
      <Img src={hero} alt="Слюсар механоскладальних робіт" />
    </Section>
  );
};

export default StartingPageLocksmith;

reportWebVitals();
