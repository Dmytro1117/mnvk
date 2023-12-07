import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.div`
  width: 1280px;
  padding: 32px 16px;
  margin: 0 auto;
  // display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavLin = styled(Link)`
  text-decoration: none;
`;

export const InfoContainer = styled.div`
  width: 570px;
  // margin-right: 50px;
  // background-color: rgba(236, 229, 234, 0.8);
  // border-radius: 8px;
`;

export const Title = styled.h2`
  font-weight: 600;
  margin-bottom: 28px;
  font-size: 32px;
  line-height: 1.2;
  margin-top: 0;
  text-align: right;
  text-shadow: 2px 2px 4px #000000;
`;

export const Text = styled.p`
  // font-size: 18px;
  // line-height: 22px;
  // text-align: justify;
  font-size: 18px;
  line-height: 1.22;
  text-align: justify;
  text-indent: 30px;
  line-height: 1.3;
  margin-bottom: 28px;
  margin-top: 28px;
`;

export const Name = styled.h3`
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0.06em;
`;

export const Item = styled.p`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const CanvasContainer = styled.div`
  display: flex;
  justify-content: space-between;
  // padding-top: 20px;
  width: 620px;
  height: 1000px;
`;

export const WrappContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrappContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const Image = styled.img`
  display: block;
  width: 288px;
  height: 288px;
  border-radius: 50%;
  overflow: hidden;
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  background: linear-gradient(
      0.1deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(156, 156, 156, 0) 90%
    ),
    linear-gradient(
      180deg,
      rgba(255, 239, 246, 0.2) 100%,
      rgba(255, 239, 246, 0.3) 100%
    );
  border: 2px solid skyblue;
  border-radius: 50%;
  text-align: center;
  color: #ffffff;
  width: 288px;
  height: 288px;
`;

export const ProgTitle = styled.p`
  margin-bottom: 8px;
  font-family: 'Montserrat Alternates';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  padding-top: 220px;
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
  width: 288px;
  height: 288px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(33, 150, 243, 0.8);
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  padding: 16px;
  box-sizing: border-box;
  transform: translateY(100%);
  transition: transform 250ms ease;
`;

export const Cont = styled.div`
  position: relative;
  margin-bottom: 40px;
  overflow: hidden;

  &:hover {
    ${Overlay} {
      transform: translateY(0);
      cursor: pointer;
    }
  }
`;

export const Overlay2 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
  width: 288px;
  height: 288px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(238, 61, 179, 0.8);
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  padding: 16px;
  box-sizing: border-box;
  transform: translateY(-100%);
  transition: transform 250ms ease;
`;

export const Cont2 = styled.div`
  position: relative;
  margin-bottom: 40px;
  overflow: hidden;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    ${Overlay2} {
      transform: translateY(0);
      cursor: pointer;
    }
  }
`;

export const ProfessionList = styled.ul``;

export const ProfessionItem = styled.li`
  display: flex;
  // text-align: center;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 28px;
`;

export const ProfessionText = styled.p`
  font-weight: 500;
  line-height: 1.22;
  font-size: 22px;
  letter-spacing: 0.04em;
  width: 450px;
`;

export const ProfessionImg = styled.img`
  width: 50px;
`;
