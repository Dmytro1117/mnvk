import React from 'react';
import { Container, Button, Img, Gallery } from './CookGallery.styled';
import { Link } from 'react-router-dom';

const CookGallery = () => {
  const imagePaths = [
    '../images/CookImag/1.jpg',
    '../images/CookImag/2.jpg',
    '../images/CookImag/3.jpg',
    '../images/CookImag/4.jpg',
    '../images/CookImag/5.jpg',
    '../images/CookImag/6.jpg',
    '../images/CookImag/7.jpg',
    '../images/CookImag/8.jpg',
    '../images/CookImag/9.jpg',
  ];

  return (
    <Container>
      <Link to={'/cook'}>
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

export default CookGallery;
