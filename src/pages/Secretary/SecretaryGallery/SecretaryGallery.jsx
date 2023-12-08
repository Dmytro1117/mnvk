import React from 'react';
import { Container, Button, Img, Gallery } from './SecretaryGallery.styled';
import { Link } from 'react-router-dom';

const SecretaryGallery = () => {
  const imagePaths = [
    '../images/Секретарі/1.jpg',
    '../images/Секретарі/2.jpg',
    '../images/Секретарі/3.jpg',
    '../images/Секретарі/4.jpg',
    '../images/Секретарі/5.jpg',
    '../images/Секретарі/4.jpg',
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
