import React from 'react';
import { Tex, Container, Hero } from './Home.styled';
import AboutUs from '../../components/AboutUs/AboutUs';
import Professions from '../../components/Professions/Professions';
import Video from '../../components/Vdeo/Vdeo';
import { TeacherMNVK } from '../../components/TeacherMNVK/TeacherMNVK';

const Home = () => {
  return (
    <Container>
      <>
        <Hero>
          <Tex>КУ "Міський міжшкільний навчально-виробничий комбінат"</Tex>
        </Hero>
        <AboutUs />
        <Professions />

        <TeacherMNVK />
        <Video />
      </>
    </Container>
  );
};

export default Home;
