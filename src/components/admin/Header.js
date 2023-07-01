import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <div className="logo">
        <Link to='/admin'>
          <img src="/images/logo.png" alt="" />
        </Link>
      </div>
      <div className="lnb">
        <ul>
          <li>
            <Link to='/admin/users'>회원 목록</Link>
          </li>
          <li>
            <Link to='/admin/reservation'>신청 현황</Link>
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
  width: 25rem;
  height: 100vh;
  padding: 3rem 2rem;
  background-color: #222;
  z-index: 2;
  .logo {
    img {
      width: 90%;
    }
  }
  .lnb {
    margin-top: 3rem;
    ul {
      border-top: 1px solid #666;
      li {
        border-bottom: 1px solid #666;
        a {
          display: block;
          padding: 1.4rem 0;
          color: white;
        }
      }
    }
  }
  @media (max-width: 800px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5rem;
    padding: 0 2rem;
    .logo {
      img {
        width: 10rem;
      }
    }
    .lnb {
      margin-top: 0;
      ul {
        display: flex;
        border-top: 0;
        li {
          margin-left: 1rem;
          border-bottom: 0;
          a {
            padding: 1.4rem 0;
          }
        }
      }
    }
  }
`;

export default Header