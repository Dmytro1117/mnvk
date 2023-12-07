import React from 'react';
import { Img, Section, Title } from './webDesignStartingPage.styled';
import hero from '../../../images/Professions/web.png';
import { HomeLink } from '../../Home/Home.styled';
import reportWebVitals from '../../Locksmith/LocksmithQuizz/LocksmithreportWebVitals';

const StartingPageWeb = () => {
  return (
    <Section>
      <Title>Основи web-дизайну та web-програмування</Title>
      <HomeLink to="/web/about">Про професію</HomeLink>
      <HomeLink to="/web/gallery">Галерея</HomeLink>
      <HomeLink to="/web/lec">Лекційний матеріал</HomeLink>
      <HomeLink to="/web/test">Атестація</HomeLink>
      <Img src={hero} alt="Основи web-дизайну та web-програмування" />
    </Section>
  );
};

export default StartingPageWeb;

reportWebVitals();
