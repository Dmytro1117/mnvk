import React from 'react';
import { Container, Button, Img, Gallery } from './CookGallery.styled';
import { Link } from 'react-router-dom';
// import cook from '../../../../public/images/CookImag';

const CookGallery = () => {
  const imagePaths = [
    '../../../../public/images/CookImag/1.jpg',
    '../../../../public/images/CookImag/2.jpg',
    '../../../../public/images/CookImag/3.jpg',
    '../../../../public/images/CookImag/4.jpg',
    '../../../../public/images/CookImag/5.jpg',
    '../../../../public/images/CookImag/6.jpg',
    '../../../../public/images/CookImag/7.jpg',
    '../../../../public/images/CookImag/8.jpg',
    '../../../../public/images/CookImag/9.jpg',
    '../../../../public/images/CookImag/10.jpg',
    '../../../../public/images/CookImag/11.jpg',
    '../../../../public/images/CookImag/12.jpg',
    '../../../../public/images/CookImag/13.jpg',
    '../../../../public/images/CookImag/14.jpg',
    '../../../../public/images/CookImag/15.jpg',
    '../../../../public/images/CookImag/16.jpg',
    '../../../../public/images/CookImag/17.jpg',
    '../../../../public/images/CookImag/18.jpg',
    '../../../../public/images/CookImag/19.jpg',
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
