import React from 'react';
import { Section, VideoTitle, VideoFile } from './Vdeo.styled';
import { Container, Text } from '../../components/AboutUs/AboutUs.styled';
import poster from '../../images/Hero.jpg';
import video from '../../videos/presentation_mmnvk.mp4';

const Video = () => {
  return (
    <Section>
      <Container>
        <VideoTitle>Відео-презентація</VideoTitle>
        <Text>
          МНВК – це перша сходинка до дорослого самостійного життя та вибору
          професії. КУ «Міський міжшкільний навчально-виробничий комбінат» СМР –
          це навчальний заклад, який забезпечує потреби учнів загальноосвітніх
          шкіл міста Суми у допрофесійній: «Основи Web-дизайну та
          Web-програмування», «Гувернер», «Слюсар механоскладальних робіт» та
          професійній підготовці за професіями: «Водій автотранспортних засобів
          категорій «В», «С»», «Секретар керівника (підприємства, установи,
          організації)», «Кухар».
        </Text>
        {/* <Text>
          Це навчально-виховний комплекс, створений відповідно до Конституції
          України, Законів України «Про освіту», «Про професійно-технічну
          освіту», «Про загальну середню освіту», Положення про міжшкільний
          навчально-виробничий комбінат, та інших нормативно-правових актів з
          питань освіти
        </Text> */}
      </Container>

      <VideoFile
        src={video}
        poster={poster}
        // width="500"
        // height="300"
        controls
        preload="auto"
        style={{ objectFit: 'cover', width: '500px', height: '300px' }}
      ></VideoFile>
    </Section>
  );
};

export default Video;
