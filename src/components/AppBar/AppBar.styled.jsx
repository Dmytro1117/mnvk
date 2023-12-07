import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  UserAddOutlined,
  LoginOutlined,
  HomeOutlined,
  TeamOutlined,
} from '@ant-design/icons';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 56px;
  align-items: center;
`;

export const Link = styled(NavLink)`
  &:first-child {
    margin-left: 60px;
    margin-right: 16px;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }

  &.active {
    color: #3a97e8;
    // border-top: 4px solid #3a97e8;
  }
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 4px;
`;

export const RegIcon = styled(UserAddOutlined)`
  margin-right: 8px;
  display: inline-flex;
`;

export const LogInIcon = styled(LoginOutlined)`
  margin-right: 8px;
  display: inline-flex;
`;

export const HomeIcon = styled(HomeOutlined)`
  margin-right: 8px;
  display: inline-flex;
`;

// export const ContactIcon = styled(TeamOutlined)`
//   margin-right: 8px;
//   display: inline-flex;
// `;

export const Header = styled.header`
  text-align: center;
  border-bottom: 2px solid #3a97e8;
  width: calc(100vw - 4px);
`;

export const Container = styled.div`
  padding: 0 15px;
  width: 1280px;
  display: inline-block;
`;

export const SearchLogo = styled.img`
  width: 34px;
`;

export const Logo = styled(NavLink)`
  // margin: auto 8px;
  position: absolute;
`;
