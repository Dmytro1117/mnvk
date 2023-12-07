import React from 'react';
import { Container, Button, Img, Gallery } from './DriverGallery.styled';
import { Link } from 'react-router-dom';

const DriverGallery = () => {
  const imagePaths = [
    '/public/images/Водії/1.jpg',
    '/public/images/Водії/2.jpg',
    '/public/images/Водії/3.jpg',
    '/public/images/Водії/4.jpg',
    '/public/images/Водії/5.jpg',
    '/public/images/Водії/6.jpg',
    '/public/images/Водії/7.jpg',
    '/public/images/Водії/8.jpg',
    '/public/images/Водії/9.jpg',
  ];

  return (
    <Container>
      <Link to={'/driver'}>
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

export default DriverGallery;
