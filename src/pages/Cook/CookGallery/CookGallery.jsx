import React from 'react';
import { Container, Button, Img, Gallery } from './CookGallery.styled';
import { Link } from 'react-router-dom';

const CookGallery = () => {
  const imagePaths = [
    '../images/CookImag/1.JPG',
    '../images/CookImag/2.JPG',
    '../images/CookImag/3.jpg',
    '../images/CookImag/4.JPG',
    '../images/CookImag/5.JPG',
    '../images/CookImag/6.JPG',
    '../images/CookImag/7.JPG',
    '../images/CookImag/8.jpg',
    '../images/CookImag/9.JPG',
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
