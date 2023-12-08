import React from 'react';
import { Container, Button, Img, Gallery } from './webDesignGallery.styled';
import { Link } from 'react-router-dom';

const WebGallery = () => {
  const imagePaths = [
    '../images/Web/6.JPG',
    '../images/Web/7.JPG',
    '../images/Web/9.JPG',
    '../images/Web/10.JPG',
    '../images/Web/11.JPG',
    '../images/Web/12.JPG',
    '../images/Web/13.JPG',
    '../images/Web/14.JPG',
  ];

  return (
    <Container>
      <Link to={'/web'}>
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

export default WebGallery;
