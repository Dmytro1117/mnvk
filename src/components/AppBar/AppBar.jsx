import { useSelector } from 'react-redux';
import {
  Nav,
  Link,
  RegIcon,
  LogInIcon,
  HomeIcon,
  // ContactIcon,
  Container,
  Header,
  Logo,
  SearchLogo,
} from './AppBar.styled';
import Logotip from '../../../public/favicon.png';
import { Loader } from '../Loader/Loader';
import { UserMenu } from '../../components/UserMenu/UserMenu';

export const AppBar = () => {
  const { isLoaggedIn, isLoading } = useSelector(state => state.auth);
  return (
    <Header>
      {isLoading && <Loader />}

      <Container>
        <Nav>
          <Logo to="/">
            <SearchLogo src={Logotip} alt="logo" />
          </Logo>
          <div>
            <Link to="/">
              <HomeIcon />
              Головна
            </Link>
            <Link to="/driver">Водій</Link>
            <Link to="/secretary">Секретар</Link>
            <Link to="/web">Дизайнер</Link>
            <Link to="/locksmith">Слюсар</Link>
            <Link to="/cook">Кухар</Link>
            <Link to="/psychologist">Психолог</Link>
            {/* {isLoaggedIn && (
              <Link to="/secretary">
                <ContactIcon />
                Контакти
              </Link>
            )} */}
          </div>
          <div>
            {isLoaggedIn ? (
              <UserMenu />
            ) : (
              <>
                <Link to="/register">
                  <RegIcon />
                  Реєстрація
                </Link>
                <Link to="/login">
                  <LogInIcon />
                  Увійти
                </Link>
              </>
            )}
          </div>
        </Nav>
      </Container>
    </Header>
  );
};
