import { useSelector } from 'react-redux';
import { Avatar } from 'antd';
import { Wrap, Buton } from './Usermenu.styled';
import { logOut } from '../../redux/Authorization/operations';
import { useDispatch } from 'react-redux';
import { LogoutOutlined } from '@ant-design/icons';

export const UserMenu = () => {
  const { email, name, avatar } = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  return (
    <Wrap>
      <Avatar src={avatar} />
      <p>{name}</p>
      <p>{email}</p>
      <Buton type="default" onClick={() => dispatch(logOut())}>
        <LogoutOutlined /> Вийти
      </Buton>
    </Wrap>
  );
};
