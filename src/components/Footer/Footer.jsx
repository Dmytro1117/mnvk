import React from 'react';
import {
  Tex,
  Footerr,
  Container,
  FooterAdress,
  Adress,
  Soclist,
  SocItem,
  Svg,
} from './Footer.styled';

const Footer = () => {
  return (
    <Footerr>
      <Container>
        <Adress>
          <FooterAdress href="mailto:info@devstudio.com">
            (0542) 78-97-32
          </FooterAdress>
          <FooterAdress
            href="https://www.google.com/maps/place/%D0%93%D0%9E%D0%A0%D0%9E%D0%94%D0%A1%D0%9A%D0%9E%D0%99+%D0%9C%D0%95%D0%96%D0%A8%D0%9A%D0%9E%D0%9B%D0%AC%D0%9D%D0%AB%D0%99+%D0%A3%D0%A7%D0%95%D0%91%D0%9D%D0%9E-%D0%9F%D0%A0%D0%9E%D0%98%D0%97%D0%92%D0%9E%D0%94%D0%A1%D0%A2%D0%92%D0%95%D0%9D%D0%9D%D0%AB%D0%99+%D0%9A%D0%9E%D0%9C%D0%91%D0%98%D0%9D%D0%90%D0%A2/@50.9248515,34.7762429,18z/data=!4m6!3m5!1s0x412903d13c1c106d:0xc9e4b850b1decaf3!8m2!3d50.925319!4d34.775432!16s%2Fg%2F11xj4rnfz?entry=ttu"
            target="_blank"
          >
            м. Cуми, вул. Ю.Липи, 72
          </FooterAdress>

          <FooterAdress href="tel:+380961111111">
            +38 095 258 07 73
          </FooterAdress>
        </Adress>

        {/* <Soclist>
          <SocItem href="#">
            <Svg width="16" height="16">
              <use href="./images/icons.svg#icon-twitter"></use>
            </Svg>
          </SocItem>

          <SocItem href="#">
            <Svg width="16" height="16">
              <use href="./images/icons.svg#icon-instagram"></use>
            </Svg>
          </SocItem>

          <SocItem href="#">
            <Svg width="16" height="16">
              <use href="../../images/icons.svg#icon-facebook"></use>
            </Svg>
          </SocItem>
        </Soclist> */}
        <Tex>&#169; 2023 | Всі права захищені |</Tex>
      </Container>
    </Footerr>
  );
};

export default Footer;
