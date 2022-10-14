import React from 'react'
import useStore from "../../modules/store";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Header = ({ theme }) => {
  const currentUser = useStore((state) => state.currentUser);

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
                <li>
                  <Link to='/record'>기록보기</Link>
                </li>
                <li>
                  <Link to='/mypage'>마이페이지</Link>
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
        a {
          font-weight: 300;
        }
      }
    }
  }
`;

export default Header;