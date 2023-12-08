import React from 'react';
import { Container, Button, Img, Gallery } from './PsychologistGallery.styled';
import { Link } from 'react-router-dom';

const PsychologistGallery = () => {
  const imagePaths = [
    '../images/Психолог/1.JPG',
    '../images/Психолог/2.JPG',
    '../images/Психолог/3.JPG',
    '../images/Психолог/4.JPG',
    '../images/Психолог/5.JPG',
    '../images/Психолог/6.JPG',
    '../images/Психолог/7.JPG',
    '../images/Психолог/8.JPG',
    '../images/Психолог/9.JPG',
    '../images/Психолог/10.JPG',
    '../images/Психолог/11.JPG',
    '../images/Психолог/12.JPG',
    '../images/Психолог/13.JPG',
  ];

  return (
    <Container>
      <Link to={'/psychologist'}>
        <Button type="button">Go back</Button>
      </Link>

      <Gallery>
        {imagePaths.map((path, index) => (
          <Img key={index} src={path} alt={`Image ${index}`} />
        ))}
      </Gallery>
    </Container>
  );
};

export default PsychologistGallery;
