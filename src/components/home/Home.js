import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Home = () => {
  return (
    <Container className='container'>
      <div className="content-wrap">
        <div className="content">
          <h1>ACTION FOR YOUR<br />POTENTIAL</h1>
          <p>숨겨진 잠재력을 찾기 위한 <span>action</span><br /><span>XION-T</span>가 그 첫걸음 입니다.</p>
          <div className="btns">
            <Link to='/reservation'>XION-T 신청하기</Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  background-image: url('/images/main.png');
  background-repeat: no-repeat;
  background-size: cover;
  .content-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-top: -8rem;
    padding-top: 6rem;
    z-index: 2;
    .content {
      padding: 1rem 0 2rem 6rem;
      border-left: 12px solid #d01c3a;
      h1 {
        font-size: 6rem;
        font-weight: 900;
        color: #fff;
        line-height: 1.2;
      }
      p {
        margin-top: 4rem;
        font-size: 2.6rem;
        line-height: 1.8;
        color: #fff;
        text-transform: uppercase;
        span {
          font-weight: bold;
        }
      }
      .btns {
        margin-top: 5rem;
        a {
          display: inline-block;
          padding: 1.5rem 3rem;
          font-size: 1.8rem;
          color: #fff;
          background-color: #d01c3a;
          border-radius: 1rem;
        }
      }
    }
  }
  @media (max-width: 800px) {
    .content-wrap {
      .content {
        padding: 1rem 0 2rem 4rem;
        border-left: 8px solid #d01c3a;
        h1 {
          font-size: 4rem;
        }
        p {
          margin-top: 2rem;
          font-size: 2rem;
        }
        .btns {
          a {
            font-size: 1.4rem;
          }
        }
      }
    }
  }
  @media (max-width: 480px) {
    background-position: center;
    .content-wrap {
      margin-top: -6rem;
      .content {
        padding-left: 0;
        border-left: 0;
        text-align: center;
        h1 {
          font-size: 3rem;
        }
        p {
          font-size: 1.6rem;
        }
        .btns {
          margin-top: 2rem;
          a {
            padding: 1.2rem 2.2rem;
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`;

export default Home