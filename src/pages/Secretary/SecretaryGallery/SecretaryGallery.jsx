import React from 'react';
import { Container, Button, Img, Gallery } from './SecretaryGallery.styled';
import { Link } from 'react-router-dom';

const SecretaryGallery = () => {
  const imagePaths = [
    '/public/images/Секретарі/1.jpg',
    '/public/images/Секретарі/2.jpg',
    '/public/images/Секретарі/3.JPG',
    '/public/images/Секретарі/4.JPG',
    '/public/images/Секретарі/5.jpg',
    '/public/images/Секретарі/4.JPG',
  ];

  return (
    <Container>
      <Link to={'/secretary'}>
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

export default SecretaryGallery;
