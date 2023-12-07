import React from 'react';
import { Container, Button, Img, Gallery } from './PsychologistGallery.styled';
import { Link } from 'react-router-dom';

const PsychologistGallery = () => {
  const imagePaths = [
    '/public/images/Психолог/1.jpg',
    '/public/images/Психолог/2.jpg',
    '/public/images/Психолог/3.jpg',
    '/public/images/Психолог/4.jpg',
    '/public/images/Психолог/5.jpg',
    '/public/images/Психолог/6.jpg',
    '/public/images/Психолог/7.jpg',
    '/public/images/Психолог/8.jpg',
    '/public/images/Психолог/9.jpg',
    '/public/images/Психолог/10.jpg',
    '/public/images/Психолог/11.jpg',
    '/public/images/Психолог/12.jpg',
    '/public/images/Психолог/13.jpg',
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
