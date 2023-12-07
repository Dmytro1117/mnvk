import React from 'react';
import { Img, Section, Title } from './DriverStartingPage.styled';
import hero from '../../../images/Driver/driver.png';
import { HomeLink } from '../../Home/Home.styled';
import reportWebVitals from '../../Driver/DriverQuizz/DriverreportWebVitals';

const StartingPageDriver = () => {
  return (
    <Section>
      <Title>Водій автотранспортних засобів (категорії «В», «С»)</Title>
      <HomeLink to="/driver/about">Про професію</HomeLink>
      <HomeLink to="/driver/gallery">Галерея</HomeLink>
      <HomeLink to="/driver/lec">Лекційний матеріал</HomeLink>
      <HomeLink to="/driver/test">Атестація</HomeLink>
      <Img src={hero} alt="Водій автотранспортних засобів" />
    </Section>
  );
};

export default StartingPageDriver;

reportWebVitals();
