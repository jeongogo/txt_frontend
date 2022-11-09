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
        <Link to='/'>
          <img src="/images/logo.png" alt="" />
        </Link>
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
                  <Link to='/admin' target='_blank'>관리자</Link>
                </li>
              }
              <li>
                <Link to={`/record/${currentUser.id}`}>기록보기</Link>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 8rem;
  padding: 0 3rem;
  color: #000;
  &.dark {
    a, button {
      color: #fafafa;
    }
  }
  .logo {
    a {
      img {
        display: block;
        width: 18rem;
      }
    }
  }
  .tnb {
    ul {
      display: flex;
      li {
        margin-left: 2rem;
        a, button {
          font-size: 1.6rem;
          font-weight: 300;
        }
      }
    }
  }
`;

export default Header;