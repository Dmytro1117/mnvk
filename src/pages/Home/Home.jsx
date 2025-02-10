import React from 'react';
// import { useSelector } from 'react-redux';
import { Tex, Container, Hero } from './Home.styled';
import AboutUs from '../../components/AboutUs/AboutUs';
import Professions from '../../components/Professions/Professions';
import Video from '../../components/Vdeo/Vdeo';
import { TeacherMNVK } from '../../components/TeacherMNVK/TeacherMNVK';

const Home = () => {
  // const { isLoaggedIn } = useSelector(state => state.auth);
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
