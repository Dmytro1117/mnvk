import React from 'react';
import { Container, Button, Img, Gallery } from './CookGallery.styled';
import { Link } from 'react-router-dom';

const CookGallery = () => {
  const imagePaths = [
    'public/images/Кухар/1.jpg',
    '/public/images/Кухар/2.jpg',
    '/public/images/Кухар/3.jpg',
    '/public/images/Кухар/4.jpg',
    '/public/images/Кухар/5.jpg',
    '/public/images/Кухар/6.jpg',
    '/public/images/Кухар/7.jpg',
    '/public/images/Кухар/8.jpg',
    '/public/images/Кухар/9.jpg',
    '/public/images/Кухар/10.jpg',
    '/public/images/Кухар/11.jpg',
    '/public/images/Кухар/12.jpg',
    '/public/images/Кухар/13.jpg',
    '/public/images/Кухар/14.jpg',
    '/public/images/Кухар/15.jpg',
    '/public/images/Кухар/16.jpg',
    '/public/images/Кухар/17.jpg',
    '/public/images/Кухар/18.jpg',
    '/public/images/Кухар/19.jpg',
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
