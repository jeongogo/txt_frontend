import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Home = () => {

  return (
    <Container className='container'>
      <div className="content-wrap">
        <Link to='/reservation/football'>football</Link>
        <Link to='/reservation/tennis'>tennis</Link>
      </div>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  background-color: #333;
`;

export default Home