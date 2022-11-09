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
          margin-right: 2rem;
          font-size: 1.8rem;
          color: #fff;
          background-color: #d01c3a;
          border-radius: 1rem;
        }
      }
    }
  }
`;

export default Home