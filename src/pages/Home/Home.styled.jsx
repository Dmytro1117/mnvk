import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Tex = styled.p`
  text-align: center;
  padding: 10px;
  width: 1000px;
  margin: 0 auto;
  color: white;
  margin-top: 120px;
  margin-bottom: 120px;
  font-weight: 700;
  font-size: 50px;
  line-height: 1.36;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

export const Img = styled.img`
  width: 1200px;
  object-fit: contain;
  object-position: center;
  display: flex;
  margin: 0 auto;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 140px);
`;

export const UnderTitle = styled.h2`
  margin-top: 35px;
  // color: #2e2d2dbc;
  text-align: center;
  font-size: 28px;
  height: 40px;
  margin-bottom: 40px;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  margin: 0 6px;
  color: white;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  border: 1px solid #1677ff;
  border-radius: 4px;
  box-shadow: 0 2px 0 rgb(5 145 255 / 10%);
  padding: 4px 12px;
  background-color: #1677ff;
  font-weight: 400;
  font-size: 18px;

  &:hover,
  &:focus {
    opacity: 0.8;
    background-color: white;
    color: #1677ff;
  }
`;

export const Hero = styled.div`
  // padding: 0 15px;
  width: calc(100vw - 4px);
  // height: 540px;
  // background-image: url(/src/images/hero.jpg);
  // background-repeat: no-repeat
  background-size: contain;

  // background-color: #6b6e72;

  background-image: linear-gradient(
      rgba(25, 26, 29, 0.7),
      rgba(47, 48, 58, 0.7)
    ),
    url('/images/hero.jpg');

  // background-size: cover;
  background-position: center;
`;
