import styled from 'styled-components';

export const Footerr = styled.footer`
  border-top: 2px solid #3a97e8;
  background-color: #2f303a;
  display: flex;

  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: auto;
   padding-top: 8px;
  padding-bottom: 8px;
}
`;

export const Tex = styled.p`
  padding: 10px;
  font-size: 14px;
  margin: 0;
  color: #ffffff;
  text-align: center;
`;

export const Container = styled.div`
  padding: 0 15px;
  width: 1280px;
  display: flex;
  flex-direction: column;
`;

export const FooterAdress = styled.a`
  line-height: 1.71;
  color: #ffffff;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  // display: block;
  font-style: normal;
  text-decoration: none;
  margin-bottom: 0px;

  &:hover,
  &:focus {
    color: #2196f3;
    cursor: pointer;
  }
`;

export const Adress = styled.address`
  // margin-right: 70px;
  // max-width: 250px;
  display: flex;
  justify-content: space-between;
`;

export const Soclist = styled.ul`
  display: flex;
  width: 80px;
  justify-content: space-between;
`;

export const SocItem = styled.li`
  &:hover,
  &:focus {
    color: green;
    outline: none;
    transition: color 250ms linear;
  }
`;

export const Svg = styled.svg`
  fill: currentColor;
`;
