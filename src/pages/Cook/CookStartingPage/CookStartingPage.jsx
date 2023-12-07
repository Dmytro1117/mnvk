import React from 'react';
import { Img, Section, Title } from './CookStartingPage.styled';
import hero from '../../../images/Cook/cook.png';
import { HomeLink } from '../../Home/Home.styled';
import reportWebVitals from '../../Cook/CookQuizz/CookreportWebVitals';

const StartingPageCook = () => {
  return (
    <Section>
      <Title>Кухар</Title>
      <HomeLink to="/cook/about">Про професію</HomeLink>
      <HomeLink to="/cook/gallery">Галерея</HomeLink>
      <HomeLink to="/cook/lec">Лекційний матеріал</HomeLink>
      <HomeLink to="/cook/test">Атестація</HomeLink>
      <Img src={hero} alt="Кухар" />
    </Section>
  );
};

export default StartingPageCook;

reportWebVitals();
