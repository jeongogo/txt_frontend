import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <div className="logo">
        <Link to='/admin'>XION.T 관리자</Link>
      </div>
      <div className="lnb">
        <ul>
          <li>
            <Link to='/admin/users'>회원 목록</Link>
          </li>
        </ul>
      </div>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100vh;
  padding: 3rem 2rem;
  background-color: #222;
  .logo {
    text-align: center;
    color: white;
  }
  .lnb {
    margin-top: 3rem;
    ul {
      li {
        border-bottom: 1px solid #aaa;
        a {
          display: block;
          padding: 0.5rem 0;
          color: white;
        }
      }
    }
  }
`;

export default Header