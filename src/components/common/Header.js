import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import useStore from "../../modules/store";
import styled from 'styled-components';

const Header = ({ theme }) => {
  const navigate = useNavigate();
  const currentUser = useStore((state) => state.currentUser);
  const setCurrentUser = useStore((state) => state.setCurrentUser);

  const onLogout = () => {
    const user = {
      id: '',
      email: '',
      name: '',
      accessToken: '',
      isAdmin: ''
    }
    setCurrentUser(user);
    navigate('/');
  }

  return (
    <Container className={theme === 'dark' ? 'dark' : 'light' }>
      <div className="logo">
        <Link to='/'>XION.T</Link>
      </div>
      <div className="tnb">
        {currentUser.id === ''
          ?
            <ul>
              <li>
                <Link to='/login'>로그인</Link>
              </li>
              <li>
                <Link to='/register'>회원가입</Link>
              </li>
            </ul>
          :
            <ul>
              {currentUser.isAdmin &&
                <li>
                  <Link to='/admin'>관리자</Link>
                </li>
              }
              <li>
                <Link to='/record'>기록보기</Link>
              </li>
              <li>
                <Link to='/profile'>마이페이지</Link>
              </li>
              <li>
                <button type='button' onClick={onLogout}>로그아웃</button>
              </li>
            </ul>
        }
      </div>
    </Container>
  )
}

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  z-index: 2;
  &.dark {
    color: #fafafa;
  }
  .logo {
    a {
      font-weight: bold;
    }
  }
  .tnb {
    ul {
      display: flex;
      li {
        margin-left: 1rem;
        a, button {
          font-weight: 300;
          color: #fff;
        }
      }
    }
  }
`;

export default Header;