import styled from 'styled-components';

export const Section = styled.div`
  width: 1280px;
  padding: 32px 16px;
  margin: 0 auto;
  // display: flex;
  justify-content: center;
`;

export const TeacherList = styled.ul`
  display: flex;
`;

export const TeacherTitle = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 28px;
  font-size: 32px;
  line-height: 1.2;
  margin-top: 0;
  text-shadow: 2px 2px 4px #000000;
`;

export const TeacherItem = styled.li`
 text-align: center;
flex-basis: calc((100% - 96px) / 4);
margin-right: 32px;
  
  &:nth-last-child(-n + 2) {
    margin-bottom: 0;

    &:nth-child(2n) {
    margin-right: 0;
  }
    
`;

export const TeacherName = styled.h3`
  font-weight: 600;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 18px;
  line-height: 1.22;
`;

export const TeacherText = styled.p`
  font-weight: 500;
  width: 181px;
  font-size: 16px;
  line-height: 1.22;
  margin: 0 auto;
`;

export const TeacherImg = styled.img`
  width: 288px;
  height: 388px;
  border-radius: 16px;
  overflow: hidden;
`;

export const Paragraf = styled.p`
  // width: 700px;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 1.22;
  text-align: justify;
  text-indent: 30px;
  line-height: 1.3;
`;
