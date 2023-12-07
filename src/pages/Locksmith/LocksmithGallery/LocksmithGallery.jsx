import React from 'react';
import { Container, Button, Img, Gallery } from './LocksmithGallery.styled';
import { Link } from 'react-router-dom';

const LocksmithGallery = () => {
  const imagePaths = [
    '/public/images/Слюсар/1.jpg',
    '/public/images/Слюсар/2.jpg',
    '/public/images/Слюсар/3.jpg',
    '/public/images/Слюсар/4.jpg',
  ];

  return (
    <Container>
      <Link to={'/locksmith'}>
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

export default LocksmithGallery;
