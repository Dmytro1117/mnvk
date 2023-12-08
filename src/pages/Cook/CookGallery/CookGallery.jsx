import React from 'react';
import { Container, Button, Img, Gallery } from './CookGallery.styled';
import { Link } from 'react-router-dom';

const CookGallery = () => {
  const imagePaths = [
    '/mnvk/public/images/Кухар/1.jpg',
    'images/Кухар/2.jpg',
    'images/Кухар/3.jpg',
    'images/Кухар/4.jpg',
    'images/Кухар/5.jpg',
    'images/Кухар/6.jpg',
    'images/Кухар/7.jpg',
    'images/Кухар/8.jpg',
    'images/Кухар/9.jpg',
    'images/Кухар/10.jpg',
    'images/Кухар/11.jpg',
    'images/Кухар/12.jpg',
    'images/Кухар/13.jpg',
    'images/Кухар/14.jpg',
    'images/Кухар/15.jpg',
    'images/Кухар/16.jpg',
    'images/Кухар/17.jpg',
    'images/Кухар/18.jpg',
    'images/Кухар/19.jpg',
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
