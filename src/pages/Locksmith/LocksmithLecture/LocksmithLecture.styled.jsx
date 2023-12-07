import styled from 'styled-components';

export const Button = styled.button`
  text-decoration: none;
  margin: 0 6px;
  color: white;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  border: 1px solid #1677ff;
  border-radius: 2px;
  box-shadow: 0 2px 0 rgb(5 145 255 / 10%);
  padding: 2px 8px;
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

export const Text = styled.p`
  margin-top: 20px;
  // width: 700px;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 1.22;
  text-align: justify;
  text-indent: 30px;
  line-height: 1.3;
`;

export const Container = styled.div`
  width: 1280px;
  padding: 32px 16px;
  margin: 0 auto;
`;
