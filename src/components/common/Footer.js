import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      @ XION CORP. ALL RIGHTS RESERVED
    </Container>
  )
}

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  right: 3rem;
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
  font-size: 1rem;
  color: #888;
`;

export default Footer