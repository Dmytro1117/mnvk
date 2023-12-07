import React from 'react';
import { Container, Button, Img, Gallery } from './webDesignGallery.styled';
import { Link } from 'react-router-dom';

const WebGallery = () => {
  const imagePaths = [
    '/public/images/Web/1.jpg',
    '/public/images/Web/2.jpg',
    '/public/images/Web/3.jpg',
    '/public/images/Web/4.jpg',
    '/public/images/Web/5.jpg',
    '/public/images/Web/6.jpg',
    '/public/images/Web/7.jpg',
    '/public/images/Web/8.jpg',
    '/public/images/Web/9.jpg',
    '/public/images/Web/10.jpg',
    '/public/images/Web/11.jpg',
    '/public/images/Web/12.jpg',
    '/public/images/Web/13.jpg',
    '/public/images/Web/14.jpg',
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
