import React from 'react';
import { Img, Section, Title } from './SecretaryStartingPage.styled';
import hero from '../../../images/Professions/secretary.png';
import { HomeLink } from '../../Home/Home.styled';
import reportWebVitals from '../../Secretary/SecretaryQuizz/reportWebVitals';

const StartingPageSecretary = () => {
  return (
    <Section>
      <Title>Секретар керівника (організації підприємства, установи)</Title>
      <HomeLink to="/secretary/about">Про професію</HomeLink>
      <HomeLink to="/secretary/gallery">Галерея</HomeLink>
      <HomeLink to="/secretary/lec">Лекційний матеріал</HomeLink>
      <HomeLink to="/secretary/test">Атестація</HomeLink>
      <Img src={hero} alt="Секретар керівника" />
    </Section>
  );
};

export default StartingPageSecretary;

reportWebVitals();
