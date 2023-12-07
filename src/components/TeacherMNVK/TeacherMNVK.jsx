import { Slider } from './Slider/Slider';
import photo_1 from '../../images/TeacherMNVK/Котлярова.jpg';
import photo_2 from '../../images/TeacherMNVK/Євдокименко.jpg';
import photo_3 from '../../images/TeacherMNVK/Химченко.jpg';
import photo_4 from '../../images/TeacherMNVK/Крамаренко.jpg';
import photo_5 from '../../images/TeacherMNVK/Москаленко.jpg';
import photo_6 from '../../images/TeacherMNVK/Єременко.jpg';

import { Section, TeacherTitle, Paragraf } from './TeacherMNVK.styled';

const sliderData = [
  {
    label: 'Директор',
    title: 'Котлярова Юлія Олексіївна',
    img: photo_1,
  },
  {
    label: 'Заступник директора',
    title: 'Євдокименко Олександр Єгорович',
    img: photo_2,
  },
  {
    label: 'Методист',
    title: 'Химченко Оксана Петрівна',
    img: photo_3,
  },
  {
    label: 'Кухар',
    title: 'Крамаренко Лідія Сергіївна',
    img: photo_4,
  },
  {
    label: 'Водій автотранспортних засобів',
    title: 'Москаленко Олексій Петрович',
    img: photo_5,
  },
  {
    label: 'Основи web-дизайну',
    title: 'Єременко Галина Станіславівна',
    img: photo_6,
  },
];

export const TeacherMNVK = () => (
  <Section>
    <TeacherTitle>Колектив</TeacherTitle>
    <Paragraf>
      КУ"ММНВК"СМР укомплектований кваліфікованими педагогічними кадрами. У
      закладі працює 13 вчителів та майстрів виробничого навчання, вищу освіту
      мають 10 вчителів та майстрів виробничого навчання, середню спеціальну три
      майстри виробничого навчання. Вчителів вищої категорії – 2, першої
      категорії – 5, спеціалістів – 6.
    </Paragraf>
    <div className="content">
      <Slider data={sliderData} />
    </div>
  </Section>
);
