import React from 'react';
import { Container, Button, Img, Gallery } from './DriverGallery.styled';
import { Link } from 'react-router-dom';

const DriverGallery = () => {
  const imagePaths = [
    '../images/Водії/1.jpg',
    '../images/Водії/3.jpg',
    '../images/Водії/4.jpg',
    '../images/Водії/5.jpg',
    '../images/Водії/6.jpg',
    '../images/Водії/7.jpg',
    '../images/Водії/8.jpg',
    '../images/Водії/9.jpg',
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
