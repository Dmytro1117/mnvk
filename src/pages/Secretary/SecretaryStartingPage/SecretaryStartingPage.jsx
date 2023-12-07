import React from 'react';
import { Img, Section, Title } from './SecretaryStartingPage.styled';
import hero from '../../../images/Professions/secretary.png';
import { HomeLink, UnderTitle } from '../../Home/Home.styled';
import reportWebVitals from '../../Secretary/SecretaryQuizz/reportWebVitals';

const StartingPageSecretary = () => {
  return (
    <Section>
      <Title>Секретар керівника (організації підприємства, установи)</Title>
      <HomeLink to="/secretary/about">Про професію</HomeLink>
      <HomeLink to="/secretary/gallery">Галерея</HomeLink>
      <HomeLink to="/secretary/lec">Лекційний матеріал</HomeLink>
      <HomeLink to="/secretary/test">Атестація</HomeLink>
      <Img src={hero} alt="Секретар керівника" />
      {/* <UnderTitle>
        <HomeLink to="/register">Зареєструйтеся </HomeLink>
        або
        <HomeLink to="/login">Увійдіть</HomeLink>, щоб користуватися додатком
      </UnderTitle> */}
    </Section>
  );
};

export default StartingPageSecretary;

reportWebVitals();

// ============================================================================================
// import React, { useState } from 'react';
// import {
//   Img,
//   Section,
//   Title,
//   Text,
//   Button,
// } from './SecretaryStartingPage.styled';
// import hero from '../../images/secretary.png';
// import { HomeLink, UnderTitle } from '../../Home/Home.styled';
// import reportWebVitals from '../../SecretaryQuizz/reportWebVitals';

// const StartingPageSecretary = () => {
//   const [showText, setShowText] = useState(false);
//   const [showGallery, setShowGallery] = useState(false);

//   const imagePaths = [
//     '/public/images/Секретарі/12.jpg',
//     '/public/images/Секретарі/13.jpg',
//     '/public/images/Секретарі/14.JPG',
//     '/public/images/Секретарі/15.JPG',
//     '/public/images/Секретарі/11.jpg',
//   ];

//   const handleLecturesButtonClick = () => {
//     setShowText(!showText);
//   };

//   const handleGalleryButtonClick = () => {
//     setShowGallery(!showGallery);
//   };

//   return (
//     <Section>
//       <Title>Секретар керівника (організації підприємства, установи)</Title>
//       <Img src={hero} alt="Mr.Peabody" />
//       <UnderTitle>
//         <HomeLink to="/register">Зареєструйтеся </HomeLink>
//         або
//         <HomeLink to="/login">Увійдіть</HomeLink>, щоб користуватися додатком
//       </UnderTitle>
//       <Button onClick={handleLecturesButtonClick}>Про професію</Button>
//       <Button onClick={handleGalleryButtonClick}>Галерея</Button>
//       {/* <HomeLink to="/secretary/about">Про професію</HomeLink>
//       <HomeLink to="/secretary/gallery">Галерея</HomeLink> */}
//       <HomeLink to="/secretary/lec">Лекційний матеріал</HomeLink>
//       <HomeLink to="/secretary/test">Атестація</HomeLink>

//       {showText && (
//         <Text>
//           Професія секретаря керівника відіграє важливу роль у сучасних
//           організаціях та підприємствах. Цей фахівець виконує ряд ключових
//           завдань, спрямованих на підтримку ефективного функціонування
//           організації та забезпечення високого рівня робочої продуктивності.
//           Основні обов'язки секретаря керівника включають: Організаційні
//           функції: Керування розкладом та графіком роботи керівника. Планування
//           та організація зустрічей, нарад, конференцій. Забезпечення належної
//           підготовки документації для зустрічей. Листування та комунікації:
//           Складання та відправлення листів, електронних повідомлень від імені
//           керівника. Здійснення телефонного та письмового контакту з партнерами,
//           клієнтами та іншими представниками організації. Документообіг:
//           Підготовка, реєстрація та зберігання документів. Ведення бази даних та
//           архівування необхідної інформації. Підтримка прийняття рішень:
//           Забезпечення керівника необхідною інформацією для прийняття рішень.
//           Підготовка звітів та презентацій за дорученням керівника. Проведення
//           переговорів: Підготовка необхідної інформації для переговорів та
//           підтримка під час їх проведення. Секретарська підтримка: Забезпечення
//           зручних умов для роботи керівника (організація робочого простору,
//           надання необхідних матеріалів). Виконання інших пов'язаних з
//           секретарем завдань за дорученням керівника. Конфіденційність та
//           дискретність: Збереження конфіденційності інформації, що стосується
//           діяльності керівника та організації в цілому. Вміння працювати в
//           електронних системах: Знання офісних програм, електронної пошти та
//           інших інструментів для ефективної роботи. Комунікаційні навички:
//           Високий рівень комунікативності та вміння ефективно спілкуватися з
//           різними групами людей. Секретар керівника володіє важливими
//           організаційними та міжособистісними вміннями, що дозволяють
//           забезпечити плавне функціонування офісу та підтримувати керівника в
//           досягненні стратегічних цілей організації. Ця професія вимагає від
//           спеціаліста великої відповідальності, дисциплінованості та вміння
//           працювати в умовах високого темпу.
//         </Text>
//       )}

//       {showGallery && (
//         <div>
//           {imagePaths.map((path, index) => (
//             <Img key={index} src={path} alt={`Image ${index}`} />
//           ))}
//         </div>
//       )}
//     </Section>
//   );
// };

// export default StartingPageSecretary;

// reportWebVitals();
