import React from 'react';
import { Img, Section, Title } from './PsychologistStartingPage.styled';
import hero from '../../../images/Psychologist/psychologist.jpg';
import { HomeLink } from '../../Home/Home.styled';
import reportWebVitals from '../../Psychologist/PsychologistQuizz/PsychologistreportWebVitals';

const StartingPagePsychologist = () => {
  return (
    <Section>
      <Title>Основи психологічних знань - система особистісного росту</Title>
      <HomeLink to="/psychologist/about">Про професію</HomeLink>
      <HomeLink to="/psychologist/gallery">Галерея</HomeLink>
      <HomeLink to="/psychologist/lec">Лекційний матеріал</HomeLink>
      <HomeLink to="/psychologist/test">Атестація</HomeLink>
      <Img
        src={hero}
        alt="Основи психологічних знань - система особистісного росту"
      />
    </Section>
  );
};

export default StartingPagePsychologist;

reportWebVitals();
